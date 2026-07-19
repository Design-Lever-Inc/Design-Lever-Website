#!/usr/bin/env python3
"""One-shot codegen: converts the Design Lever *.dc.html handoff prototypes
into Next.js App Router pages + a merged global stylesheet.

The prototypes are inline-styled HTML templates with a small mustache DSL
({{ expr }}, <sc-if>, <sc-for>) over a React runtime. This script:
  1. parses each page, strips the shared nav/footer (replaced by components),
  2. converts markup to JSX (style strings -> objects, DSL -> JS expressions),
  3. merges all per-page <style> blocks into one globals.css, scoping
     conflicting rules under a per-page .pg-<slug> class,
  4. emits app/<route>/page.tsx (static pages as server components; pages with
     DC state logic as "use client" components with the original logic saved
     alongside as *.logic.js for hand-porting).

Run:  python3 scripts/convert.py <handoff-pages-dir>
"""
import sys, os, re, json, hashlib, collections
from html.parser import HTMLParser

SRC = sys.argv[1] if len(sys.argv) > 1 else "."
OUT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

ROUTES = {
    "Design Lever Home.dc.html": "/",
    "Design Lever Academy.dc.html": "/academy",
    "Design Lever Academy Foundation.dc.html": "/academy/foundation",
    "Design Lever Academy Executive.dc.html": "/academy/executive",
    "Design Lever Faculty.dc.html": "/faculty",
    "Design Lever Network.dc.html": "/network",
    "Design Lever The Lever.dc.html": "/the-lever",
    "Design Lever Talent Hub.dc.html": "/talent-hub",
    "Design Lever Bench.dc.html": "/bench",
    "Design Lever Research.dc.html": "/research",
    "Design Lever About.dc.html": "/about",
    "Design Lever Careers.dc.html": "/careers",
    "Design Lever Press.dc.html": "/press",
    "Design Lever Contact.dc.html": "/contact",
    "Design Lever Diagnostic.dc.html": "/diagnostic",
    "Design Lever Article.dc.html": "/articles/why-the-cdo-role-keeps-failing",
    "Design Lever Article Design PnL.dc.html": "/articles/design-on-the-pnl",
    "Design Lever Article Exit Curve.dc.html": "/articles/the-eighteen-month-exit-curve",
    "Design Lever Article Health Assessment.dc.html": "/articles/design-health-assessment",
    "Design Lever Spotlight CDO.dc.html": "/spotlights/a-cdo-who-stayed",
    "Design Lever Spotlight Diaspora.dc.html": "/spotlights/leading-from-abroad",
    "Design Lever Spotlight Founder.dc.html": "/spotlights/investing-before-the-case-studies",
    "Design Lever Spotlight Healthtech.dc.html": "/spotlights/from-bottleneck-to-pace-setter",
}

TITLES = {
    "/": "Design Lever Inc. — Africa's first fractional design leadership company",
    "/academy": "Academy",
    "/academy/foundation": "Academy · Foundation track",
    "/academy/executive": "Academy · Executive track",
    "/faculty": "Faculty",
    "/network": "Network",
    "/the-lever": "The Lever · Community",
    "/talent-hub": "Talent Hub",
    "/bench": "The Bench",
    "/research": "Research",
    "/about": "About",
    "/careers": "Careers",
    "/press": "Press",
    "/contact": "Contact",
    "/diagnostic": "The Diagnostic",
    "/articles/why-the-cdo-role-keeps-failing": "Why the CDO role keeps failing in Nigeria",
    "/articles/design-on-the-pnl": "Design on the P&L, in Nigeria",
    "/articles/the-eighteen-month-exit-curve": "The eighteen-month exit curve",
    "/articles/design-health-assessment": "What a design health assessment actually finds",
    "/spotlights/a-cdo-who-stayed": "A CDO who stayed back home",
    "/spotlights/leading-from-abroad": "Leading from abroad",
    "/spotlights/investing-before-the-case-studies": "Investing before the case studies",
    "/spotlights/from-bottleneck-to-pace-setter": "From bottleneck to pace-setter",
}

HOVER_CLASSES = {
    "background:#FDFBF0;color:#44063B": "hov-cream-plum",
    "background:#FF6D35": "hov-orange",
    "background:#FDFBF0": "hov-cream",
    "background:#3B6FEB;color:#FDFBF0": "hov-blue-cream",
    "background:#7A2A6E": "hov-plum-mid",
    "background:#44063B": "hov-plum",
    "background:#FFBCE8": "hov-pink",
    "background:#FDFBF0;color:#14191D": "hov-cream-slate",
}

VOID = {"area","base","br","col","embed","hr","img","input","link","meta","source","track","wbr"}
INLINE = {"a","span","b","i","em","strong","code","u","s","small","sup","sub","img"}

# lowercase -> JSX attribute name
ATTR_MAP = {
    "class": "className", "for": "htmlFor", "tabindex": "tabIndex",
    "colspan": "colSpan", "rowspan": "rowSpan", "crossorigin": "crossOrigin",
    "autocomplete": "autoComplete", "readonly": "readOnly", "maxlength": "maxLength",
    "viewbox": "viewBox", "preserveaspectratio": "preserveAspectRatio",
    "stroke-width": "strokeWidth", "stroke-dasharray": "strokeDasharray",
    "stroke-linecap": "strokeLinecap", "stroke-linejoin": "strokeLinejoin",
    "stroke-opacity": "strokeOpacity", "fill-opacity": "fillOpacity",
    "fill-rule": "fillRule", "clip-rule": "clipRule", "stop-color": "stopColor",
    "stop-opacity": "stopOpacity", "vector-effect": "vectorEffect",
    "text-anchor": "textAnchor", "dominant-baseline": "dominantBaseline",
    "font-family": "fontFamily", "font-size": "fontSize", "letter-spacing": "letterSpacing",
    "onclick": "onClick", "oninput": "onChange", "onchange": "onChange",
    "onsubmit": "onSubmit", "onkeydown": "onKeyDown",
    "srcset": "srcSet", "frameborder": "frameBorder", "allowfullscreen": "allowFullScreen",
    "enterkeyhint": "enterKeyHint", "inputmode": "inputMode", "spellcheck": "spellCheck",
}
DROP_ATTRS = {"hint-placeholder-val", "hint-placeholder-count", "data-dc-atomics"}

unknown_attrs = collections.Counter()
warnings = []

# ---------------------------------------------------------------- DOM parsing
class Node:
    def __init__(self, tag=None, attrs=None, text=None, comment=None):
        self.tag, self.attrs, self.text, self.comment = tag, attrs or [], text, comment
        self.children = []

class TreeBuilder(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.root = Node(tag="#root")
        self.stack = [self.root]
    def handle_starttag(self, tag, attrs):
        n = Node(tag=tag, attrs=attrs)
        self.stack[-1].children.append(n)
        if tag not in VOID:
            self.stack.append(n)
    def handle_startendtag(self, tag, attrs):
        self.stack[-1].children.append(Node(tag=tag, attrs=attrs))
    def handle_endtag(self, tag):
        for i in range(len(self.stack) - 1, 0, -1):
            if self.stack[i].tag == tag:
                del self.stack[i:]
                break
    def handle_data(self, data):
        self.stack[-1].children.append(Node(text=data))
    def handle_comment(self, data):
        self.stack[-1].children.append(Node(comment=data))

def parse_html(src):
    tb = TreeBuilder()
    tb.feed(src)
    return tb.root

# ---------------------------------------------------------------- CSS helpers
def split_rules(css):
    css = re.sub(r"/\*.*?\*/", "", css, flags=re.S)
    out, depth, buf = [], 0, ""
    for ch in css:
        buf += ch
        if ch == "{":
            depth += 1
        elif ch == "}":
            depth -= 1
            if depth == 0:
                out.append(buf.strip())
                buf = ""
    return [r for r in out if r]

def css_prop_to_jsx(prop):
    prop = prop.strip()
    if prop.startswith("--"):
        return prop  # custom property, keep as-is (quoted key)
    if prop.startswith("-webkit-"):
        rest = prop[len("-webkit-"):]
        return "Webkit" + "".join(w.capitalize() for w in rest.split("-"))
    if prop.startswith("-moz-"):
        rest = prop[len("-moz-"):]
        return "Moz" + "".join(w.capitalize() for w in rest.split("-"))
    parts = prop.split("-")
    return parts[0] + "".join(w.capitalize() for w in parts[1:])

def split_decls(style):
    """Split 'a:b;c:d' on ';' not inside parens/quotes."""
    out, depth, q, buf = [], 0, None, ""
    for ch in style:
        if q:
            buf += ch
            if ch == q:
                q = None
            continue
        if ch in "'\"":
            q = ch; buf += ch; continue
        if ch == "(":
            depth += 1
        elif ch == ")":
            depth -= 1
        if ch == ";" and depth == 0:
            out.append(buf); buf = ""
        else:
            buf += ch
    if buf.strip():
        out.append(buf)
    return [d.strip() for d in out if d.strip()]

def js_str(s):
    return json.dumps(s, ensure_ascii=False)

def style_to_obj(style):
    """CSS declaration string -> JSX object literal source. Returns (src, has_custom)."""
    pairs, has_custom = [], False
    for decl in split_decls(style):
        if ":" not in decl:
            continue
        prop, val = decl.split(":", 1)
        prop, val = prop.strip(), val.strip()
        if not prop:
            continue
        key = css_prop_to_jsx(prop)
        if key.startswith("--"):
            has_custom = True
            pairs.append(f"{js_str(key)}:{js_str(val)}")
        else:
            pairs.append(f"{key}:{js_str(val)}")
    return "{" + ",".join(pairs) + "}", has_custom

# ---------------------------------------------------------------- JSX emission
MUSTACHE = re.compile(r"\{\{\s*(.+?)\s*\}\}", re.S)

class Ctx:
    def __init__(self):
        self.uses_link = False
        self.uses_fragment = False
        self.uses_imageslot = False
        self.uses_cssprops = False

def esc_jsx_text(t):
    return re.sub(r"[{}<]", lambda m: {"{": "{'{'}", "}": "{'}'}", "<": "{'<'}"}[m.group(0)], t)

def text_to_jsx(t):
    """Text node -> JSX, expanding mustaches."""
    out, last = [], 0
    for m in MUSTACHE.finditer(t):
        pre = t[last:m.start()]
        if pre:
            out.append(esc_jsx_text(pre))
        out.append("{" + m.group(1) + "}")
        last = m.end()
    rest = t[last:]
    if rest:
        out.append(esc_jsx_text(rest))
    return "".join(out)

def map_href(href):
    if href.startswith(("http", "mailto:", "tel:")):
        return href, False
    m = re.match(r"(Design Lever [^#]+?\.dc\.html)(#.*)?$", href)
    if m:
        base = ROUTES.get(m.group(1))
        if base is None:
            warnings.append("unmapped link: " + href)
            return href, False
        return base + (m.group(2) or ""), True
    if href.startswith("#"):
        return href, False
    if href.startswith(("assets/", "downloads/")):
        return "/" + href, False
    warnings.append("odd href: " + href)
    return href, False

def convert_attrs(node, ctx, extra_class=None):
    """Returns (attr_string, tagname). Handles link mapping + style-hover."""
    tag = node.tag
    attrs = []
    classes = []
    if extra_class:
        classes.append(extra_class)
    is_internal_link = False
    for k, v in node.attrs:
        if k in DROP_ATTRS:
            continue
        if k == "style-hover":
            hc = HOVER_CLASSES.get(re.sub(r"\s", "", v or ""))
            if hc:
                classes.append(hc)
            else:
                warnings.append(f"unmapped style-hover: {v}")
            continue
        if k == "class":
            if v:
                classes.append(v)
            continue
        if k == "style" and v is not None:
            m = MUSTACHE.fullmatch(v.strip())
            if m:
                attrs.append(f"style={{{m.group(1)}}}")
            else:
                obj, has_custom = style_to_obj(v)
                if has_custom:
                    ctx.uses_cssprops = True
                    attrs.append(f"style={{{obj} as CSSProperties}}")
                else:
                    attrs.append(f"style={{{obj}}}")
            continue
        if k == "href" and tag == "a" and v is not None and not MUSTACHE.search(v):
            href, internal = map_href(v)
            is_internal_link = internal
            attrs.append(f'href={js_str(href)}')
            continue
        if k == "src" and v is not None and v.startswith("assets/"):
            attrs.append(f'src={js_str("/" + v)}')
            continue
        name = ATTR_MAP.get(k)
        if name is None:
            if k.startswith("data-") or k.startswith("aria-") or k in (
                "id","href","src","alt","type","placeholder","name","width","height",
                "fill","stroke","cx","cy","r","x","y","x1","x2","y1","y2","d","points",
                "target","rel","title","role","value","min","max","step","rows","cols",
                "loading","download","open","transform","opacity","rx","ry","dx","dy",
            ):
                name = k
            else:
                unknown_attrs[k] += 1
                name = k
        if v is None:
            attrs.append(name)
            continue
        m = MUSTACHE.fullmatch(v.strip())
        if m:
            attrs.append(f"{name}={{{m.group(1)}}}")
        elif MUSTACHE.search(v):
            tpl = MUSTACHE.sub(lambda mm: "${" + mm.group(1) + "}", v)
            attrs.append(f"{name}={{`{tpl}`}}")
        else:
            attrs.append(f"{name}={js_str(v)}")
    if classes:
        attrs.insert(0, f'className={js_str(" ".join(classes))}')
    if tag == "a" and is_internal_link:
        ctx.uses_link = True
        tag = "Link"
    return (" " + " ".join(attrs) if attrs else ""), tag

def is_ws(n):
    return n.text is not None and n.text.strip() == ""

def emit(node, ctx, indent=0):
    """Node -> list of JSX lines."""
    pad = "  " * indent
    if node.comment is not None:
        c = node.comment.strip().replace("*/", "* /")
        return [f"{pad}{{/* {c} */}}"]
    if node.text is not None:
        t = node.text
        if t.strip() == "":
            return []
        jsx = text_to_jsx(re.sub(r"\s+", " ", t.strip()))
        return [pad + jsx]

    tag = node.tag
    if tag == "sc-if":
        cond = None
        for k, v in node.attrs:
            if k == "value" and v:
                m = MUSTACHE.fullmatch(v.strip())
                if m:
                    cond = m.group(1)
        if cond is None:
            warnings.append("sc-if without condition")
            cond = "true"
        inner = emit_children(node, ctx, indent + 1)
        return ([f"{pad}{{{cond} && (", f"{pad}  <>"] + inner + [f"{pad}  </>", f"{pad})}}"])
    if tag == "sc-for":
        lst, var = None, "item"
        for k, v in node.attrs:
            if k == "list" and v:
                m = MUSTACHE.fullmatch(v.strip())
                if m:
                    lst = m.group(1)
            if k == "as" and v:
                var = v
        if lst is None:
            warnings.append("sc-for without list")
            lst = "[]"
        ctx.uses_fragment = True
        inner = emit_children(node, ctx, indent + 1)
        return ([f"{pad}{{{lst}.map(({var}, {var}Idx) => (", f"{pad}  <Fragment key={{{var}Idx}}>"]
                + inner + [f"{pad}  </Fragment>", f"{pad}))}}"])
    if tag == "image-slot":
        ctx.uses_imageslot = True
        attrstr, _ = convert_attrs(node, ctx)
        attrstr = re.sub(r' shape="[a-z]+"', "", attrstr)
        return [f"{pad}<ImageSlot{attrstr} />"]
    if tag in ("helmet", "script", "style"):
        return []

    attrstr, jsxtag = convert_attrs(node, ctx)
    if tag in VOID:
        return [f"{pad}<{jsxtag}{attrstr} />"]
    inner = emit_children(node, ctx, indent + 1)
    if not inner:
        return [f"{pad}<{jsxtag}{attrstr}></{jsxtag}>"]
    # inline single short text child -> one line
    if len(inner) == 1 and not inner[0].lstrip().startswith("<") and len(inner[0]) < 100:
        return [f"{pad}<{jsxtag}{attrstr}>{inner[0].strip()}</{jsxtag}>"]
    return [f"{pad}<{jsxtag}{attrstr}>"] + inner + [f"{pad}</{jsxtag}>"]

def emit_children(node, ctx, indent):
    out = []
    kids = node.children
    for i, ch in enumerate(kids):
        if is_ws(ch):
            # keep meaningful inter-inline whitespace
            prev = next((k for k in reversed(kids[:i]) if not is_ws(k)), None)
            nxt = next((k for k in kids[i+1:] if not is_ws(k)), None)
            def inlineish(n):
                return n is not None and (n.text is not None or (n.tag in INLINE))
            if "\n" not in (ch.text or "") and inlineish(prev) and inlineish(nxt):
                out.append("  " * indent + '{" "}')
            continue
        out.extend(emit(ch, ctx, indent))
    return out

# ---------------------------------------------------------------- page assembly
def find_first(node, pred):
    if pred(node):
        return node
    for ch in node.children:
        r = find_first(ch, pred)
        if r:
            return r
    return None

def has_class(node, cls):
    for k, v in (node.attrs or []):
        if k == "class" and v and cls in v.split():
            return True
    return False

def node_signature(node):
    """Serialize a subtree for equality checks."""
    if node.text is not None:
        return node.text.strip()
    if node.comment is not None:
        return ""
    return node.tag + json.dumps(sorted(node.attrs)) + "|".join(
        node_signature(c) for c in node.children if not is_ws(c))

def strip_and_mark(root, page):
    """Remove nav + footer subtrees, remember what we removed."""
    removed = {}
    def walk(node):
        newkids = []
        for ch in node.children:
            if ch.tag and has_class(ch, "dl-nav"):
                # active nav item: link with dl-navlink--active or color #FF6D35
                active = "none"
                act = find_first(ch, lambda n: n.tag == "a" and has_class(n, "dl-navlink--active"))
                if act:
                    for k, v in act.attrs:
                        if k == "href":
                            base = ROUTES.get(v.split("#")[0], "")
                            active = {"/": "home", "/academy": "academy", "/network": "network",
                                      "/research": "research", "/about": "about"}.get(base, "none")
                removed["nav"] = active
                newkids.append(Node(tag="site-nav", attrs=[("active", active)]))
                continue
            if ch.tag == "div" and any(
                gc.tag == "div" and any(k == "id" and v == "dl-foot-grid" for k, v in gc.attrs)
                for gc in ch.children if gc.tag):
                removed["footer"] = node_signature(ch)
                newkids.append(Node(tag="site-footer", attrs=[]))
                continue
            walk(ch)
            newkids.append(ch)
        node.children = newkids
    walk(root)
    return removed

def convert_page(fname):
    src = open(os.path.join(SRC, fname)).read()
    route = ROUTES[fname]
    slug = "home" if route == "/" else route.strip("/").replace("/", "-")

    m = re.search(r"<x-dc>(.*)</x-dc>", src, re.S)
    body = m.group(1)
    # DC logic script (after </x-dc>)
    dm = re.search(r'<script type="text/x-dc" data-dc-script[^>]*>(.*?)</script>', src, re.S)
    logic = dm.group(1).strip() if dm else None
    # non-driver inline scripts already handled globally in SiteBehaviors

    root = parse_html(body)
    removed = strip_and_mark(root, fname)

    ctx = Ctx()
    lines = emit_children(root, ctx, 3)
    # splice SiteNav / SiteFooter
    out_lines = []
    for ln in lines:
        ln = re.sub(r'<site-nav active="([a-z]+)"></site-nav>',
                    lambda m: f'<SiteNav active="{m.group(1)}" />', ln)
        ln = ln.replace("<site-nav", "<SiteNav").replace("</site-nav>", "")
        ln = ln.replace("<site-footer></site-footer>", "<SiteFooter />")
        out_lines.append(ln)

    is_client = logic is not None and len(logic) > 600  # tiny prop-default classes -> static
    title = TITLES[route]
    # description: first substantial <p>
    desc = ""
    p = find_first(root, lambda n: n.tag == "p")
    if p:
        desc = re.sub(r"\s+", " ", "".join(
            c.text or "" for c in p.children if c.text)).strip()[:158]

    imports = []
    if ctx.uses_link:
        imports.append('import Link from "next/link";')
    imports.append('import { SiteNav } from "@/components/SiteNav";')
    imports.append('import { SiteFooter } from "@/components/SiteFooter";')
    if ctx.uses_imageslot:
        imports.append('import { ImageSlot } from "@/components/ImageSlot";')
    react_imports = []
    if ctx.uses_fragment:
        react_imports.append("Fragment")
    if ctx.uses_cssprops:
        react_imports.append("type CSSProperties")
    if react_imports:
        imports.insert(0, f'import {{ {", ".join(react_imports)} }} from "react";')

    fn_name = "Page" + "".join(w.capitalize() for w in re.split(r"[^a-zA-Z0-9]+", slug) if w)
    head = []
    if is_client:
        head.append('"use client";\n')
        head.extend(imports)
        head.append("")
        head.append("/* TODO(port): state logic from prototype — see ./_logic.js */")
    else:
        head.extend(imports)
        head.append('import type { Metadata } from "next";')
        head.append("")
        head.append(f"export const metadata: Metadata = {{ title: {js_str(title)}, description: {js_str(desc)} }};")
    head.append("")
    head.append(f"export default function {fn_name}() {{")
    head.append("  return (")
    head.append(f'    <div className="pg-{slug}">')
    tail = ["    </div>", "  );", "}", ""]

    # route dir
    rdir = os.path.join(OUT, "app") if route == "/" else os.path.join(OUT, "app", route.strip("/"))
    os.makedirs(rdir, exist_ok=True)
    with open(os.path.join(rdir, "page.tsx"), "w") as f:
        f.write("\n".join(head + out_lines + tail))
    if logic:
        with open(os.path.join(rdir, "_logic.js"), "w") as f:
            f.write(logic + "\n")
    return removed, slug, is_client

# ---------------------------------------------------------------- CSS merge
def build_css(pages):
    # selector -> {page: [rule texts in order]}
    per_sel = collections.defaultdict(dict)
    order = []  # (selector) first-seen order
    slug_of = {}
    for fname in pages:
        route = ROUTES[fname]
        slug = "home" if route == "/" else route.strip("/").replace("/", "-")
        slug_of[fname] = slug
        css = "".join(re.findall(r"<style>(.*?)</style>", open(os.path.join(SRC, fname)).read(), re.S))
        for rule in split_rules(css):
            sel = re.sub(r"\s+", " ", rule.split("{", 1)[0].strip())
            if sel not in per_sel:
                order.append(sel)
            per_sel[sel].setdefault(fname, []).append(re.sub(r"\s+", " ", rule.strip()))

    global_rules, scoped = [], collections.defaultdict(list)  # slug -> rules
    for sel in order:
        variants = per_sel[sel]
        lists = {json.dumps(v) for v in variants.values()}
        if len(lists) == 1:
            global_rules.extend(next(iter(variants.values())))
        else:
            for fname, rules in variants.items():
                slug = slug_of[fname]
                for r in rules:
                    scoped[slug].append(scope_rule(r, f".pg-{slug}"))
    return global_rules, scoped

def scope_rule(rule, prefix):
    sel, body = rule.split("{", 1)
    body = body.rstrip()
    if body.endswith("}"):
        body = body[:-1]
    sel = sel.strip()
    if sel.startswith("@media"):
        inner = split_rules(body)
        return sel + "{" + "".join(scope_rule(r, prefix) for r in inner) + "}"
    if sel.startswith("@"):
        return rule  # keyframes etc: leave global (conflicts reported separately)
    parts = [p.strip() for p in sel.split(",")]
    out = []
    for p in parts:
        if p in ("body", "html"):
            out.append(prefix)
        else:
            out.append(f"{prefix} {p}")
    return ", ".join(out) + "{" + body + "}"

def main():
    pages = [f for f in sorted(os.listdir(SRC)) if f.endswith(".dc.html")]
    footers = {}
    client_pages = []
    for f in pages:
        removed, slug, is_client = convert_page(f)
        footers[f] = hashlib.md5((removed.get("footer") or "MISSING").encode()).hexdigest()[:8]
        if is_client:
            client_pages.append(slug)
        if "nav" not in removed:
            warnings.append(f"{f}: nav not found")
        if "footer" not in removed:
            warnings.append(f"{f}: footer not found")

    global_rules, scoped = build_css(pages)
    css = ["/* ============ merged from prototype pages (generated) ============ */"]
    css.extend(global_rules)
    css.append("/* ---- hover utility classes (from style-hover attrs) ---- */")
    for val, cls in HOVER_CLASSES.items():
        decls = ";".join(d + " !important" for d in val.split(";"))
        css.append(f".{cls}:hover{{{decls}}}")
    for slug, rules in sorted(scoped.items()):
        css.append(f"/* ---- page: {slug} ---- */")
        css.extend(rules)
    with open(os.path.join(OUT, "styles", "prototype.css"), "w") as fh:
        fh.write("\n".join(css) + "\n")

    print("footer hashes:", collections.Counter(footers.values()))
    print("client pages:", client_pages)
    print("unknown attrs:", dict(unknown_attrs))
    print("warnings:")
    for w in sorted(set(warnings)):
        print("  -", w)

if __name__ == "__main__":
    main()

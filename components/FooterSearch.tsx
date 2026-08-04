"use client";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { searchEntries } from "@/lib/search";

/** Client-side site search for the footer. Runs over the static index in
 *  lib/search.ts — no backend. Results open upward (the search sits at the
 *  page bottom) and are fully keyboard-operable. */
export function FooterSearch() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();

  const results = useMemo(() => searchEntries(query), [query]);
  const showPanel = open && query.trim().length >= 2;

  // reset the highlighted option whenever the result set changes
  useEffect(() => setActive(0), [query]);

  // close on outside click
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  const go = (href: string) => {
    setOpen(false);
    setQuery("");
    router.push(href);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setOpen(false);
      return;
    }
    if (!showPanel || results.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => (i + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => (i - 1 + results.length) % results.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      const chosen = results[active] ?? results[0];
      if (chosen) go(chosen.href);
    }
  };

  return (
    <div className="dl-search" ref={rootRef}>
      <div
        style={{
          font: "400 10px 'Spline Sans Mono',monospace",
          color: "#FF6D35",
          letterSpacing: ".12em",
          textTransform: "uppercase",
          marginBottom: "12px",
        }}
      >
        Search
      </div>
      <div className="dl-search-field" style={{ position: "relative" }}>
        {showPanel && (
          <div className="dl-search-panel" role="listbox" id={listId} aria-label="Search results">
            {results.length === 0 ? (
              <div className="dl-search-empty">No matches for &ldquo;{query.trim()}&rdquo;.</div>
            ) : (
              results.map((r, i) => (
                <Link
                  key={r.href}
                  href={r.href}
                  role="option"
                  aria-selected={i === active}
                  className={i === active ? "dl-search-opt dl-search-opt--active" : "dl-search-opt"}
                  onMouseEnter={() => setActive(i)}
                  onClick={(e) => {
                    e.preventDefault();
                    go(r.href);
                  }}
                >
                  <span className="dl-search-opt-title">{r.title}</span>
                  <span className="dl-search-opt-type">{r.type}</span>
                  <span className="dl-search-opt-desc">{r.description}</span>
                </Link>
              ))
            )}
          </div>
        )}
        <svg className="dl-search-icon" viewBox="0 0 20 20" width="16" height="16" aria-hidden="true">
          <circle cx="9" cy="9" r="6" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <line x1="13.5" y1="13.5" x2="18" y2="18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
        <input
          className="dl-search-input"
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKeyDown}
          placeholder="Search articles, topics, pages…"
          aria-label="Search the site"
          role="combobox"
          aria-expanded={showPanel}
          aria-controls={listId}
          aria-autocomplete="list"
          autoComplete="off"
        />
      </div>
    </div>
  );
}

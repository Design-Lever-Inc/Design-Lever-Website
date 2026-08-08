"use client";

import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { searchEntries } from "@/lib/search";
import { ArrowIcon } from "./ArrowIcon";

const EXIT_DURATION = 280;

const QUICK_PATHS = [
  ["/practice", "Practice", "Design leadership for companies"],
  ["/academy", "Academy", "Develop design leaders"],
  ["/network", "Network", "Connect talent and opportunity"],
  ["/research", "Research", "Evidence, reports and insight"],
  ["/diagnostic", "Diagnostic", "Find the cost of design inefficiency"],
] as const;

/** Full-footer search takeover. The trigger stays lightweight; activating it
 *  mounts an accessible, keyboard-operable search layer over the footer. */
export function FooterSearch() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const closeTimerRef = useRef<number | null>(null);
  const listId = useId();
  const titleId = useId();

  const results = useMemo(() => searchEntries(query), [query]);
  const isSearching = query.trim().length >= 2;

  useEffect(() => setActive(0), [query]);

  const openSearch = useCallback(() => {
    if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const footer = rootRef.current?.closest("footer");
    if (footer) {
      const navHeight = document.querySelector<HTMLElement>(".dl-nav")?.getBoundingClientRect().height ?? 0;
      const footerTop = window.scrollY + footer.getBoundingClientRect().top - navHeight;
      window.scrollTo({ top: footerTop, behavior: reduceMotion ? "auto" : "smooth" });
    }
    setMounted(true);
  }, []);

  const closeSearch = useCallback((returnFocus = true) => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setVisible(false);

    if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = window.setTimeout(() => {
      setMounted(false);
      setQuery("");
      setActive(0);
      if (returnFocus) triggerRef.current?.focus();
    }, reduceMotion ? 0 : EXIT_DURATION);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    let secondFrame = 0;
    const firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(() => {
        setVisible(true);
        inputRef.current?.focus({ preventScroll: true });
      });
    });

    return () => {
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
    };
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;

    const onPointerDown = (event: PointerEvent) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) closeSearch();
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [closeSearch, mounted]);

  useEffect(
    () => () => {
      if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    },
    [],
  );

  const go = (href: string) => {
    closeSearch(false);
    router.push(href);
  };

  const onInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Escape") {
      event.preventDefault();
      event.stopPropagation();
      closeSearch();
      return;
    }
    if (!isSearching || results.length === 0) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActive((index) => (index + 1) % results.length);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActive((index) => (index - 1 + results.length) % results.length);
    } else if (event.key === "Enter") {
      event.preventDefault();
      const chosen = results[active] ?? results[0];
      if (chosen) go(chosen.href);
    }
  };

  const onDialogKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      event.preventDefault();
      closeSearch();
      return;
    }
    if (event.key !== "Tab" || !dialogRef.current) return;

    const focusable = Array.from(
      dialogRef.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), input:not([disabled]), a[href]:not([aria-hidden="true"])',
      ),
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  };

  return (
    <div className="dl-search" ref={rootRef}>
      <span className="dl-search-trigger-label">Search</span>
      <button
        ref={triggerRef}
        type="button"
        className="dl-search-trigger"
        aria-haspopup="dialog"
        aria-expanded={mounted}
        onClick={openSearch}
      >
        <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true">
          <circle cx="9" cy="9" r="6" fill="none" stroke="currentColor" strokeWidth="1.4" />
          <line x1="13.5" y1="13.5" x2="18" y2="18" stroke="currentColor" strokeWidth="1.4" />
        </svg>
        <span>Search articles, topics, pages…</span>
        <span className="dl-search-trigger__action">Open <ArrowIcon direction="right" /></span>
      </button>

      {mounted && (
        <div
          ref={dialogRef}
          className="dl-search-takeover"
          data-visible={visible ? "true" : "false"}
          role="dialog"
          aria-labelledby={titleId}
          onKeyDown={onDialogKeyDown}
        >
          <div className="dl-search-takeover__top">
            <span>Site search</span>
            <button type="button" className="dl-search-close" onClick={() => closeSearch()}>
              <span>Close</span>
              <span aria-hidden="true">Esc</span>
            </button>
          </div>

          <div className="dl-search-takeover__body">
            <h2 id={titleId}>What are you looking for?</h2>
            <div className="dl-search-query">
              <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                <circle cx="10.5" cy="10.5" r="7.5" fill="none" stroke="currentColor" strokeWidth="1.3" />
                <line x1="16" y1="16" x2="22" y2="22" stroke="currentColor" strokeWidth="1.3" />
              </svg>
              <input
                ref={inputRef}
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={onInputKeyDown}
                placeholder="Search Design Lever"
                aria-label="Search Design Lever"
                role="combobox"
                aria-expanded={isSearching}
                aria-controls={listId}
                aria-activedescendant={
                  isSearching && results[active] ? `${listId}-option-${active}` : undefined
                }
                aria-autocomplete="list"
                autoComplete="off"
              />
              {query && (
                <button type="button" className="dl-search-clear" onClick={() => setQuery("")}>
                  Clear
                </button>
              )}
            </div>

            <div className="dl-search-content">
              {!isSearching ? (
                <div className="dl-search-quick" aria-label="Suggested destinations">
                  <span className="dl-search-section-label">Explore</span>
                  <div className="dl-search-quick__grid">
                    {QUICK_PATHS.map(([href, title, description]) => (
                      <Link key={href} href={href} onClick={(event) => { event.preventDefault(); go(href); }}>
                        <span>{title}</span>
                        <small>{description}</small>
                        <ArrowIcon direction="right" />
                      </Link>
                    ))}
                  </div>
                </div>
              ) : results.length === 0 ? (
                <div className="dl-search-no-results" role="status">
                  <span>No results for “{query.trim()}”</span>
                  <p>Try design leadership, Academy, research or diagnostic.</p>
                </div>
              ) : (
                <div className="dl-search-results-wrap">
                  <div className="dl-search-results-head" role="status" aria-live="polite">
                    <span>Results</span>
                    <span>{results.length} found</span>
                  </div>
                  <div className="dl-search-results" role="listbox" id={listId} aria-label="Search results">
                    {results.map((result, index) => (
                      <Link
                        key={result.href}
                        id={`${listId}-option-${index}`}
                        href={result.href}
                        role="option"
                        aria-selected={index === active}
                        className={index === active ? "dl-search-result dl-search-result--active" : "dl-search-result"}
                        onMouseEnter={() => setActive(index)}
                        onClick={(event) => {
                          event.preventDefault();
                          go(result.href);
                        }}
                      >
                        <span className="dl-search-result__type">{result.type}</span>
                        <span className="dl-search-result__title">{result.title}</span>
                        <span className="dl-search-result__description">{result.description}</span>
                        <ArrowIcon direction="right" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

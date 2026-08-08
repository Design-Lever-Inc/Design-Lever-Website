"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { ArrowIcon } from "@/components/ArrowIcon";

export type TestimonialItem = {
  quote: string;
  initials: string;
  name: string;
  designation: string;
  company: string;
  headshot?: string;
  href: string;
  metrics: readonly (readonly [value: string, label: string])[];
};

export function TestimonialCarousel({
  testimonials,
  label = "In their words",
}: {
  testimonials: readonly TestimonialItem[];
  label?: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const labelId = useId();
  const activeTestimonial = testimonials[activeIndex];

  useEffect(() => {
    if (
      testimonials.length < 2 ||
      paused ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) return;

    const timer = window.setTimeout(() => {
      setActiveIndex((index) => (index + 1) % testimonials.length);
    }, 6500);

    return () => window.clearTimeout(timer);
  }, [activeIndex, paused, testimonials.length]);

  if (!activeTestimonial) return null;

  return (
    <section
      className="dl-case-testimonial"
      aria-labelledby={labelId}
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="dl-case-header">
        <div id={labelId} className="dl-case-eyebrow">{label}</div>
        <Link
          className="dl-case-study-link"
          href={activeTestimonial.href}
          prefetch={false}
          aria-label={`Read the case study for ${activeTestimonial.name}`}
        >
          <ArrowIcon />
        </Link>
      </div>

      <div className="dl-case-viewport" aria-live={paused ? "polite" : "off"}>
        <div className="dl-case-track" style={{ transform: `translate3d(-${activeIndex * 100}%, 0, 0)` }}>
          {testimonials.map((item, index) => (
            <article className="dl-case-slide" key={`${item.href}-${item.name}`} aria-hidden={index !== activeIndex}>
              <blockquote className="dl-case-quote">“{item.quote}”</blockquote>

              <div className="dl-case-metrics" aria-label="Case study outcomes">
                {item.metrics.map(([value, metricLabel]) => (
                  <div className="dl-case-metric" key={metricLabel}>
                    <div className="dl-case-value">{value}</div>
                    <div className="dl-case-label">{metricLabel}</div>
                  </div>
                ))}
              </div>

              <div className="dl-case-person">
                {item.headshot ? (
                  <img
                    className="dl-case-avatar dl-case-avatar--image"
                    src={item.headshot}
                    alt={`${item.name}, ${item.designation} at ${item.company}`}
                  />
                ) : (
                  <div className="dl-case-avatar" aria-hidden="true">{item.initials}</div>
                )}
                <div>
                  <div className="dl-case-name">{item.name}</div>
                  <div className="dl-case-role">{item.designation} · {item.company}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {testimonials.length > 1 && (
        <div className="dl-case-dots" aria-label="Choose a testimonial">
          {testimonials.map((item, index) => (
            <button
              type="button"
              key={`${item.href}-${index}`}
              className={index === activeIndex ? "dl-case-dot dl-case-dot--active" : "dl-case-dot"}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show testimonial ${index + 1}`}
              aria-current={index === activeIndex ? "true" : undefined}
            />
          ))}
        </div>
      )}
    </section>
  );
}

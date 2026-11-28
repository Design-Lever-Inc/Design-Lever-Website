import Link from "next/link";
import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "How designleverinc.com uses browser storage and cookieless analytics. Functional local and session storage only, no tracking or advertising cookies.",
};

export default function PageCookies() {
  return (
    <LegalLayout
      title="Cookie policy."
      updated="27 November 2026"
      intro="We keep this simple. designleverinc.com does not use tracking or advertising cookies, and does not track you across sites."
    >
      <h2>What we use</h2>
      <p>
        The site relies on your browser&rsquo;s local and session storage for functional purposes only, not on
        advertising or analytics cookies. Specifically:
      </p>
      <ul>
        <li>
          <strong>Diagnostic inputs.</strong> The cost diagnostic saves the figures you enter in local storage on your
          own device, so the tool remembers them on your next visit. The figures themselves stay on your device; our
          analytics only counts that the tool was used, with the team size and the estimated cost it showed.
        </li>
        <li>
          <strong>Scroll position.</strong> We use session storage to restore where you were on a page when you return
          to it, so you don&rsquo;t lose your place.
        </li>
      </ul>

      <h2>Analytics, without cookies</h2>
      <p>
        We use PostHog, hosted in the EU, to understand how the site is used: which pages are read, where visitors
        come from, and which buttons are clicked (for example booking a call or downloading a report). It runs in
        cookieless mode: it stores nothing in your browser and does not recognise you between days. Visits are
        counted using a temporary, anonymous identifier calculated on PostHog&rsquo;s servers, which cannot be used to
        identify you or follow you to other sites.
      </p>

      <h2>What we don&rsquo;t use</h2>
      <p>
        No advertising cookies, no analytics cookies, no cross-site tracking and no profiling. We do not sell or share
        this data, and there is no cookie wall to click through.
      </p>

      <h2>Managing it</h2>
      <p>
        You can clear this data at any time through your browser settings, and you can browse with local storage
        disabled. The site still works, but the diagnostic won&rsquo;t remember your inputs between visits.
      </p>

      <h2>Third-party links</h2>
      <p>
        Some actions take you to third-party tools, such as scheduling or forms. Those services set their own cookies
        under their own policies once you are on them. This policy covers only designleverinc.com.
      </p>

      <h2>Changes and contact</h2>
      <p>
        If our use of browser storage changes, we will update this page and the date above. Questions? Reach us through
        our <Link href="/contact">contact page</Link>, and see our <Link href="/privacy">privacy policy</Link> for the
        fuller picture.
      </p>
    </LegalLayout>
  );
}

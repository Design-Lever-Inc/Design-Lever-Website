import Link from "next/link";
import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms that govern your use of the Design Lever Inc. website, its content, and its tools.",
};

export default function PageTerms() {
  return (
    <LegalLayout
      title="Terms of use."
      updated="3 August 2026"
      intro="These terms govern your use of designleverinc.com. By using the site, you agree to them. If you do not agree, please do not use the site."
    >
      <h2>About these terms</h2>
      <p>
        The website at designleverinc.com is operated by Design Lever Inc. (&ldquo;Design Lever&rdquo;, &ldquo;we&rdquo;,
        &ldquo;us&rdquo;). These terms apply to everyone who visits or uses the site. We may update them from time to
        time, and the version published here is the one that applies to your use.
      </p>

      <h2>Using the site</h2>
      <p>You may use the site for lawful purposes and in line with these terms. You agree not to:</p>
      <ul>
        <li>Use the site in any way that breaks applicable law or infringes the rights of others.</li>
        <li>Attempt to gain unauthorised access to the site, its systems, or its data.</li>
        <li>Interfere with, disrupt, or place undue load on the site or its infrastructure.</li>
        <li>Scrape, copy, or reuse content or assets except as allowed below or with our written permission.</li>
      </ul>

      <h2>The diagnostic and other tools</h2>
      <p>
        Tools on the site, including the cost diagnostic, are provided for general guidance only. They produce directional
        estimates based on the inputs you provide and our benchmarks. They are not an audit, financial advice, or a
        guarantee of any outcome. Decisions you make based on them are your own responsibility. A formal Design Team
        Health Assessment, arranged through us, is the way to get a considered figure.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The site and its content, including text, design, graphics, logos, and the Design Lever name and marks, are owned
        by or licensed to Design Lever and are protected by intellectual property laws. You may view and share links to
        the site, but you may not reproduce, republish, or exploit our content or brand without our written permission.
        Third-party names and marks shown on the site belong to their respective owners.
      </p>

      <h2>Content you submit</h2>
      <p>
        When you send us an enquiry, application, or other information, you confirm that it is accurate and that you have
        the right to share it. You keep ownership of what you submit, and you grant us permission to use it for the
        purpose you sent it, in line with our <Link href="/privacy">privacy policy</Link>.
      </p>

      <h2>Third-party links</h2>
      <p>
        The site may link to third-party sites and services, such as scheduling and form tools. We do not control those
        services and are not responsible for their content or practices. Your use of them is governed by their own terms
        and policies.
      </p>

      <h2>No warranties</h2>
      <p>
        The site and its content are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;. We work to keep the
        site accurate and available, but we do not warrant that it will be error-free, uninterrupted, or fit for a
        particular purpose. Content on the site is for general information and does not constitute professional advice.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, Design Lever will not be liable for any indirect, incidental, or
        consequential loss arising from your use of, or inability to use, the site or its tools. Nothing in these terms
        limits any liability that cannot be limited under applicable law.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of the Federal Republic of Nigeria, and the courts of Nigeria will have
        jurisdiction, without affecting any mandatory consumer protections available to you where you live.
      </p>

      <h2>Changes</h2>
      <p>
        We may revise these terms from time to time. The date at the top of this page shows when they were last updated.
        Continuing to use the site after a change means you accept the updated terms.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms? Reach us through our <Link href="/contact">contact page</Link>.
      </p>
    </LegalLayout>
  );
}

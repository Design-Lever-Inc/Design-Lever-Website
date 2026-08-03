import Link from "next/link";
import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Design Lever Inc. collects, uses, and protects your personal data across our website, diagnostic tool, and engagement enquiries.",
};

export default function PagePrivacy() {
  return (
    <LegalLayout
      title="Privacy policy."
      updated="3 August 2026"
      intro="This policy explains what personal data Design Lever Inc. collects when you use designleverinc.com, why we collect it, and the choices and rights you have over it."
    >
      <h2>Who we are</h2>
      <p>
        Design Lever Inc. (&ldquo;Design Lever&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is a design leadership company
        operating across Africa and its diaspora. This policy covers the website at designleverinc.com and the enquiry,
        diagnostic, and assessment tools available on it. For anything in this policy, you can reach us through our{" "}
        <Link href="/contact">contact page</Link>.
      </p>

      <h2>Information we collect</h2>
      <p>We only collect what we need to respond to you and to run the site. That includes:</p>
      <ul>
        <li>
          <strong>Information you give us.</strong> When you book a call, request a Design Team Health Assessment, take
          the diagnostic, apply to the network, or contact us, we collect the details you submit, such as your name,
          work email, company, role, team size, and anything you write in a message.
        </li>
        <li>
          <strong>Diagnostic inputs.</strong> The cost diagnostic runs entirely in your browser. The figures you enter
          are saved in your browser&rsquo;s local storage on your own device so the tool remembers them on your next
          visit. They are not sent to us unless you choose to submit them with an enquiry.
        </li>
        <li>
          <strong>Technical information.</strong> Like most websites, our hosting provider may automatically log basic
          technical data such as IP address, browser type, and pages visited, for security and to keep the site
          running.
        </li>
      </ul>

      <h2>How we use your information</h2>
      <ul>
        <li>To respond to your enquiry and schedule or deliver an assessment or engagement.</li>
        <li>To provide the diagnostic and remember your inputs on your device.</li>
        <li>To operate, secure, and improve the website.</li>
        <li>To send you information you have asked for, or that is necessary to a service you have requested.</li>
      </ul>
      <p>
        We do not sell your personal data, and we do not use it for advertising. We will only use it for the purposes
        described here or with your consent.
      </p>

      <h2>Cookies and local storage</h2>
      <p>
        We keep this simple. The site uses your browser&rsquo;s local and session storage for functional purposes only:
        to remember your diagnostic inputs and to restore your scroll position as you move between pages. We do not use
        advertising or cross-site tracking cookies. You can clear this data at any time through your browser settings.
      </p>

      <h2>Who we share it with</h2>
      <p>
        We share personal data only with service providers who help us operate, such as our website host and the
        scheduling and form tools we use to arrange calls and receive enquiries. These providers act on our
        instructions. We may also disclose information where we are legally required to do so.
      </p>

      <h2>How long we keep it</h2>
      <p>
        We keep enquiry and engagement information for as long as needed to respond to you and to meet our legal and
        record-keeping obligations, then delete or anonymise it. Diagnostic inputs held in your browser stay on your
        device until you clear them.
      </p>

      <h2>Your rights</h2>
      <p>
        Depending on where you are, including under the Nigeria Data Protection Act 2023 and comparable laws such as the
        GDPR, you may have the right to access the personal data we hold about you, to correct or delete it, to object
        to or restrict certain processing, and to request a copy in a portable format. To exercise any of these, contact
        us through our <Link href="/contact">contact page</Link>. You also have the right to complain to your relevant
        data protection authority.
      </p>

      <h2>International transfers</h2>
      <p>
        We operate across Africa and the diaspora, and some of our providers may process data outside your country. Where
        that happens, we take steps to ensure your data remains protected to a standard consistent with this policy and
        applicable law.
      </p>

      <h2>Security</h2>
      <p>
        We take reasonable technical and organisational measures to protect personal data against loss, misuse, and
        unauthorised access. No method of transmission or storage is completely secure, so we cannot guarantee absolute
        security.
      </p>

      <h2>Children</h2>
      <p>The site is intended for businesses and professionals. It is not directed at children, and we do not knowingly collect their data.</p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy from time to time. When we do, we will revise the date at the top of this page.
        Material changes will be made clear on the site.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy or your data? Reach us through our <Link href="/contact">contact page</Link> and
        we will respond.
      </p>
    </LegalLayout>
  );
}

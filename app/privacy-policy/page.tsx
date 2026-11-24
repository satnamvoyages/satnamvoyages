import type { Metadata } from 'next';
import Link from 'next/link';
import { InfoPage, JsonLd, breadcrumbJsonLd } from '../_components/InfoPage';
import { SITE_URL, SITE_NAME, CONTACT_EMAIL, PHONE_DISPLAY, OG_IMAGE } from '@/lib/constants';

const TITLE = 'Privacy Policy';
const DESCRIPTION =
  'How Satnam Voyages collects, uses and protects the personal details you share through our inquiry forms, WhatsApp, phone and email.';
const UPDATED = '24 November 2026';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/privacy-policy' },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `${SITE_URL}/privacy-policy`, images: [OG_IMAGE] },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd data={{ '@graph': [breadcrumbJsonLd('Privacy Policy', '/privacy-policy')] }} />
      <InfoPage eyebrow="Privacy Policy" title="Privacy Policy" updated={UPDATED}>
        <section>
          <p>
            This policy explains what personal information {SITE_NAME} (&ldquo;we&rdquo;,
            &ldquo;us&rdquo;) collects when you use www.satnamvoyages.com or contact us, and how we
            use it.
          </p>
        </section>

        <section>
          <h2>Information we collect</h2>
          <p>When you send an inquiry or booking request through our website forms, we collect:</p>
          <ul>
            <li>Your name and phone number (required)</li>
            <li>Your email address (optional)</li>
            <li>
              Trip details: travel date, number of travellers (adults and children), the tour or
              service you chose, vehicle and hotel tier preferences, pickup location and any notes
              or special requests
            </li>
          </ul>
          <p>
            If you contact us by phone, WhatsApp or email, we receive the details you choose to
            share in that conversation. During a booking we may also ask for information needed to
            run the trip, such as flight or hotel details.
          </p>
        </section>

        <section>
          <h2>How we use it</h2>
          <ul>
            <li>To reply to your inquiry and prepare a quote and itinerary</li>
            <li>To arrange and operate your booking, including sharing pickup details with your driver</li>
            <li>To send you a confirmation of your inquiry by email, if you gave us an email address</li>
            <li>To meet legal, tax and accounting obligations</li>
          </ul>
          <p>We do not sell your personal information or use it for third-party advertising.</p>
        </section>

        <section>
          <h2>How inquiry forms are processed</h2>
          <p>
            Form submissions are sent to our server and delivered to our booking team by email
            through Google&rsquo;s Gmail service. Your details are therefore stored in our email
            account. The website itself does not keep a separate database of inquiries.
          </p>
        </section>

        <section>
          <h2>Sharing</h2>
          <p>
            We share only the details needed to deliver your trip with the people who provide it,
            such as your driver, and hotels or guides you ask us to book. We may disclose
            information if required by law.
          </p>
        </section>

        <section>
          <h2>How long we keep it</h2>
          <p>
            We keep inquiry and booking records for as long as needed to serve you and to meet
            legal and accounting requirements, after which they are deleted.
          </p>
        </section>

        <section>
          <h2>Your choices</h2>
          <p>
            You can ask us to show, correct or delete the personal information we hold about you,
            or to stop contacting you. Email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>{' '}
            or call {PHONE_DISPLAY}.
          </p>
        </section>

        <section>
          <h2>Cookies and analytics</h2>
          <p>
            The website does not use advertising or tracking cookies. Our hosting provider may
            keep standard server logs (such as IP address and pages requested) for security and
            performance.
          </p>
        </section>

        <section>
          <h2>Changes</h2>
          <p>
            We may update this policy. The date at the top shows when it last changed. See also
            our <Link href="/terms">terms and conditions</Link>.
          </p>
        </section>
      </InfoPage>
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { InfoPage, JsonLd, breadcrumbJsonLd } from '../_components/InfoPage';
import { SITE_URL, SITE_NAME, CONTACT_EMAIL } from '@/lib/constants';

const TITLE = 'Terms & Conditions';
const DESCRIPTION =
  'Booking terms for Satnam Voyages private tours and outstation cabs: quotes, deposits, payment, inclusions, changes and traveller responsibilities.';
const UPDATED = '24 November 2026';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/terms' },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `${SITE_URL}/terms` },
};

export default function TermsPage() {
  return (
    <>
      <JsonLd data={{ '@graph': [breadcrumbJsonLd('Terms & Conditions', '/terms')] }} />
      <InfoPage eyebrow="Terms" title="Terms & Conditions" updated={UPDATED}>
        {/* TODO: owner to review these terms (ideally with a legal adviser) before relying on them. */}
        <section>
          <p>
            These terms apply to tours, outstation cab hire and transfers booked with {SITE_NAME}.
            By confirming a booking you agree to them.
          </p>
        </section>

        <section>
          <h2>Quotes and prices</h2>
          <ul>
            <li>
              Prices shown on the website are starting prices. Your written quote states the final
              price, the vehicle, and exactly what is included and excluded.
            </li>
            <li>
              Tour package prices cover the private vehicle, driver, fuel, tolls, parking and
              driver allowances unless the quote says otherwise. Hotels, monument entry tickets,
              meals and guides are included only when your quote lists them.
            </li>
            <li>
              Outstation cab hire is charged per kilometre with a minimum daily distance, plus a
              daily driver allowance, as shown on the <Link href="/cabs">cabs page</Link> and in
              your quote.
            </li>
            <li>Prices can change with season, fuel costs and government taxes until a booking is confirmed.</li>
          </ul>
        </section>

        <section>
          <h2>Booking and payment</h2>
          <ul>
            <li>Asking for a quote is free and does not commit you to anything.</li>
            <li>
              A deposit of 20&ndash;25% of the quoted price confirms your booking. The balance is
              payable during the trip, as stated in your quote.
            </li>
            <li>We accept bank transfer, UPI, major cards and cash. Card or transfer fees may apply.</li>
          </ul>
        </section>

        <section>
          <h2>Changes and cancellations</h2>
          <p>
            Refunds and changes follow our <Link href="/cancellation-policy">cancellation policy</Link>.
            Changes to dates, routes or vehicles are subject to availability and may change the
            price. Extra kilometres, hours or stops added during the trip are charged at the quoted
            rates.
          </p>
        </section>

        <section>
          <h2>During the trip</h2>
          <ul>
            <li>Travel times are estimates and depend on traffic, weather and road conditions.</li>
            <li>
              Monuments set their own opening days. For example, the Taj Mahal is closed to
              visitors on Fridays. We plan around these, but closures by the authorities are
              outside our control.
            </li>
            <li>
              Drivers follow road-safety rules and legal driving hours, and may refuse instructions
              that are unsafe or illegal.
            </li>
            <li>Smoking and alcohol are not allowed in vehicles.</li>
          </ul>
        </section>

        <section>
          <h2>Your responsibilities</h2>
          <ul>
            <li>Carry valid ID, passports and visas, and any permits needed for your route.</li>
            <li>Look after your personal belongings and valuables.</li>
            <li>We recommend travel insurance covering health, cancellation and luggage.</li>
          </ul>
        </section>

        <section>
          <h2>Liability</h2>
          <p>
            We are responsible for the services we provide directly. We are not liable for delays
            or losses caused by events outside our reasonable control, such as strikes, natural
            events, road closures or government orders, or for the services of independent hotels,
            airlines and attractions.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            Questions about these terms: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> or
            see our <Link href="/contact">contact page</Link>. These terms are governed by the laws
            of India, with courts in New Delhi having jurisdiction.
          </p>
        </section>
      </InfoPage>
    </>
  );
}

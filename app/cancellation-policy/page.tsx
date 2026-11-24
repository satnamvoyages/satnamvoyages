import type { Metadata } from 'next';
import Link from 'next/link';
import { InfoPage, JsonLd, breadcrumbJsonLd } from '../_components/InfoPage';
import { SITE_URL, CONTACT_EMAIL, PHONE_DISPLAY, OG_IMAGE } from '@/lib/constants';

const TITLE = 'Cancellation & Refund Policy';
const DESCRIPTION =
  'Cancellation and refund rules for Satnam Voyages tours and outstation cabs: free cancellation up to 48 hours before departure, and how deposits are refunded.';
const UPDATED = '24 November 2026';

// TODO: owner to confirm exact refund percentages and timelines below.
const REFUND_TABLE = [
  { when: 'More than 48 hours before the trip starts', refund: 'Full refund of the deposit' },
  { when: '24 to 48 hours before the trip starts', refund: '50% of the deposit refunded' },
  { when: 'Less than 24 hours before, or no-show', refund: 'Deposit not refunded' },
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/cancellation-policy' },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `${SITE_URL}/cancellation-policy`, images: [OG_IMAGE] },
};

export default function CancellationPolicyPage() {
  return (
    <>
      <JsonLd data={{ '@graph': [breadcrumbJsonLd('Cancellation Policy', '/cancellation-policy')] }} />
      <InfoPage eyebrow="Cancellation Policy" title="Cancellation & Refund Policy" updated={UPDATED}>
        <section>
          <h2>Deposit refunds</h2>
          <p>
            Bookings are confirmed with a 20&ndash;25% deposit. If you cancel, the refund depends
            on how much notice you give before the scheduled pickup time:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-[#E8DFD3] bg-white rounded-xl">
              <thead className="bg-[#FFF7ED] text-stone-900">
                <tr>
                  <th className="text-left p-3 border-b border-[#E8DFD3]">Notice given</th>
                  <th className="text-left p-3 border-b border-[#E8DFD3]">Refund</th>
                </tr>
              </thead>
              <tbody>
                {REFUND_TABLE.map((row) => (
                  <tr key={row.when}>
                    <td className="p-3 border-b border-[#E8DFD3]">{row.when}</td>
                    <td className="p-3 border-b border-[#E8DFD3]">{row.refund}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>Hotels, tickets and third-party bookings</h2>
          <p>
            If we booked hotels, safaris, trains or monument tickets for you, their own
            cancellation rules apply on top of this policy, and non-refundable charges are passed
            on at cost. Your quote lists any such items.
          </p>
        </section>

        <section>
          <h2>Changes instead of cancelling</h2>
          <p>
            You can move your trip to new dates free of charge if you tell us more than 48 hours
            before pickup, subject to vehicle availability. Any price difference for the new dates
            applies.
          </p>
        </section>

        <section>
          <h2>Trips cut short</h2>
          <p>
            Unused days or kilometres after a trip has started are not refunded, except where we
            cannot provide the service.
          </p>
        </section>

        <section>
          <h2>If we cancel</h2>
          <p>
            If we have to cancel, or cannot provide a replacement vehicle of the same class, you
            get a full refund of everything you have paid us.
          </p>
        </section>

        <section>
          <h2>How refunds are paid</h2>
          <p>
            Refunds are paid to the original payment method within 7&ndash;10 working days of
            the cancellation being confirmed. Bank or card charges are not refundable.
          </p>
        </section>

        <section>
          <h2>How to cancel</h2>
          <p>
            Email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> or message us on
            WhatsApp at {PHONE_DISPLAY} with your booking reference. The time we receive your
            message counts as the cancellation time. See also our{' '}
            <Link href="/terms">terms and conditions</Link>.
          </p>
        </section>
      </InfoPage>
    </>
  );
}

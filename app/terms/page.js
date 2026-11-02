import PageIntro from "../components/PageIntro";

export const metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <>
      <PageIntro eyebrow="Legal" title="Terms" />
      <div className="mx-auto max-w-3xl px-5 sm:px-6 py-16">
        <div className="border border-dashed border-rust/60 p-6 mb-12">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.1em] text-rust mb-2">
            Draft — pending legal review
          </p>
          <p className="text-paperdim text-sm leading-relaxed">
            This page is a structural placeholder only. Full engagement terms for
            Construction Claim Check and Construction Due Diligence commissions —
            including scope, liability and professional-indemnity cover — need lawyer
            review before any commission is accepted on these terms.
          </p>
        </div>

        <div className="flex flex-col gap-10 text-paperdim leading-relaxed">
          <section>
            <h2 className="font-serif text-xl text-paper mb-3">Scope of service</h2>
            <p>
              HCFM analyses historical construction evidence to determine what is
              established, what remains uncertain, and what warrants further physical
              verification. Each commission&apos;s specific scope is confirmed in writing
              before work begins.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-xl text-paper mb-3">Professional boundary</h2>
            <p>
              HCFM does not provide structural design, structural safety certification,
              statutory approval, engineering sample-size determination, legal advice or
              professional engineering sign-off. Findings are intended to inform, not
              replace, the judgement of appropriately qualified professionals.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-xl text-paper mb-3">Liability</h2>
            <p>[Liability and limitation-of-liability terms to be added following legal review.]</p>
          </section>
          <section>
            <h2 className="font-serif text-xl text-paper mb-3">Governing law</h2>
            <p>These terms are governed by the law of England and Wales.</p>
          </section>
        </div>
      </div>
    </>
  );
}

import Link from "next/link";
import PageIntro from "../components/PageIntro";
import ProfessionalBoundary from "../components/ProfessionalBoundary";

export const metadata = {
  title: "Construction Due Diligence",
  description:
    "Construction due diligence for a live project decision involving several interacting historical uncertainties. £4,000 controlled pilot initially.",
};

const steps = [
  { n: "01", title: "Define the decision", body: "Not “research the building.” What actual decision is being made?" },
  { n: "02", title: "Freeze the assumptions", body: "What is the project currently assuming about the building?" },
  {
    n: "03",
    title: "Reconstruct the evidence",
    body: "Drawings, specifications, archives, technical literature, later works and survey records are kept in their correct evidence layers.",
  },
  {
    n: "04",
    title: "Identify live uncertainties",
    body: "HCFM distinguishes established facts, calculations, assumptions, contradictions and unknowns.",
  },
  { n: "05", title: "Test decision relevance", body: "Would resolving the uncertainty actually change the next action?" },
  {
    n: "06",
    title: "Issue the report",
    body: "Clear recommendation, evidence trail, unknown register, and professional boundaries.",
  },
];

export default function DueDiligencePage() {
  return (
    <>
      <PageIntro
        eyebrow="Construction Due Diligence — £4,000 controlled pilot"
        title="When the decision is bigger than one claim."
        lede="HCFM reconstructs the relevant construction history, separates design from execution and later intervention, identifies competing construction states, and determines which uncertainties are material to the decision you are about to make."
      />

      <section className="mx-auto max-w-6xl px-5 sm:px-6 py-16">
        <p className="text-lg leading-relaxed max-w-[62ch] mb-3">
          The result is not simply &ldquo;more research.&rdquo; It is a structured answer to:
        </p>
        <p className="font-serif text-2xl sm:text-3xl text-balance max-w-[36ch] text-bronze">
          What do we know? What do we not know? What could resolve it? And would resolving
          it change the action?
        </p>
      </section>

      <section className="border-t border-hline">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 py-16">
          <h2 className="font-serif font-medium text-2xl mb-12">How the commission runs</h2>
          <div className="flex flex-col">
            {steps.map((s) => (
              <div key={s.n} className="grid grid-cols-[52px_1fr] gap-5 py-6 border-t border-hline last:border-b">
                <span className="font-mono text-bronze text-sm pt-0.5">{s.n}</span>
                <div>
                  <h3 className="font-serif font-medium text-lg mb-1.5">{s.title}</h3>
                  <p className="text-paperdim text-[0.94rem] leading-relaxed max-w-[58ch]">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-hline">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 py-16">
          <ProfessionalBoundary />
        </div>
      </section>

      <section className="border-t border-hline">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h2 className="font-serif font-medium text-2xl mb-2">Currently by request, not checkout.</h2>
            <p className="text-paperdim max-w-[54ch] leading-relaxed">
              Due Diligence commissions are scoped individually before they begin. Tell us
              about the project and the decision it&apos;s facing, and we&apos;ll confirm
              whether — and how — HCFM can help.
            </p>
          </div>
          <Link
            href="/contact"
            className="font-mono text-xs uppercase tracking-[0.06em] px-6 py-3.5 bg-bronze text-ink font-medium hover:bg-bronzelight transition-colors whitespace-nowrap w-fit"
          >
            Discuss Due Diligence
          </Link>
        </div>
      </section>
    </>
  );
}

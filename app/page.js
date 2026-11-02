import Link from "next/link";
import Hero from "./components/Hero";
import EvidenceChain from "./components/EvidenceChain";

const findings = [
  "29-bay module reconstructed from period evidence.",
  "Two-tier structural arrangement recovered from the primary source.",
  "An internal contradiction in the principal 1848 source exposed and resolved through later project evidence.",
  "Targeted diagnostic investigation distinguished from the systematic documentation later required for tender.",
];

const services = [
  {
    name: "Construction Claim Check",
    price: "£750 fixed",
    bestFor: "One important historical-construction claim",
    question: "“Does the evidence actually support this?”",
    scope: "One bounded claim",
    output: "Concise written finding with evidence trail",
    typical: "Drawing reliability, construction date, material, alteration, as-built claim",
    cta: { label: "Request a Claim Check", href: "/claim-check" },
  },
  {
    name: "Construction Due Diligence",
    price: "£4,000 controlled pilot initially",
    bestFor: "A live project decision involving several interacting uncertainties",
    question:
      "“Which historical assumptions can we rely on, and which need resolving before the next decision?”",
    scope: "Evidence reconstruction + uncertainty + decision analysis",
    output: "Executive decision report + evidence appendix",
    typical: "Investigation strategy, pre-design assumptions, heritage due diligence, survey prioritisation",
    cta: { label: "Discuss Due Diligence", href: "/due-diligence" },
  },
];

const serviceFields = [
  ["Best for", "bestFor"],
  ["Question", "question"],
  ["Scope", "scope"],
  ["Output", "output"],
  ["Price", "price"],
  ["Typical use", "typical"],
];

const adds = [
  { title: "Evidence provenance", body: "Where did a claim actually come from?" },
  {
    title: "Source independence",
    body: "Are five references really five sources, or five descendants of the same drawing?",
  },
  {
    title: "Design vs as-built discipline",
    body: "Was something proposed, specified, constructed, repaired or merely repeated by later authors?",
  },
  {
    title: "Construction worlds",
    body: "Where more than one physical history remains compatible with the evidence, HCFM keeps those possibilities open instead of inventing certainty.",
  },
  {
    title: "Governed unknowns",
    body: "“Unknown” is an analytical result when the evidence does not justify an answer.",
  },
  {
    title: "Decision materiality",
    body: "An uncertainty matters only if resolving it could change what you do.",
  },
  {
    title: "Auditability",
    body: "Calculations, assumptions, contradictions and source dependencies remain visible rather than disappearing inside a narrative.",
  },
];

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

const audiences = [
  "Conservation architects",
  "Heritage consultants",
  "Structural engineers working with historic fabric",
  "Project managers",
  "Building surveyors",
  "Multidisciplinary design teams",
  "Heritage estates",
  "Institutional asset owners",
  "Funders and advisers undertaking pre-acquisition or project due diligence",
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Palm House proof */}
      <section className="border-t border-hline">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 py-16 md:py-20 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-serif font-medium text-2xl sm:text-3xl text-balance mb-5">
              A building can have excellent records and still have the wrong drawings
            </h2>
            <p className="text-paperdim leading-relaxed max-w-[56ch] mb-6">
              At the Palm House at Kew, original contract drawings described construction
              that was not ultimately built. Later drawings labelled &ldquo;as-built&rdquo;
              were reported by restoration engineers to contain serious inaccuracies. HCFM
              reconstructed what the historical evidence could establish, identified what
              it could not, and separated the evidence needed for diagnosis from the
              evidence later required for pricing and tender.
            </p>
            <div className="flex flex-col gap-2 font-mono text-sm">
              <Link href="/palm-house" className="text-bronze hover:underline w-fit">
                Read the 8-page case study →
              </Link>
              <Link href="/palm-house" className="text-bronze hover:underline w-fit">
                View the complete 35-page due-diligence example →
              </Link>
            </div>
          </div>
          <ul className="flex flex-col gap-4">
            {findings.map((f, i) => (
              <li
                key={f}
                className="grid grid-cols-[28px_1fr] gap-3 border-l-2 border-hline pl-4 text-[0.95rem] text-paperdim leading-relaxed"
              >
                <span className="font-mono text-bronze text-sm">{String(i + 1).padStart(2, "0")}</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* The problem */}
      <section className="border-t border-hline">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 py-16 md:py-20">
          <h2 className="font-serif font-medium text-2xl sm:text-3xl max-w-[22ch] mb-5">
            Historic buildings rarely have one history
          </h2>
          <p className="text-paperdim leading-relaxed max-w-[68ch] mb-12">
            Design drawings show what was intended. Construction records may show what was
            actually built. Later repairs introduce new fabric. Wartime damage, rebuilding,
            undocumented alterations and inaccurate &ldquo;as-built&rdquo; drawings can
            create several different construction states inside what looks like one
            building. The expensive mistake is treating all of those records as if they
            describe the same physical object.
          </p>
          <EvidenceChain />
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-hline">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 py-16 md:py-20">
          <h2 className="font-serif font-medium text-2xl sm:text-3xl mb-3">Two ways to commission HCFM</h2>
          <p className="text-paperdim leading-relaxed max-w-[62ch] mb-12">
            A bounded question about one claim needs a different engagement to a live
            project decision with several interacting uncertainties. HCFM prices and
            scopes them differently on purpose.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s) => (
              <div key={s.name} className="border border-hline bg-ink2 p-7 flex flex-col">
                <h3 className="font-serif font-medium text-xl mb-1">{s.name}</h3>
                <p className="font-mono text-bronze text-sm mb-6">{s.price}</p>
                <dl className="flex flex-col gap-4 flex-1">
                  {serviceFields.map(([label, key]) => (
                    <div key={key} className="border-t border-hline pt-3 first:border-t-0 first:pt-0">
                      <dt className="font-mono text-[0.65rem] uppercase tracking-[0.08em] text-paperdim mb-1.5">
                        {label}
                      </dt>
                      <dd className="text-[0.92rem] leading-relaxed">{s[key]}</dd>
                    </div>
                  ))}
                </dl>
                <Link
                  href={s.cta.href}
                  className="mt-7 font-mono text-xs uppercase tracking-[0.06em] text-center px-5 py-3 border border-bronzedim text-bronze hover:border-bronze hover:bg-bronze/10 transition-colors"
                >
                  {s.cta.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What HCFM adds */}
      <section className="border-t border-hline">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 py-16 md:py-20">
          <h2 className="font-serif font-medium text-2xl sm:text-3xl mb-3">What HCFM adds</h2>
          <p className="text-paperdim leading-relaxed max-w-[62ch] mb-12">
            This is the part that answers &ldquo;why not just hire a historian?&rdquo;
          </p>
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
            {adds.map((a) => (
              <div key={a.title} className="flex gap-4">
                <span className="flex-none w-2 h-2 mt-2 bg-bronze" />
                <div>
                  <h3 className="font-medium text-paper mb-1.5">{a.title}</h3>
                  <p className="text-paperdim text-[0.92rem] leading-relaxed">{a.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How a commission works */}
      <section className="border-t border-hline">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 py-16 md:py-20">
          <h2 className="font-serif font-medium text-2xl sm:text-3xl mb-12">How a commission works</h2>
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

      {/* Professional boundary */}
      <section className="border-t border-hline">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 py-16 md:py-20">
          <div className="border-l-2 border-rust bg-ink2 p-8 max-w-3xl">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-rust mb-4">
              Professional boundary
            </p>
            <p className="leading-relaxed mb-4">
              HCFM complements engineers and conservation professionals. It does not
              replace them. HCFM analyses historical construction evidence, uncertainty
              and decision relevance.
            </p>
            <p className="leading-relaxed text-paperdim">
              It does not provide structural design, structural safety certification,
              statutory approval, engineering sample-size determination, legal advice or
              professional engineering sign-off. Where safety, design or compliance is
              involved, the appropriately qualified professional retains authority.
            </p>
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="border-t border-hline">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 py-16 md:py-20">
          <h2 className="font-serif font-medium text-2xl sm:text-3xl mb-6">Who this is for</h2>
          <p className="text-lg leading-relaxed max-w-[70ch]">
            {audiences.map((a, i) => (
              <span key={a}>
                {a}
                {i < audiences.length - 1 && <span className="text-bronze mx-2">·</span>}
              </span>
            ))}
          </p>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-hline">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 py-16 md:py-24 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <h2 className="font-serif font-medium text-2xl sm:text-3xl max-w-[20ch] text-balance">
            Ready to test a claim, or talk through a decision?
          </h2>
          <div className="flex flex-wrap gap-3.5">
            <Link
              href="/claim-check"
              className="font-mono text-xs uppercase tracking-[0.06em] px-5 py-3 bg-bronze text-ink font-medium hover:bg-bronzelight transition-colors"
            >
              Construction Claim Check — £750
            </Link>
            <Link
              href="/contact"
              className="font-mono text-xs uppercase tracking-[0.06em] px-5 py-3 border border-bronzedim text-bronze hover:border-bronze hover:bg-bronze/10 transition-colors"
            >
              Discuss Due Diligence
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

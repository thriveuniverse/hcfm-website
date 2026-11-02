import PageIntro from "../components/PageIntro";
import ProfessionalBoundary from "../components/ProfessionalBoundary";

export const metadata = {
  title: "How HCFM Works",
  description:
    "How HCFM analyses historical construction evidence: evidence provenance, source independence, governed unknowns, and decision materiality.",
};

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

export default function HowItWorksPage() {
  return (
    <>
      <PageIntro
        eyebrow="Methodology"
        title="Governed evidence analysis, not a narrative history"
        lede="HCFM uses deterministic calculations, structured evidence states and governed computational analysis, with human review where required."
      />

      <section className="mx-auto max-w-6xl px-5 sm:px-6 py-16">
        <h2 className="font-serif font-medium text-2xl mb-3">What HCFM adds</h2>
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
      </section>

      <section className="border-t border-hline">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 py-16">
          <ProfessionalBoundary />
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import PageIntro from "../components/PageIntro";
import BlueprintDiagram from "../components/BlueprintDiagram";

export const metadata = {
  title: "Palm House Case Study",
  description:
    "How HCFM reconstructed what the historical evidence could establish about the Palm House at Kew — and what it could not.",
};

const findings = [
  "29-bay module reconstructed from period evidence.",
  "Two-tier structural arrangement recovered from the primary source.",
  "An internal contradiction in the principal 1848 source exposed and resolved through later project evidence.",
  "Targeted diagnostic investigation distinguished from the systematic documentation later required for tender.",
];

export default function PalmHousePage() {
  return (
    <>
      <PageIntro
        eyebrow="Case study"
        title="When the drawings were not the building"
        lede="At the Palm House at Kew, original contract drawings described construction that was not ultimately built."
      />

      <section className="mx-auto max-w-6xl px-5 sm:px-6 py-16 grid md:grid-cols-2 gap-14 items-start">
        <div>
          <p className="leading-relaxed text-paperdim mb-6">
            Later drawings labelled &ldquo;as-built&rdquo; were reported by restoration
            engineers to contain serious inaccuracies. HCFM reconstructed what the
            historical evidence could establish, identified what it could not, and
            separated the evidence needed for diagnosis from the evidence later required
            for pricing and tender.
          </p>
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
        <BlueprintDiagram dwgNo="HCFM-PH-01" />
      </section>

      <section className="border-t border-hline">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 py-16">
          <div className="border border-hline bg-ink2 p-8 max-w-2xl">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-bronze mb-4">
              Full documents in preparation
            </p>
            <p className="leading-relaxed text-paperdim mb-6">
              The complete 8-page case study and the 35-page due-diligence example are
              being finalised for release. If you&apos;d like an early copy, or want to
              discuss how this approach would apply to your own building, get in touch.
            </p>
            <Link
              href="/contact"
              className="font-mono text-xs uppercase tracking-[0.06em] px-5 py-3 bg-bronze text-ink font-medium hover:bg-bronzelight transition-colors w-fit inline-block"
            >
              Request the case study
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

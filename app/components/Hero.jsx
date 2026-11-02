import Link from "next/link";
import BlueprintDiagram from "./BlueprintDiagram";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-5 sm:px-6 grid md:grid-cols-[1.05fr_1fr] gap-10 md:gap-14 items-center py-14 md:py-20">
      <div>
        <p className="font-mono text-xs tracking-[0.16em] uppercase text-bronze mb-4">
          Historical Construction Feasibility Model
        </p>
        <h1 className="font-serif font-medium text-[2rem] sm:text-4xl md:text-5xl leading-[1.08] text-balance mb-6">
          Know what the historical evidence really establishes before you build on it.
        </h1>
        <p className="text-paperdim leading-relaxed max-w-[52ch] mb-8">
          HCFM is construction due diligence for historic and heavily altered buildings.
          We analyse drawings, specifications, archival records, construction accounts
          and later interventions to determine what can safely be treated as established,
          what remains uncertain, and what needs physical verification before the next
          project decision.
        </p>

        <div className="flex flex-wrap gap-3.5 mb-6">
          <Link
            href="/palm-house"
            className="font-mono text-xs uppercase tracking-[0.06em] px-5 py-3 border border-bronzedim text-bronze hover:border-bronze hover:bg-bronze/10 transition-colors"
          >
            View the Palm House case study
          </Link>
          <Link
            href="/claim-check"
            className="font-mono text-xs uppercase tracking-[0.06em] px-5 py-3 bg-bronze text-ink font-medium hover:bg-bronzelight transition-colors"
          >
            Construction Claim Check — £750
          </Link>
          <Link
            href="/contact"
            className="font-mono text-xs uppercase tracking-[0.06em] px-1 py-3 border-b border-hline hover:text-bronze hover:border-bronze transition-colors"
          >
            Discuss Construction Due Diligence →
          </Link>
        </div>

        <p className="font-mono text-xs text-paperdim border-t border-hline pt-4">
          Not another building history. <span className="text-paper">A decision tool.</span>
        </p>
      </div>

      <BlueprintDiagram />
    </section>
  );
}

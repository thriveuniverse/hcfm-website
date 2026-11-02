import Link from "next/link";
import PageIntro from "../components/PageIntro";

export const metadata = {
  title: "Construction Claim Check — £750",
  description:
    "One historical-construction claim, tested against the evidence, for a fixed £750. Documented, calculated, assumption-dependent, or unresolved.",
};

const claims = [
  "“These walls are original.”",
  "“This drawing represents the building as constructed.”",
  "“The structural system is uniform throughout.”",
  "“This feature dates from the 1840s.”",
];

const verdicts = [
  { label: "Documented", body: "Established directly by primary evidence." },
  { label: "Calculated", body: "Derived from evidence via a stated method, not asserted outright." },
  { label: "Assumption-dependent", body: "Only true if a specific, named assumption holds." },
  { label: "Unresolved", body: "The evidence does not currently justify an answer either way." },
];

export default function ClaimCheckPage() {
  return (
    <>
      <PageIntro
        eyebrow="Construction Claim Check — £750 fixed"
        title="One claim. One bounded answer."
        lede="A project may be relying on a single historical-construction statement without ever having tested it against the evidence."
      />

      <section className="mx-auto max-w-6xl px-5 sm:px-6 py-16 grid md:grid-cols-2 gap-14">
        <div>
          <h2 className="font-serif font-medium text-xl mb-5">A project may be relying on a statement such as</h2>
          <ul className="flex flex-col gap-3 mb-10">
            {claims.map((c) => (
              <li key={c} className="border-l-2 border-hline pl-4 italic text-paperdim">
                {c}
              </li>
            ))}
          </ul>
          <p className="leading-relaxed text-paperdim max-w-[56ch]">
            HCFM tests the claim against the available evidence, identifies contradictions
            and dependencies, and tells you whether the claim is documented, calculated,
            assumption-dependent or unresolved.
          </p>
        </div>

        <div>
          <h2 className="font-serif font-medium text-xl mb-5">The finding you receive</h2>
          <dl className="flex flex-col gap-5">
            {verdicts.map((v) => (
              <div key={v.label} className="border-t border-hline pt-4 first:border-t-0 first:pt-0">
                <dt className="font-mono text-bronze text-sm uppercase tracking-[0.04em] mb-1">{v.label}</dt>
                <dd className="text-paperdim text-[0.94rem] leading-relaxed">{v.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-t border-hline">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h2 className="font-serif font-medium text-2xl mb-2">Fixed scope, fixed price.</h2>
            <p className="text-paperdim max-w-[52ch] leading-relaxed">
              One claim, one evidence trail, one written finding — £750. Tell us the claim
              your project is relying on and we&apos;ll confirm scope before starting.
            </p>
          </div>
          <Link
            href="/contact"
            className="font-mono text-xs uppercase tracking-[0.06em] px-6 py-3.5 bg-bronze text-ink font-medium hover:bg-bronzelight transition-colors whitespace-nowrap w-fit"
          >
            Request a Claim Check
          </Link>
        </div>
      </section>
    </>
  );
}

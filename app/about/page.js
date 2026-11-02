import PageIntro from "../components/PageIntro";
import ProfessionalBoundary from "../components/ProfessionalBoundary";

export const metadata = {
  title: "About",
  description: "About HCFM and who it's built for.",
};

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

export default function AboutPage() {
  return (
    <>
      <PageIntro eyebrow="About" title="About HCFM" />

      <section className="mx-auto max-w-6xl px-5 sm:px-6 py-16">
        <div className="border border-dashed border-rust/60 p-6 max-w-2xl mb-16">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.1em] text-rust mb-2">
            Draft placeholder
          </p>
          <p className="text-paperdim text-sm leading-relaxed">
            [Add founder background here — practice history, relevant credentials, and why
            HCFM exists as a discipline distinct from conventional building history.]
          </p>
        </div>

        <h2 className="font-serif font-medium text-2xl mb-6">Who this is for</h2>
        <p className="text-lg leading-relaxed max-w-[70ch]">
          {audiences.map((a, i) => (
            <span key={a}>
              {a}
              {i < audiences.length - 1 && <span className="text-bronze mx-2">·</span>}
            </span>
          ))}
        </p>
      </section>

      <section className="border-t border-hline">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 py-16">
          <ProfessionalBoundary />
        </div>
      </section>
    </>
  );
}

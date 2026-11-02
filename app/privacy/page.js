import PageIntro from "../components/PageIntro";

export const metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <>
      <PageIntro eyebrow="Legal" title="Privacy Policy" />
      <div className="mx-auto max-w-3xl px-5 sm:px-6 py-16">
        <div className="border border-dashed border-rust/60 p-6 mb-12">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.1em] text-rust mb-2">
            Draft — pending legal review
          </p>
          <p className="text-paperdim text-sm leading-relaxed">
            This is placeholder text to hold the page&apos;s structure. It should be
            reviewed by a solicitor before the site goes live, alongside the engagement
            terms for paid commissions.
          </p>
        </div>

        <div className="flex flex-col gap-10 text-paperdim leading-relaxed">
          <section>
            <h2 className="font-serif text-xl text-paper mb-3">Who we are</h2>
            <p>
              HCFM (Historical Construction Feasibility Model) [legal entity name and
              registered address to be added] provides historical construction evidence
              analysis for professional clients.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-xl text-paper mb-3">What we collect</h2>
            <p>
              When you use the contact form, we collect the name, email address,
              organisation and message you provide, in order to respond to your enquiry.
              We do not use cookies or tracking scripts on this site beyond what is
              strictly necessary for it to function.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-xl text-paper mb-3">How we use it</h2>
            <p>
              Enquiry details are used only to respond to you and, where a commission
              proceeds, to deliver that engagement. We do not sell or share your details
              with third parties for marketing purposes.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-xl text-paper mb-3">Your rights</h2>
            <p>
              You can ask us what personal data we hold about you, ask us to correct or
              delete it, or object to how it is used, by contacting us at [privacy contact
              email to be added].
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

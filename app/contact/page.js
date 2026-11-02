import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact",
  description: "Request a Construction Claim Check or discuss a Construction Due Diligence commission with HCFM.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 sm:px-6 py-16 md:py-20">
      <p className="font-mono text-xs tracking-[0.16em] uppercase text-bronze mb-4">Get in touch</p>
      <h1 className="font-serif font-medium text-3xl sm:text-4xl mb-5">Request a review</h1>
      <p className="text-paperdim leading-relaxed mb-10">
        Tell us about the claim you need tested, or the project decision you&apos;re
        facing, and we&apos;ll confirm scope before anything starts.
      </p>
      <ContactForm />
    </div>
  );
}

export default function PageIntro({ eyebrow, title, lede }) {
  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-6 pt-16 pb-10 md:pt-20 md:pb-14 border-b border-hline">
      {eyebrow && (
        <p className="font-mono text-xs tracking-[0.16em] uppercase text-bronze mb-4">{eyebrow}</p>
      )}
      <h1 className="font-serif font-medium text-3xl sm:text-4xl text-balance max-w-[20ch] mb-5">
        {title}
      </h1>
      {lede && <p className="text-paperdim leading-relaxed max-w-[62ch] text-lg">{lede}</p>}
    </div>
  );
}

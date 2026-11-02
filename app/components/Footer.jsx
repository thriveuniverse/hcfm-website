import Link from "next/link";
import { navItems, legalNavItems } from "../lib/nav";
import BenchmarkMark from "./BenchmarkMark";

export default function Footer() {
  return (
    <footer className="bg-ink2 border-t border-hline">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 py-14">
        <div className="flex items-center gap-3 mb-6">
          <BenchmarkMark size={22} />
          <span className="font-serif font-semibold text-paper">HCFM</span>
        </div>

        <p className="font-mono text-xs leading-relaxed text-paperdim max-w-2xl mb-10">
          HCFM complements engineers and conservation professionals — it does not replace
          them. Where safety, design or compliance is involved, the appropriately
          qualified professional retains authority.
        </p>

        <div className="flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-[0.06em] text-paperdim mb-8">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-bronze transition-colors">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-hline pt-6">
          <div className="font-mono text-[0.7rem] text-paperdim">
            © {new Date().getFullYear()} HCFM · Historical Feasibility
          </div>
          <div className="flex gap-6 font-mono text-[0.7rem] text-paperdim">
            {legalNavItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-bronze transition-colors">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

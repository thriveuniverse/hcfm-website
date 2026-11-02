export default function BlueprintDiagram({ dwgNo = "HCFM-001" }) {
  return (
    <div className="relative bg-blueprint border border-[#1c2c44] p-4 pb-3">
      <span className="absolute -top-px -left-px w-3.5 h-3.5 border-t border-l border-bplineDim opacity-60" />
      <span className="absolute -top-px -right-px w-3.5 h-3.5 border-t border-r border-bplineDim opacity-60" />
      <span className="absolute -bottom-px -left-px w-3.5 h-3.5 border-b border-l border-bplineDim opacity-60" />
      <span className="absolute -bottom-px -right-px w-3.5 h-3.5 border-b border-r border-bplineDim opacity-60" />

      <svg viewBox="0 0 460 300" className="w-full h-auto block">
        <rect x="30" y="248" width="400" height="8" fill="none" stroke="#d8e7f3" strokeWidth="1" />

        <g stroke="#5c7996" strokeWidth="1">
          <line x1="40" y1="140" x2="40" y2="248" />
          <line x1="78" y1="140" x2="78" y2="248" />
          <line x1="116" y1="140" x2="116" y2="248" />
          <line x1="154" y1="140" x2="154" y2="248" />
          <line x1="192" y1="140" x2="192" y2="248" />
          <line x1="230" y1="140" x2="230" y2="248" />
          <line x1="268" y1="140" x2="268" y2="248" />
          <line x1="306" y1="140" x2="306" y2="248" />
          <line x1="344" y1="140" x2="344" y2="248" />
          <line x1="382" y1="140" x2="382" y2="248" />
          <line x1="420" y1="140" x2="420" y2="248" />
        </g>

        <rect x="154" y="140" width="38" height="108" fill="rgba(201,161,90,.10)" />
        <line x1="154" y1="140" x2="154" y2="248" stroke="#c9a15a" strokeWidth="2" />
        <line x1="192" y1="140" x2="192" y2="248" stroke="#c9a15a" strokeWidth="2" />

        <line x1="30" y1="140" x2="430" y2="140" stroke="#d8e7f3" strokeWidth="1" />
        <path d="M40,140 Q230,10 420,140" fill="none" stroke="#d8e7f3" strokeWidth="1.4" />

        <g stroke="#5c7996" strokeWidth="1">
          <line x1="97" y1="140" x2="97" y2="102" />
          <line x1="154" y1="140" x2="154" y2="77" />
          <line x1="211" y1="140" x2="211" y2="66" />
          <line x1="249" y1="140" x2="249" y2="66" />
          <line x1="363" y1="140" x2="363" y2="102" />
        </g>
        <line x1="306" y1="140" x2="306" y2="77" stroke="#cbb98f" strokeWidth="1.4" strokeDasharray="4 4" />

        <circle cx="230" cy="65" r="4.5" fill="none" stroke="#b06a48" strokeWidth="1.4" />
        <line x1="226" y1="61" x2="234" y2="69" stroke="#b06a48" strokeWidth="1.2" />
        <line x1="234" y1="61" x2="226" y2="69" stroke="#b06a48" strokeWidth="1.2" />

        <line x1="173" y1="194" x2="120" y2="194" stroke="#c9a15a" strokeWidth=".75" />
        <line x1="120" y1="194" x2="120" y2="210" stroke="#c9a15a" strokeWidth=".75" />
        <text x="20" y="222" fontFamily="var(--font-plex-mono), monospace" fontSize="8.5" fill="#c9a15a" letterSpacing=".02em">SOUTH WALL FABRIC</text>
        <text x="20" y="232" fontFamily="var(--font-plex-mono), monospace" fontSize="8.5" fill="#c9a15a" letterSpacing=".02em">— DOCUMENTED</text>

        <line x1="306" y1="105" x2="360" y2="185" stroke="#cbb98f" strokeWidth=".75" />
        <text x="335" y="200" fontFamily="var(--font-plex-mono), monospace" fontSize="8.5" fill="#cbb98f" letterSpacing=".02em">RIDGE PROFILE</text>
        <text x="335" y="210" fontFamily="var(--font-plex-mono), monospace" fontSize="8.5" fill="#cbb98f" letterSpacing=".02em">— ASSUMPTION</text>

        <line x1="234" y1="65" x2="270" y2="30" stroke="#b06a48" strokeWidth=".75" />
        <text x="266" y="24" fontFamily="var(--font-plex-mono), monospace" fontSize="8.5" fill="#b06a48" letterSpacing=".02em">APEX HEIGHT — SOURCES</text>
        <text x="266" y="34" fontFamily="var(--font-plex-mono), monospace" fontSize="8.5" fill="#b06a48" letterSpacing=".02em">CONFLICT</text>
      </svg>

      <div className="flex flex-wrap gap-4 pt-2 font-mono text-[0.62rem] uppercase tracking-[0.04em] text-bplineDim">
        <span className="inline-flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-bronze inline-block" /> Established
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-sand inline-block" /> Uncertain
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-rust inline-block" /> Contradiction
        </span>
      </div>

      <div className="absolute right-3.5 bottom-3.5 font-mono text-[0.58rem] leading-relaxed text-bplineDim text-right border-t border-[#253854] pt-1">
        DWG {dwgNo} · REV C<br />STATUS: EVIDENCE REVIEW
      </div>
    </div>
  );
}

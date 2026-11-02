const nodes = [
  { label: "Design Intent", dim: false },
  { label: "Original As-Built", dim: false },
  { label: "Alterations", dim: true },
  { label: "Surviving Fabric", dim: true },
  { label: "Present Condition", dim: true },
];

export default function EvidenceChain() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row items-stretch">
        {nodes.map((node, i) => (
          <div key={node.label} className="flex items-center flex-1">
            <div
              className={`flex-1 text-center px-3.5 py-4 border border-hline bg-ink2 font-mono text-[0.68rem] uppercase tracking-[0.05em] ${
                node.dim ? "text-paperdim" : "text-paper"
              }`}
            >
              {node.label}
            </div>
            {i < nodes.length - 1 && (
              <span className="flex-none w-8 text-center text-bronzedim rotate-90 sm:rotate-0 my-2 sm:my-0">
                →
              </span>
            )}
          </div>
        ))}
      </div>
      <p className="font-mono text-sm text-bronze tracking-[0.02em] mt-5">
        HCFM keeps those evidence objects separate.
      </p>
    </div>
  );
}

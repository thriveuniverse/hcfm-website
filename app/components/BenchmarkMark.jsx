export default function BenchmarkMark({ size = 28, color = "#c9a15a" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 30 30" fill="none" aria-hidden="true">
      <line x1="4" y1="24" x2="26" y2="24" stroke={color} strokeWidth="1.4" />
      <path d="M15 5 L23 24 H7 Z" stroke={color} strokeWidth="1.4" fill="none" />
      <circle cx="15" cy="14.5" r="2.1" fill={color} />
    </svg>
  );
}

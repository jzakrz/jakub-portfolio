export function DarkBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-black px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-white/80">
      {children}
    </span>
  );
}
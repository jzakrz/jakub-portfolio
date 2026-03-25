export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-white/80 px-6 py-4 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <p className="text-sm font-semibold uppercase tracking-[0.12em]">
          Jakub Zakrzewski
        </p>

        <a
          href="mailto:zakrzewski_j@yahoo.com"
          className="rounded-full bg-black px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white"
        >
          Hire me
        </a>
      </div>
    </header>
  );
}
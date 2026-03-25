import { navItems } from "@/data/portfolio";

export default function Header() {
  return (
    <header className="fixed left-1/2 top-4 z-50 w-[calc(100%-1.5rem)] max-w-6xl -translate-x-1/2">
      <div className="flex items-center justify-between rounded-[1.35rem] border border-black/10 bg-white/80 px-4 py-3 shadow-sm backdrop-blur">
        <a
          href="#home"
          className="text-sm font-semibold uppercase tracking-[0.12em]"
        >
          Jakub Zakrzewski
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs font-semibold uppercase tracking-[0.12em] text-black/70 transition hover:text-black"
            >
              {item}
            </a>
          ))}
        </nav>

        <a
          href="mailto:zakrzewski_j@yahoo.com"
          className="rounded-full bg-black px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:-translate-y-0.5"
        >
          Hire me
        </a>
      </div>
    </header>
  );
}
import Link from "next/link";

export default function ContactSection() {
  return (
    <footer className="px-6 py-16 lg:px-10 lg:py-20">
      <div className="rounded-[3rem] bg-[#f1cc00] px-8 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <div>
            <h2 className="text-[clamp(3rem,5.5vw,5.4rem)] font-black uppercase leading-[0.9] tracking-[-0.06em] text-black">
              Let&apos;s Work
              <br />
              Together.
            </h2>
          </div>

          <div className="lg:pr-4">
            <Link
              href="/get-in-touch"
              className="inline-flex min-h-[64px] items-center justify-center rounded-full bg-black px-8 text-center text-[0.95rem] font-semibold uppercase tracking-[0.12em] text-white transition-transform duration-300 hover:scale-[1.03] sm:min-h-[72px] sm:px-10 sm:text-base"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Header from "@/components/Header";
import { contactInfo } from "@/data/portfolio";

export default function GetInTouchPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Header />

      <section className="mx-auto max-w-6xl px-6 pb-16 pt-32 lg:px-10 lg:pb-20 lg:pt-36">
        <div className="rounded-[3rem] bg-[#f1cc00] px-8 py-10 sm:px-10 sm:py-12 lg:px-16 lg:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/65">
            Contact
          </p>

          <h1 className="mt-4 text-[clamp(2.6rem,6vw,5rem)] font-black uppercase leading-[0.9] tracking-[-0.06em] text-black">
            Get In Touch
          </h1>

          <p className="mt-5 max-w-2xl text-base text-black/75 sm:text-lg">
            I&apos;d love to hear from you. Reach out by email or connect with me on
            LinkedIn.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-flex min-h-[64px] items-center justify-center rounded-full bg-black px-8 text-center text-[0.95rem] font-semibold uppercase tracking-[0.12em] text-white transition-transform duration-300 hover:scale-[1.03]"
            >
              {contactInfo.email}
            </a>

            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[64px] items-center justify-center rounded-full border border-black/20 bg-white px-8 text-center text-[0.95rem] font-semibold uppercase tracking-[0.12em] text-black transition-colors duration-300 hover:bg-black hover:text-white"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

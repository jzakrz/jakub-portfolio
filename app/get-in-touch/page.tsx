import ContactActions from "@/components/ContactActions";
import Header from "@/components/Header";
import { contactInfo } from "@/data/portfolio";

export default function GetInTouchPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Header />

      <section className="mx-auto max-w-6xl px-6 pb-16 pt-32 lg:px-10 lg:pb-20 lg:pt-36">
        <div className="rounded-[2rem] border border-black/10 bg-white px-8 py-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] sm:px-10 sm:py-12 lg:px-16 lg:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">
            Contact
          </p>

          <h1 className="mt-4 text-[clamp(2.3rem,5vw,4.4rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-black">
            Get in touch
          </h1>

          <p className="mt-4 max-w-2xl text-base text-black/65 sm:text-lg">
            I&apos;d love to hear from you. Reach out by email, connect on
            LinkedIn, or copy my email address with one click.
          </p>

          <ContactActions
            email={contactInfo.email}
            linkedin={contactInfo.linkedin}
          />
        </div>
      </section>
    </main>
  );
}

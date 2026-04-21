import ContactActions from "@/components/ContactActions";
import Header from "@/components/Header";
import { contactInfo } from "@/data/portfolio";

export default function GetInTouchPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Header />

      <section className="mx-auto max-w-6xl px-6 pb-16 pt-32 lg:px-10 lg:pb-20 lg:pt-36">
        <div className="rounded-[2rem] border border-black/10 bg-white px-8 py-10 sm:px-10 sm:py-12 lg:px-16 lg:py-16">
          <h1 className="text-[clamp(3rem,7vw,6rem)] font-black uppercase leading-[0.92] tracking-[-0.06em] text-black">
            Get in touch
          </h1>

          <p className="mt-4 max-w-2xl text-base text-black/65 sm:text-lg">
            I&apos;d love to hear from you. Reach out by email or connect on
            LinkedIn.
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

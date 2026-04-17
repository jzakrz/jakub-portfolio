import ContactActions from "@/components/ContactActions";
import Header from "@/components/Header";
import { contactInfo } from "@/data/portfolio";

export default function GetInTouchPage() {
  return (
    <main className="min-h-screen bg-[#ececec] text-[#0d2d3b]">
      <Header />

      <section className="mx-auto max-w-6xl px-6 pb-16 pt-32 lg:px-10 lg:pb-20 lg:pt-36">
        <div className="max-w-[980px]">
          <p className="text-[clamp(2rem,4.8vw,4rem)] font-medium leading-[1.2] tracking-[-0.02em]">
            Designing digital products with enterprises and startups since 2013.
            Sharing design insights to 63k readers on LinkedIn.
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

import { portfolioImages } from "@/data/portfolio";

export default function HomeHero() {
  return (
    <section className="px-6 pb-16 pt-28 lg:px-10 lg:pb-24 lg:pt-32">
      <div className="grid min-h-[calc(100svh-8rem)] items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.72fr)] lg:gap-14">
        <div className="max-w-3xl">
          <h1 className="text-[clamp(3.2rem,9vw,7.8rem)] font-black leading-[0.9] tracking-[-0.07em] text-black">
            Hi, I&apos;m Jakub.
          </h1>

          <p className="mt-8 max-w-2xl text-[1.1rem] leading-[1.5] text-black/75 lg:mt-10 lg:text-[1.35rem]">
            I&apos;m a Product Designer with 3+ years of experience, designing
            complex digital products. Strong in translating business
            requirements, technical constraints, and stakeholder needs into
            user-friendly, production-ready solutions. Experienced in end-to-end
            design, user research, usability testing, Figma component systems,
            and close collaboration with product and engineering teams.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#f1cc00] shadow-[0_24px_70px_rgba(0,0,0,0.08)] sm:rounded-[3rem]">
          <picture>
            <source media="(min-width: 1024px)" srcSet={portfolioImages.heroDesktop} />
            <source media="(min-width: 768px)" srcSet={portfolioImages.heroTablet} />
            <img
              src={portfolioImages.heroMobile}
              alt="Portrait of Jakub Zakrzewski"
              className="block h-[420px] w-full object-cover object-top sm:h-[520px] lg:h-[680px] xl:h-[740px]"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}

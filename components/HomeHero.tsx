import { portfolioImages } from "@/data/portfolio";

export default function HomeHero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden px-6 pb-2 pt-20 lg:px-10 lg:pb-4 lg:pt-24">
      <div className="relative flex min-h-[calc(100svh-5.5rem)] flex-col justify-center lg:min-h-[calc(100svh-7rem)]">
        <div className="relative z-20 flex flex-col justify-start pt-4 lg:pt-8">
          <div className="max-w-[980px] leading-[0.88]">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-black/60 lg:mb-4">
              Hi there, I&apos;m
            </p>
            <h1 className="text-[clamp(2.8rem,12vw,8.2rem)] font-black uppercase tracking-[-0.06em] text-black">
              Jakub
            </h1>

            <h1 className="relative mt-0.5 text-[clamp(2.8rem,12vw,8.2rem)] font-black uppercase tracking-[-0.06em] text-black lg:-mt-2 lg:w-[170%]">
              Zakrzewski
            </h1>
          </div>

          <p className="mt-8 max-w-xl text-[1.1rem] leading-[1.45] text-black/75 lg:mt-10 lg:text-[1.35rem]">
            I&apos;m a Product Designer focused on turning complex ideas into
            clear, scalable digital products. I work best in fast-moving
            environments.
          </p>

          <div className="mt-8 h-[280px] w-full overflow-hidden rounded-[2.5rem] bg-[#f1cc00] sm:h-[320px] md:hidden">
            <img
              src={portfolioImages.heroMobile}
              alt="Portrait of Jakub"
              className="block h-full w-full object-cover object-top"
            />
          </div>
        </div>

        <div className="mt-8 hidden h-[360px] w-full overflow-hidden rounded-[2.5rem] bg-[#f1cc00] md:block lg:hidden">
          <img
            src={portfolioImages.heroTablet}
             alt="Portrait of Jakub"
             className="block h-full w-full object-cover object-top"
  />
        </div>

        <div className="absolute right-0 top-1/2 z-10 hidden w-[38%] max-w-[520px] -translate-y-1/2 overflow-hidden rounded-[3rem] bg-[#f1cc00] lg:block">
          <img
            src={portfolioImages.heroDesktop}
            alt="Portrait of Jakub"
            className="block h-[720px] w-full object-cover object-top xl:h-[780px]"
          />
        </div>
      </div>
    </section>
  );
}

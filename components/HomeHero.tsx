import { portfolioImages } from "@/data/portfolio";

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden px-6 pb-12 pt-10 lg:px-10 lg:pb-20 lg:pt-16">
      <div className="relative min-h-[calc(100vh-140px)]">
        <div className="relative z-20 flex min-h-[calc(100vh-140px)] flex-col justify-center">
          <div className="max-w-[980px] leading-[0.88]">
            <h1 className="text-[clamp(4.2rem,10vw,8.2rem)] font-black uppercase tracking-[-0.06em] text-black">
              Jakub
            </h1>

            <h1 className="relative -mt-2 text-[clamp(4.2rem,10vw,8.2rem)] font-black uppercase tracking-[-0.06em] text-black lg:w-[170%]">
              Zakrzewski
            </h1>
          </div>

          <p className="mt-8 max-w-xl text-[1.1rem] leading-[1.45] text-black/75 lg:mt-10 lg:text-[1.35rem]">
            I&apos;m a Product Designer focused on turning complex ideas into
            clear, scalable digital products. I work best in fast-moving
            environments where requirements evolve quickly and close
            collaboration with founders, developers, and stakeholders is part of
            the process.
          </p>

          <div className="mt-10 w-full max-w-[320px] overflow-hidden rounded-[2.5rem] bg-[#f1cc00] lg:hidden">
            <img
              src={portfolioImages.hero}
              alt="Portrait of Jakub"
              className="block h-full w-full object-cover object-top"
            />
          </div>
        </div>

        <div className="absolute right-0 top-1/2 z-10 hidden w-[38%] max-w-[520px] -translate-y-1/2 overflow-hidden rounded-[3rem] bg-[#f1cc00] lg:block">
          <img
            src={portfolioImages.hero}
            alt="Portrait of Jakub"
            className="block h-[720px] w-full object-cover object-top xl:h-[780px]"
          />
        </div>
      </div>
    </section>
  );
}
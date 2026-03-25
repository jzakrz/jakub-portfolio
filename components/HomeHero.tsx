import { portfolioImages } from "@/data/portfolio";

export default function HomeHero() {
  return (
    <section className="px-6 py-20 lg:px-10 lg:py-28">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h1 className="text-5xl font-black uppercase leading-none tracking-tight lg:text-7xl">
            Jakub
            <br />
            Zakrzewski
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-black/75 lg:text-xl">
            I&apos;m a Product Designer focused on complex digital products —
            especially B2B tools, internal systems, and platforms where clarity,
            structure, and collaboration matter most.
          </p>
        </div>

        <div className="max-w-md overflow-hidden rounded-[2rem] bg-[#f1cc00]">
          <img
            src={portfolioImages.hero}
            alt="Portrait of Jakub"
            className="block h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
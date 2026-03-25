import { portfolioImages } from "@/data/portfolio";

export default function HomeHero() {
  return (
    <section className="px-6 py-24">
      <h1 className="text-5xl font-bold">Jakub Zakrzewski</h1>
      <p className="mt-6 max-w-2xl text-xl">
        I&apos;m a Product Designer focused on complex digital products.
      </p>

      <div className="mt-10 max-w-sm overflow-hidden rounded-3xl bg-yellow-300">
        <img
          src={portfolioImages.hero}
          alt="Portrait of Jakub"
          className="block h-auto w-full object-cover"
        />
      </div>
    </section>
  );
}
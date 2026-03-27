const experienceItems = [
  {
    year: "2026",
    role: "Product Designer",
    company: "Net Zero Build",
  },
  {
    year: "2025",
    role: "Product Designer",
    company: "New Native",
  },
  {
    year: "2021",
    role: "Junior Creative Specialist",
    company: "Nextgrid",
  },
];

export default function ExperienceSection() {
  return (
    <section className="px-6 pb-14 pt-8 lg:px-10 lg:pb-20 lg:pt-12">
      <div className="mb-8">
        <h2 className="text-[clamp(3rem,7vw,6rem)] font-black uppercase leading-[0.92] tracking-[-0.06em] text-black">
          Experience
        </h2>
      </div>

      <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white">
        {experienceItems.map((item, index) => (
          <article
            key={`${item.year}-${item.company}`}
            className={`grid gap-4 px-6 py-6 lg:grid-cols-[110px_1fr] lg:gap-6 lg:px-8 lg:py-7 ${
              index !== experienceItems.length - 1 ? "border-b border-black/10" : ""
            }`}
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-black/45">
                {item.year}
              </p>
            </div>

            <div className="min-w-0">
              <div className="flex flex-col gap-1 lg:flex-row lg:items-baseline lg:justify-between">
                <h3 className="text-[clamp(1.5rem,2.6vw,2.2rem)] font-bold uppercase leading-[0.95] tracking-[-0.04em] text-black">
                  {item.role}
                </h3>

                <p className="text-sm font-semibold uppercase tracking-[0.08em] text-black/55">
                  {item.company}
                </p>
              </div>

            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
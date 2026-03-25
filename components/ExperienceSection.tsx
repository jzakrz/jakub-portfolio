const experienceItems = [
  {
    year: "2026",
    role: "Product Designer",
    company: "Net Zero Build",
    image:
      "https://i.postimg.cc/tJqkrvHs/netzerobuild_logo.jpg",
  },
  {
    year: "2025",
    role: "Product Designer",
    company: "New Native",
    image:
      "https://i.postimg.cc/mkLjdpGF/nn_logo.jpg",
  },
  {
    year: "2021",
    role: "Junior Creative Specialist",
    company: "Nextgrid",
    image:
      "https://i.postimg.cc/NFsDNCw9/nextgrid_logo.jpg",
  },
];

export default function ExperienceSection() {
  return (
    <section className="px-6 pb-16 pt-8 lg:px-10 lg:pb-24 lg:pt-14">
      <div className="mb-8 lg:mb-10">
        <h2 className="text-[clamp(3rem,7vw,6rem)] font-black uppercase leading-[0.92] tracking-[-0.06em] text-black">
          Experience
        </h2>
      </div>

      <div className="space-y-5 lg:space-y-7">
        {experienceItems.map((item) => (
          <div
            key={`${item.year}-${item.company}`}
            className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_285px]"
          >
            <article className="flex min-h-[250px] flex-col justify-between rounded-[2.2rem] border border-black/10 bg-white px-8 py-8 sm:px-10 sm:py-9 lg:min-h-[280px] lg:px-16 lg:py-12">
              <p className="text-[1rem] font-semibold tracking-[-0.03em] text-black lg:text-[1.5rem]">
                {item.year}
              </p>

              <div className="my-6 lg:my-8">
                <h3 className="text-[clamp(1.7rem,3.1vw,2.9rem)] font-bold uppercase leading-[0.94] tracking-[-0.06em] text-black">
                  {item.role}
                </h3>
              </div>

              <div>
                <p className="text-[1rem] font-semibold uppercase tracking-[-0.03em] text-black lg:text-[1.45rem]">
                  {item.company}
                </p>
                
              </div>
            </article>

            <div className="min-h-[250px] overflow-hidden rounded-[2.2rem] border border-black/10 bg-white lg:min-h-[280px]">
              <img
                src={item.image}
                alt={`${item.company} preview`}
                className="h-full w-full object-cover"
                loading="lazy"
                draggable={false}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
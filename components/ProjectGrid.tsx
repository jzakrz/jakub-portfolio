import Link from "next/link";
import { DarkBadge } from "@/components/Badge";

const hackathonImage =
  "https://i.postimg.cc/DfcDhyB2/hack.png";

const exerciseSnackImage =
  "https://i.postimg.cc/28Dzc634/exercise.png";

export default function ProjectGrid() {
  return (
    <section className="px-6 py-16 lg:px-10 lg:py-20">
      <div className="mb-10">
        <h2 className="text-[clamp(3rem,7vw,6rem)] font-black uppercase leading-[0.92] tracking-[-0.06em] text-black">
          Selected Works
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-12">
        <Link
          href="/projects/hackathon"
          className="group relative min-w-0 overflow-hidden rounded-[2.5rem] bg-black p-7 text-white transition-all duration-500 hover:scale-[0.985] sm:p-9 lg:col-span-7 lg:min-h-[560px]"
        >
          <div className="relative z-20 max-w-[78%] lg:max-w-[68%] xl:max-w-[560px]">
            <h3 className="text-[clamp(2.6rem,5.1vw,5rem)] font-black uppercase leading-[0.9] tracking-[-0.06em] text-[#f1cc00]">
              Hackathon
              <br />
              Platform.
            </h3>
          </div>

          <div className="mt-8 flex justify-end lg:absolute lg:bottom-0 lg:right-[-24px] lg:w-[72%]">
            <img
              src={hackathonImage}
              alt="Hackathon platform preview"
              className="h-[240px] w-full rounded-[2rem] object-cover grayscale transition duration-500 group-hover:rotate-0 group-hover:grayscale-0 lg:h-[320px] lg:rotate-[8deg]"
            />
          </div>

          <div className="relative z-20 mt-8 flex flex-wrap gap-2 lg:absolute lg:bottom-8 lg:left-9">
            <DarkBadge>Commercial Project</DarkBadge>
            <DarkBadge>Event Platform</DarkBadge>
          </div>
        </Link>

        <article className="group relative min-w-0 overflow-hidden rounded-[2.5rem] border border-black/10 bg-white p-7 transition-all duration-500 hover:scale-[0.985] sm:p-9 lg:col-span-5 lg:min-h-[560px]">
          <div className="relative z-20">
            <h3 className="max-w-[85%] text-[clamp(2.2rem,4vw,4.2rem)] font-black uppercase italic leading-[0.92] tracking-[-0.06em] text-black">
              Exercise
              <br />
              Snack.
            </h3>
          </div>

          <div className="mt-8 flex justify-center lg:absolute lg:bottom-[-120px] lg:left-0 lg:right-0 lg:transition-all lg:duration-500 group-hover:lg:bottom-[-90px]">
            <div className="relative h-[320px] w-[176px] rounded-[2.5rem] border-[5px] border-black bg-white shadow-[0_24px_50px_rgba(0,0,0,0.18)] lg:h-[400px] lg:w-[210px]">
              <div className="absolute left-1/2 top-0 h-6 w-24 -translate-x-1/2 rounded-b-[1rem] bg-black" />
              <div className="absolute inset-[10px] overflow-hidden rounded-[2rem] bg-[#f8f8f8]">
                <img
                  src={exerciseSnackImage}
                  alt="Exercise Snack app preview"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="relative z-20 mt-8 flex flex-wrap gap-2 lg:absolute lg:bottom-8 lg:left-9">
            <DarkBadge>Student Project</DarkBadge>
            <DarkBadge>Mobile Platform</DarkBadge>
          </div>
        </article>
      </div>
    </section>
  );
}
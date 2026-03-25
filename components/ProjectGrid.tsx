import Link from "next/link";
import { DarkBadge } from "@/components/Badge";

export default function ProjectGrid() {
  return (
    <section className="px-6 py-16">
      <h2 className="text-3xl font-bold">Selected Works</h2>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <Link
          href="/projects/hackathon"
          className="block rounded-3xl bg-black p-8 text-white"
        >
          <h3 className="text-2xl font-bold">Hackathon Platform</h3>
          <p className="mt-4 text-white/80">
            Commercial project focused on improving onboarding and team joining.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <DarkBadge>Commercial Project</DarkBadge>
            <DarkBadge>Event Platform</DarkBadge>
          </div>
        </Link>

        <article className="rounded-3xl border border-black/10 bg-white p-8">
          <h3 className="text-2xl font-bold">Exercise Snack</h3>
          <p className="mt-4 text-black/70">
            Student project for active breaks during office work.
          </p>
        </article>
      </div>
    </section>
  );
}
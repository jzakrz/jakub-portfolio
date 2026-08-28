import Image from "next/image";
import Link from "next/link";

type Project = {
  number: string;
  type: string;
  year: string;
  title: string;
  disciplines: string;
  summary: string;
  href?: string;
  image?: string;
  imageAlt?: string;
  imageFit?: "cover" | "contain";
};

const projects: Project[] = [
  {
    number: "01",
    type: "Case study",
    year: "2023–25",
    title: "Rebuilding the hackathon experience.",
    disciplines: "Product design / Platform",
    summary:
      "A connected journey for discovering events, joining teams and submitting projects.",
    href: "/projects/hackathon",
    image: "/assets/images/hackathon-case-study-image.webp.webp",
    imageAlt: "New Native hackathon platform interface",
    imageFit: "cover",
  },
  {
    number: "02",
    type: "Student project",
    year: "2022",
    title: "Making movement easier to start.",
    disciplines: "Product design / Wellness",
    summary:
      "Short exercise recommendations shaped around busy days and a personal video library.",
    href: "/projects/exercise-snack",
    image: "/assets/images/exercise.webp.webp",
    imageAlt: "Exercise Snack mobile app interface",
    imageFit: "contain",
  },
  {
    number: "03",
    type: "Case study",
    year: "2025–26",
    title: "Turning compliance into a clear workflow.",
    disciplines: "Product strategy / AI / Compliance",
    summary:
      "A workspace for navigating sustainability requirements and the evidence behind them.",
  },
  {
    number: "04",
    type: "In progress",
    year: "2026",
    title: "Making a complex library easier to navigate.",
    disciplines: "Service design / Public space",
    summary:
      "Reframing the library journey as a legible and welcoming service experience.",
  },
];

function ProjectPreview({ project }: { project: Project }) {
  if (project.image) {
    return (
      <div
        className={`project-card__media project-card__media--${
          project.imageFit ?? "cover"
        }`}
      >
        <Image
          src={project.image}
          alt={project.imageAlt ?? ""}
          fill
          sizes="(max-width: 700px) calc(100vw - 64px), (max-width: 1100px) calc(100vw - 104px), 720px"
        />
        <span className="project-card__open" aria-hidden="true">
          Open ↗
        </span>
      </div>
    );
  }

  return (
    <div className="project-card__media project-card__media--pending">
      <span>Preview in progress</span>
      <span>{project.number} / 04</span>
    </div>
  );
}

function ProjectCardContent({ project }: { project: Project }) {
  return (
    <>
      <div className="project-card__copy">
        <p className="project-card__meta">
          {project.number} / {project.type} / {project.year}
        </p>
        <h2>{project.title}</h2>
        <p className="project-card__summary">{project.summary}</p>
        <p className="project-card__disciplines">{project.disciplines}</p>
      </div>
      <ProjectPreview project={project} />
    </>
  );
}

function ProjectCard({ project }: { project: Project }) {
  if (project.href) {
    return (
      <Link href={project.href} className="project-card project-card--linked">
        <ProjectCardContent project={project} />
      </Link>
    );
  }

  return (
    <article className="project-card project-card--pending">
      <ProjectCardContent project={project} />
    </article>
  );
}

export default function WorksLedger() {
  return (
    <main className="project-index">
      <div className="project-index__shell">
        <header className="project-index__header">
          <Link href="/">← Home</Link>
          <p>Works / 04</p>
          <p>Jakub Zakrzewski</p>
        </header>

        <h1 className="sr-only">Selected case studies</h1>

        <section className="project-index__grid" aria-label="Case studies">
          {projects.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </section>
      </div>
    </main>
  );
}

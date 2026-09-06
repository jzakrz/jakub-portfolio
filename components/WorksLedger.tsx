import Image from "next/image";
import Link from "next/link";

type Project = {
  number: string;
  type: string;
  year: string;
  title: string;
  disciplines: string;
  summary: string;
  status?: "coming-soon";
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
    title: "Hackathon Platform Redesign",
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
    title: "Exercise Snack",
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
    title: "Green Building Compliance Platform",
    disciplines: "Product strategy / AI / Compliance",
    summary:
      "A workspace for navigating sustainability requirements and the evidence behind them.",
    status: "coming-soon",
    image: "/assets/images/net-zero-portfolio-dashboard.png",
    imageAlt: "Net Zero Build organization portfolio dashboard",
    imageFit: "contain",
  },
  {
    number: "04",
    type: "Case study",
    year: "2026",
    title: "University Library Mobile App",
    disciplines: "UX research / Mobile / Public service",
    summary:
      "Modernising my first UX project into a clearer mobile journey through the University of Warsaw Library.",
    status: "coming-soon",
  },
  {
    number: "05",
    type: "Design challenge",
    year: "2026",
    title: "Financial Planning Assistant",
    disciplines: "Product design / Fintech / AI",
    summary:
      "A monthly planning assistant that helps people understand whether a purchase still fits their financial plan.",
    status: "coming-soon",
  },
  {
    number: "06",
    type: "Product concept",
    year: "2026",
    title: "Nonlinear AI Chat Workspace",
    disciplines: "Product concept / AI / Collaboration",
    summary:
      "A node-based workspace for branching conversations, coordinating agents and preserving context.",
    status: "coming-soon",
  },
];

function ProjectPreview({ project }: { project: Project }) {
  const isComingSoon = project.status === "coming-soon";

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
        {isComingSoon ? (
          <span className="project-card__status">Coming soon</span>
        ) : (
          <span className="project-card__open" aria-hidden="true">
            Open ↗
          </span>
        )}
      </div>
    );
  }

  return (
    <div className="project-card__media project-card__media--pending">
      <span>Coming soon</span>
      <span>{project.number} / {String(projects.length).padStart(2, "0")}</span>
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
        <div className="project-card__body">
          <h2>{project.title}</h2>
          <p className="project-card__summary">{project.summary}</p>
        </div>
        <p className="project-card__disciplines">{project.disciplines}</p>
      </div>
      <ProjectPreview project={project} />
    </>
  );
}

function ProjectCard({ project }: { project: Project }) {
  if (project.href && project.status !== "coming-soon") {
    return (
      <Link href={project.href} className="project-card project-card--linked">
        <ProjectCardContent project={project} />
      </Link>
    );
  }

  return (
    <article className="project-card project-card--coming-soon">
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
          <p>Works / {String(projects.length).padStart(2, "0")}</p>
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

import Image from "next/image";
import Link from "next/link";

type Project = {
  number: string;
  type: string;
  year: string;
  title: string;
  descriptor: string;
  disciplines: string;
  summary: string;
  href?: string;
  action: string;
  image?: string;
  imageAlt?: string;
  media: "photo" | "phone" | "blueprint" | "archive";
  mediaLast?: boolean;
};

const projects: Project[] = [
  {
    number: "01",
    type: "Case study",
    year: "2023–25",
    title: "New Native",
    descriptor: "Hackathon platform",
    disciplines: "Product design / Platform",
    summary:
      "A connected journey for discovering events, joining teams and submitting projects.",
    href: "/projects/hackathon",
    action: "View case study",
    image: "/assets/images/hackathon-case-study-image.webp.webp",
    imageAlt: "New Native hackathon platform interface",
    media: "photo",
  },
  {
    number: "02",
    type: "Student project",
    year: "2022",
    title: "Exercise Snack",
    descriptor: "Movement companion",
    disciplines: "Product design / Wellness",
    summary:
      "Short movement recommendations built around a personal video library.",
    href: "/projects/exercise-snack",
    action: "View case study",
    image: "/assets/images/exercise.webp.webp",
    imageAlt: "Exercise Snack mobile app interface",
    media: "phone",
    mediaLast: true,
  },
  {
    number: "03",
    type: "Case study",
    year: "2025–26",
    title: "Net Zero Build",
    descriptor: "AI compliance SaaS",
    disciplines: "Product strategy / AI / Compliance",
    summary:
      "A workspace for navigating complex sustainability requirements and the evidence behind them.",
    action: "Case study in progress",
    media: "blueprint",
  },
  {
    number: "04",
    type: "In progress",
    year: "2026",
    title: "BUW Library",
    descriptor: "Service experience",
    disciplines: "Service design / Public space",
    summary:
      "Reframing a complex library journey as a legible, welcoming service experience.",
    action: "Project in progress",
    media: "archive",
    mediaLast: true,
  },
];

function ProjectMedia({ project }: { project: Project }) {
  if (project.image) {
    return (
      <div
        className={`works-ledger__media works-ledger__media--${project.media}`}
      >
        <Image
          src={project.image}
          alt={project.imageAlt ?? ""}
          fill
          sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1100px) calc(100vw - 80px), 520px"
        />
      </div>
    );
  }

  if (project.media === "blueprint") {
    return (
      <div
        className="works-ledger__media works-ledger__media--blueprint"
        aria-hidden="true"
      >
        <span className="blueprint-building blueprint-building--one" />
        <span className="blueprint-building blueprint-building--two" />
        <span className="blueprint-building blueprint-building--three" />
        <span className="blueprint-caption">Evidence / requirements / decisions</span>
      </div>
    );
  }

  return (
    <div
      className="works-ledger__media works-ledger__media--archive"
      aria-hidden="true"
    >
      <span />
      <span />
      <span />
    </div>
  );
}

function ProjectIdentity({ project }: { project: Project }) {
  return (
    <div className="works-ledger__identity">
      <p className="works-ledger__meta">
        {project.number} / {project.type} / {project.year}
      </p>
      <h2>{project.title}</h2>
      <p className="works-ledger__descriptor">{project.descriptor}</p>
    </div>
  );
}

function ProjectDetails({ project }: { project: Project }) {
  return (
    <div className="works-ledger__details">
      <p className="works-ledger__meta">{project.disciplines}</p>
      <p className="works-ledger__summary">{project.summary}</p>
      <p className="works-ledger__action">
        {project.action}
        {project.href ? <span aria-hidden="true">↗</span> : null}
      </p>
    </div>
  );
}

function ProjectRow({ project }: { project: Project }) {
  const content = (
    <>
      <ProjectIdentity project={project} />
      {project.mediaLast ? <ProjectDetails project={project} /> : null}
      <ProjectMedia project={project} />
      {!project.mediaLast ? <ProjectDetails project={project} /> : null}
    </>
  );

  const className = `works-ledger__row${
    project.mediaLast ? " works-ledger__row--media-last" : ""
  }${project.href ? " works-ledger__row--linked" : ""}`;

  if (project.href) {
    return (
      <Link href={project.href} className={className}>
        {content}
      </Link>
    );
  }

  return <article className={className}>{content}</article>;
}

export default function WorksLedger() {
  return (
    <main className="works-index">
      <div className="works-ledger">
        <header className="works-ledger__header">
          <Link href="/">← Home</Link>
          <p>Works / 04</p>
          <p>Jakub Zakrzewski</p>
        </header>

        <section className="works-ledger__intro" aria-labelledby="works-title">
          <div className="works-ledger__intro-title">
            <p className="works-ledger__meta">Selected work / 2022–2026</p>
            <h1 id="works-title">Case studies</h1>
          </div>
          <div className="works-ledger__intro-copy">
            <p className="works-ledger__statement">
              A selection of product work across platforms, systems and
              early-stage ideas.
            </p>
            <p className="works-ledger__intro-note">
              Products shaped through research, systems thinking and close
              collaboration.
            </p>
          </div>
        </section>

        <section aria-label="Case studies">
          {projects.map((project) => (
            <ProjectRow key={project.number} project={project} />
          ))}
        </section>

        <footer className="works-ledger__footer">
          <div>
            <p className="works-ledger__meta">Next step</p>
            <h2>Curious about the work?</h2>
          </div>
          <div className="works-ledger__footer-routes">
            <p>Start with the most complete story, or say hello.</p>
            <Link href="/projects/hackathon">
              Open New Native case study <span aria-hidden="true">↗</span>
            </Link>
            <Link href="/get-in-touch">
              Get in touch <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}

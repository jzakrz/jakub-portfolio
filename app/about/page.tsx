import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SteamRecentGames from "@/components/SteamRecentGames";

const resumeUrl =
  "https://drive.google.com/file/d/1RIoWkdQBo-7y2hP2e0RHnL-UnUd_TmLk/view?usp=sharing";

const chapters = [
  {
    number: "01",
    label: "Where it clicked",
    title: "I found UX through cognitive science.",
    copy: (
      <>
        I first encountered UX while studying Cognitive Science at the
        University of Warsaw. I signed up for an additional UX design class,
        and it was the first time psychology, technology and visual
        problem-solving felt like parts of the same discipline. From that
        point, I knew this was what I wanted to do.
      </>
    ),
  },
  {
    number: "02",
    label: "Learning the product",
    title: "Hackathons became my practical product education.",
    copy: (
      <>
        At New Native, I started by organizing international AI hackathons for
        developers from around the world. After delivering more than 20
        events, I knew the participant journey intimately—and could see where
        the platform made their work harder. I began proposing improvements,
        collaborating with developers and taking ownership of the experience.
        Eventually, I moved from organizing events to designing the product
        behind them.
      </>
    ),
  },
  {
    number: "03",
    label: "Designing in startups",
    title: "I learned to design close to the work.",
    copy: (
      <>
        As a Product Designer and Product Owner, I led the redesign of a
        hackathon platform serving more than 200,000 users. Later, at Net Zero
        Build, I worked with founders and engineers on an AI-assisted platform
        for navigating complex green-building requirements. Startup work
        taught me to make decisions with incomplete information, keep scope
        realistic and stay involved through implementation.
      </>
    ),
  },
];

const principles = [
  {
    number: "01",
    title: "Make complexity understandable",
    copy: "I map the system before simplifying the interface, so clarity does not come at the cost of accuracy.",
  },
  {
    number: "02",
    title: "Design with engineers",
    copy: "The best decisions happen through shared exploration—not when a finished file is handed over at the end.",
  },
  {
    number: "03",
    title: "Test the risky assumption",
    copy: "I look for the decision that could invalidate the direction and test it before investing in polish.",
  },
];

export const metadata: Metadata = {
  title: "About — Jakub Zakrzewski",
  description:
    "The story and working principles of Jakub Zakrzewski, a product designer shaped by cognitive science and startups.",
};

export default function AboutPage() {
  return (
    <main className="about-page">
      <div className="about-shell">
        <header className="about-header">
          <Link href="/" aria-label="Back to home">
            ← Home
          </Link>
          <p>About</p>
          <p>Jakub Zakrzewski</p>
        </header>

        <section className="about-hero" aria-labelledby="about-title">
          <div className="about-hero__copy">
            <p className="about-kicker">Product designer / Warsaw</p>
            <h1 id="about-title">
              Shaped by cognitive science and startup realities.
            </h1>
            <p className="about-hero__intro">
              Hi, I&apos;m Jakub. I turn complex workflows into clear digital
              products, working closely with users, founders and engineers from
              early problem framing through implementation.
            </p>
            <div className="about-hero__links">
              <Link href="/projects">See my work ↗</Link>
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                Resume ↗
              </a>
            </div>
          </div>

          <figure className="about-portrait">
            <Image
              src="/assets/images/jakub-portrait.webp"
              alt="Jakub Zakrzewski smiling in front of tropical plants"
              fill
              priority
              sizes="(max-width: 760px) 100vw, (max-width: 1100px) 44vw, 620px"
            />
            <figcaption>
              <span>Currently in Warsaw</span>
              <span aria-hidden="true">●</span>
            </figcaption>
          </figure>
        </section>

        <section className="about-metrics" aria-label="Experience at a glance">
          <article>
            <strong>20+</strong>
            <p>International AI hackathons delivered</p>
          </article>
          <article>
            <strong>200k+</strong>
            <p>Users on a product I helped redesign</p>
          </article>
          <article>
            <strong>2</strong>
            <p>Startup products shaped end to end</p>
          </article>
        </section>

        <section className="about-story" aria-labelledby="story-title">
          <div className="about-section-heading">
            <p className="about-kicker">My path into product</p>
            <h2 id="story-title">A short story in three chapters.</h2>
          </div>

          <div className="about-chapters">
            {chapters.map((chapter) => (
              <article className="about-chapter" key={chapter.number}>
                <div className="about-chapter__index">
                  <span>{chapter.number}</span>
                  <p>{chapter.label}</p>
                </div>
                <div className="about-chapter__content">
                  <h3>{chapter.title}</h3>
                  <p>{chapter.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-principles" aria-labelledby="principles-title">
          <div className="about-section-heading about-section-heading--dark">
            <p className="about-kicker">How I work</p>
            <h2 id="principles-title">Principles that keep the work honest.</h2>
          </div>

          <div className="about-principles__grid">
            {principles.map((principle) => (
              <article key={principle.number}>
                <p className="about-principle__number">{principle.number}</p>
                <div>
                  <h3>{principle.title}</h3>
                  <p>{principle.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-games" aria-labelledby="games-title">
          <div className="about-games__intro">
            <p className="about-kicker">Away from the canvas</p>
            <h2 id="games-title">There is usually a game running somewhere.</h2>
            <p>
              When I&apos;m not designing, I&apos;m probably working through an
              RPG, revisiting an older game or persuading friends to start
              another co-op campaign. Games keep me curious about systems,
              feedback and the many ways people find their own path through a
              designed world.
            </p>
          </div>
          <SteamRecentGames />
        </section>

        <footer className="about-footer">
          <p className="about-kicker">Next step</p>
          <h2>Have a complicated product problem?</h2>
          <div className="about-footer__links">
            <Link href="/get-in-touch">Let&apos;s talk ↗</Link>
            <Link href="/projects">Browse projects →</Link>
          </div>
        </footer>
      </div>
    </main>
  );
}

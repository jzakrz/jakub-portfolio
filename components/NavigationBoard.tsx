import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

const resumeUrl =
  "https://drive.google.com/file/d/1RIoWkdQBo-7y2hP2e0RHnL-UnUd_TmLk/view?usp=sharing";

type DoodleStyle = CSSProperties & {
  "--doodle-delay": string;
};

function doodleDelay(delay: string): DoodleStyle {
  return { "--doodle-delay": delay };
}

function CardAction({ children, icon = "↗" }: { children: ReactNode; icon?: string }) {
  return (
    <span className="board-action">
      <span>{children}</span>
      <span className="board-action__icon" aria-hidden="true">
        {icon}
      </span>
    </span>
  );
}

function StatusBar() {
  return (
    <header className="board-status" aria-label="Portfolio status">
      <p>Jakub Zakrzewski / Product design</p>
      <p className="board-status__edition">Portfolio — 2026</p>
      <p className="board-status__availability">
        <span aria-hidden="true">●</span>
        Available for new projects
      </p>
    </header>
  );
}

function PortraitDoodles() {
  return (
    <svg
      className="portrait-doodles"
      viewBox="0 0 1080 1020"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <g
        className="portrait-doodle portrait-doodle--flower"
        style={doodleDelay("80ms")}
        transform="translate(148 220) rotate(-10)"
      >
        <path d="M0-18C-45-80-102-25-58 15C-112 32-72 92-19 51C5 113 74 78 48 24C111 19 96-53 34-43C31-93-26-91 0-18Z" />
        <circle r="13" />
      </g>

      <g
        className="portrait-doodle portrait-doodle--flower"
        style={doodleDelay("220ms")}
        transform="translate(230 414) scale(.58) rotate(8)"
      >
        <path d="M0-18C-45-80-102-25-58 15C-112 32-72 92-19 51C5 113 74 78 48 24C111 19 96-53 34-43C31-93-26-91 0-18Z" />
        <circle r="13" />
      </g>

      <g
        className="portrait-doodle portrait-doodle--sparkle"
        style={doodleDelay("350ms")}
        transform="translate(132 535)"
      >
        <path d="M0-40C3-14 15-3 39 0C15 4 4 15 0 41C-4 15-15 4-39 0C-15-3-4-14 0-40Z" />
      </g>

      <g
        className="portrait-doodle portrait-doodle--flower"
        style={doodleDelay("470ms")}
        transform="translate(178 858) scale(.8) rotate(-6)"
      >
        <path d="M0-18C-45-80-102-25-58 15C-112 32-72 92-19 51C5 113 74 78 48 24C111 19 96-53 34-43C31-93-26-91 0-18Z" />
        <circle r="13" />
      </g>

      <g
        className="portrait-doodle portrait-doodle--flower"
        style={doodleDelay("160ms")}
        transform="translate(910 286) rotate(10)"
      >
        <path d="M0-18C-45-80-102-25-58 15C-112 32-72 92-19 51C5 113 74 78 48 24C111 19 96-53 34-43C31-93-26-91 0-18Z" />
        <circle r="13" />
      </g>

      <g
        className="portrait-doodle portrait-doodle--sparkle"
        style={doodleDelay("300ms")}
        transform="translate(864 102) scale(.62)"
      >
        <path d="M0-40C3-14 15-3 39 0C15 4 4 15 0 41C-4 15-15 4-39 0C-15-3-4-14 0-40Z" />
      </g>

      <g
        className="portrait-doodle portrait-doodle--sparkle"
        style={doodleDelay("410ms")}
        transform="translate(958 489) scale(.72)"
      >
        <path d="M0-40C3-14 15-3 39 0C15 4 4 15 0 41C-4 15-15 4-39 0C-15-3-4-14 0-40Z" />
      </g>

      <g
        className="portrait-doodle portrait-doodle--flower"
        style={doodleDelay("540ms")}
        transform="translate(878 578) scale(.58) rotate(5)"
      >
        <path d="M0-18C-45-80-102-25-58 15C-112 32-72 92-19 51C5 113 74 78 48 24C111 19 96-53 34-43C31-93-26-91 0-18Z" />
        <circle r="13" />
      </g>

      <g
        className="portrait-doodle portrait-doodle--plus"
        style={doodleDelay("620ms")}
        transform="translate(212 700)"
      >
        <path d="M-22 0H22M0-22V22" />
      </g>

      <g
        className="portrait-doodle portrait-doodle--plus"
        style={doodleDelay("690ms")}
        transform="translate(970 700)"
      >
        <path d="M-22 0H22M0-22V22" />
      </g>

      <g
        className="portrait-doodle portrait-doodle--flower"
        style={doodleDelay("760ms")}
        transform="translate(925 872) scale(.82) rotate(8)"
      >
        <path d="M0-18C-45-80-102-25-58 15C-112 32-72 92-19 51C5 113 74 78 48 24C111 19 96-53 34-43C31-93-26-91 0-18Z" />
        <circle r="13" />
      </g>

      <g
        className="portrait-doodle portrait-doodle--horn"
        style={doodleDelay("900ms")}
        transform="translate(308 165) rotate(-10)"
      >
        <path d="M0 20C-18-34-12-91 8-126C18-70 49-35 84 0C47 4 21 11 0 20Z" />
        <path d="M8-86L53-33M1-48L72-7" />
      </g>

      <g
        className="portrait-doodle portrait-doodle--horn"
        style={doodleDelay("1080ms")}
        transform="translate(704 158) rotate(12)"
      >
        <path d="M84 20C102-34 96-91 76-126C66-70 35-35 0 0C37 4 63 11 84 20Z" />
        <path d="M76-86L31-33M83-48L12-7" />
      </g>

      <g
        className="portrait-doodle portrait-doodle--glasses"
        style={doodleDelay("1280ms")}
        transform="translate(300 380)"
      >
        <path d="M0 8C35-8 112-10 155 6L146 82C107 102 40 97 12 70L0 8Z" />
        <path d="M244 6C287-10 364-8 399 8L387 70C359 97 292 102 253 82L244 6Z" />
        <path d="M151 21C178 2 218 2 246 21M399 15L430 7" />
      </g>
    </svg>
  );
}

export default function NavigationBoard() {
  return (
    <main className="portfolio-home">
      <div className="navigation-board">
        <StatusBar />

        <section className="navigation-grid" aria-label="Portfolio navigation">
          <div className="navigation-column navigation-column--left">
            <Link
              href="/projects"
              className="navigation-card route-card route-card--works"
            >
              <div className="route-meta">
                <span>01 / My work</span>
                <span>04 case studies</span>
              </div>

              <div className="works-content">
                <h1>
                  Commercial
                  <br />
                  projects &amp;
                  <br />
                  personal
                  <br />
                  experiments
                </h1>

                <div className="works-summary">
                  <p>
                    Product strategy, systems thinking and interface design for
                    products where the problem is still taking shape.
                  </p>
                  <CardAction>Browse projects</CardAction>
                </div>
              </div>
            </Link>

            <div className="secondary-routes">
              <Link
                href="/about"
                className="navigation-card route-card route-card--about"
              >
                <p className="route-meta route-meta--single">02 / About me</p>
                <div className="about-copy">
                  <h2>Hi, I&apos;m Jakub, a Product Designer</h2>
                  <p>
                    Based in Warsaw, working across strategy, systems and
                    interface craft.
                  </p>
                </div>
                <CardAction>Read profile</CardAction>
              </Link>

              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="navigation-card route-card route-card--resume"
              >
                <p className="route-meta route-meta--single">03 / Resume</p>
                <h2>Resume</h2>
                <CardAction icon="↓">Download</CardAction>
              </a>
            </div>
          </div>

          <div className="navigation-column navigation-column--right">
            <figure
              className="navigation-card portrait-card"
              tabIndex={0}
              aria-label="Portrait of Jakub Zakrzewski. Hover or focus to reveal drawings."
            >
              <Image
                src="/assets/images/jakub-portrait.webp"
                alt="Portrait of Jakub Zakrzewski"
                fill
                preload
                sizes="(max-width: 760px) calc(100vw - 24px), (max-width: 1050px) 38vw, (max-width: 1600px) 38vw, 600px"
                className="portrait-card__image"
              />
              <PortraitDoodles />
              <figcaption>04 / Portrait</figcaption>
            </figure>

            <Link
              href="/get-in-touch"
              className="navigation-card route-card route-card--contact"
            >
              <p className="route-meta route-meta--single">05 / Contact</p>
              <h2>Let&apos;s talk.</h2>
              <div className="contact-bottom">
                <p>Email / LinkedIn</p>
                <CardAction>Get in touch</CardAction>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

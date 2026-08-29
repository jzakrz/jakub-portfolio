import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Net Zero Build — Jakub Zakrzewski",
  description:
    "A product design case study about turning an inherited green-building certification MVP into a scalable organization, project and compliance system for the Saudi market.",
};

const architectureLayers = ["Certification", "Category", "Credit", "Evidence"];

const systemPatterns = [
  ["01", "Sidebar", "Context and navigation"],
  ["02", "Cards", "Grouped decisions"],
  ["03", "Tables", "Dense evidence"],
  ["04", "Tabs", "Modes without new pages"],
  ["05", "Badges", "Status at a glance"],
  ["06", "Forms", "Predictable input"],
];

const tradeoffs = [
  {
    title: "Architecture before breadth.",
    body: "I defined organization and project context before expanding the feature set, because every permission, report and AI action depended on that boundary.",
  },
  {
    title: "Saudi and LEED first.",
    body: "The model prioritized LEED while retaining SBC 1001 and project-specific requirements instead of claiming an immediately universal certification engine.",
  },
  {
    title: "System fidelity over novelty.",
    body: "Staying close to shadcn reduced visual freedom, but improved consistency, implementation clarity and the likelihood that new screens would belong to the same product.",
  },
  {
    title: "Design readiness, not impact.",
    body: "The redesign did not reach production while I was involved, so the case presents the quality of the product direction—not invented customer or business results.",
  },
];

const lessons = [
  {
    title: "Architecture is product design.",
    body: "Separating organization context from project work clarified navigation, ownership, reporting and the information the assistant could safely use.",
  },
  {
    title: "A library is a decision tool.",
    body: "shadcn was most valuable when it removed low-value invention and made exceptions visible enough to question.",
  },
  {
    title: "Complexity still needs traceability.",
    body: "Simplifying certification did not mean hiding its structure. Users still needed to see how a requirement connected to points, evidence and local rules.",
  },
  {
    title: "Honesty strengthens the story.",
    body: "An inherited MVP and incomplete implementation are real constraints. Naming them makes the design reasoning easier—not harder—to evaluate.",
  },
];

function SectionIntro({
  label,
  title,
  note,
}: {
  label: string;
  title: string;
  note: string;
}) {
  return (
    <div className="hackathon-case__rail">
      <p className="hackathon-case__eyebrow">{label}</p>
      <h2>{title}</h2>
      <p className="hackathon-case__rail-note">{note}</p>
    </div>
  );
}

function EditorialRows({
  items,
}: {
  items: Array<{ title: string; body: string }>;
}) {
  return (
    <div className="hackathon-editorial-rows net-zero-editorial-rows">
      {items.map((item, index) => (
        <article className="hackathon-editorial-row" key={item.title}>
          <p className="hackathon-editorial-row__number">
            {String(index + 1).padStart(2, "0")}
          </p>
          <div>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

function EvidenceFigure({
  src,
  alt,
  label,
  caption,
  width,
  height,
}: {
  src: string;
  alt: string;
  label: string;
  caption: string;
  width: number;
  height: number;
}) {
  return (
    <figure className="net-zero-evidence">
      <div className="net-zero-evidence__image">
        <Image src={src} alt={alt} width={width} height={height} sizes="(max-width: 900px) 100vw, 60vw" />
      </div>
      <figcaption>
        <span>{label}</span>
        <span>{caption}</span>
      </figcaption>
    </figure>
  );
}

export default function NetZeroBuildPage() {
  return (
    <main className="hackathon-case net-zero-case">
      <header className="hackathon-case__header">
        <Link href="/projects">← Works</Link>
        <p>Case 03 / Net Zero Build</p>
        <Link href="/projects/exercise-snack">Next / Exercise Snack →</Link>
      </header>

      <section className="hackathon-case__section hackathon-case__hero net-zero-hero">
        <div className="hackathon-case__hero-rail">
          <div>
            <p className="hackathon-case__eyebrow">Case study 03</p>
            <h1>Net Zero Build.</h1>
            <p className="hackathon-case__thesis">
              A clearer path through green-building certification.
            </p>
          </div>
          <div className="net-zero-hero__meta">
            <p>Role / Product design · Market / Saudi Arabia · System / LEED-led</p>
            <p>Inherited MVP → scalable organization, project and compliance system.</p>
          </div>
        </div>

        <div className="hackathon-case__hero-content">
          <div className="net-zero-hero__visual">
            <Image
              src="/assets/images/net-zero-portfolio-dashboard.png"
              alt="Net Zero Build organization portfolio dashboard"
              width={854}
              height={666}
              priority
              sizes="(max-width: 900px) 100vw, 60vw"
            />
          </div>
          <p className="net-zero-hero__caption">
            Organization portfolio dashboard · projects, requirements, risk and performance
          </p>
        </div>
      </section>

      <section className="hackathon-case__section net-zero-summary">
        <SectionIntro
          label="Project summary"
          title="Project snapshot"
          note="What I inherited, what I defined, and where the work reached."
        />
        <div className="hackathon-case__content">
          <p className="hackathon-case__lead">
            A Saudi-market product direction for managing green-building certification across organizations, projects and evidence-heavy compliance workflows.
          </p>
          <div className="hackathon-three-columns hackathon-summary__columns">
            <article><p className="hackathon-case__eyebrow">Context</p><p>I joined after an MVP already existed. The next version needed to support Saudi projects, with LEED as the primary compliance system.</p></article>
            <article><p className="hackathon-case__eyebrow">My role</p><p>I shaped the product architecture, core flows and high-fidelity UI while working closely with founders and engineers.</p></article>
            <article><p className="hackathon-case__eyebrow">Scope</p><p>Organization and project navigation, dashboards, scorecards, evidence, contextual AI guidance and reporting.</p></article>
          </div>
        </div>
      </section>

      <section className="hackathon-case__section net-zero-starting-point">
        <SectionIntro
          label="01 / Starting point"
          title="Starting point"
          note="An inherited MVP, a new market and no blank-sheet discovery phase."
        />
        <div className="hackathon-case__content">
          <p className="hackathon-case__lead hackathon-case__lead--large">
            The work began with a product that already existed—but its architecture was not ready for many projects, multiple standards or Saudi-market requirements.
          </p>
          <div className="hackathon-three-columns hackathon-measures net-zero-starting-point__columns">
            <article><p className="hackathon-case__eyebrow">What I inherited</p><p>An MVP, founder and sustainability expertise, certification requirements and early product assumptions.</p></article>
            <article><p className="hackathon-case__eyebrow">What I had to define</p><p>How people move between an organization and its projects—and how compliance, evidence, AI guidance and reports retain that context.</p></article>
            <article><p className="hackathon-case__eyebrow">Research position</p><p>I did not run new user research. Decisions were grounded in the inherited MVP, domain input and existing certification artifacts.</p></article>
          </div>
        </div>
      </section>

      <section className="hackathon-case__section net-zero-architecture">
        <SectionIntro
          label="02 / Information architecture"
          title="Two levels"
          note="The highest-leverage decision was defining where users were—and what every action belonged to."
        />
        <div className="hackathon-case__content">
          <p className="hackathon-case__lead">
            The organization owns the portfolio. Projects contain the certification work. Making that boundary explicit reduced ambiguity across navigation, permissions, reporting and AI context.
          </p>
          <div className="net-zero-model">
            <p className="hackathon-case__eyebrow">Product model</p>
            <div className="net-zero-model__organization">
              <div><span>Organization</span><strong>Portfolio, people and shared reporting</strong></div>
              <span>Global context</span>
            </div>
            <div className="net-zero-model__connector" aria-hidden="true">↓</div>
            <div className="net-zero-model__projects">
              {[
                ["Project A", "Active · LEED / SBC / RSG"],
                ["Project B", "At risk · LEED / SBC / RSG"],
                ["Project C", "Planned · LEED / SBC / RSG"],
              ].map(([title, status]) => (
                <article key={title}><span>Project</span><strong>{title}</strong><p>{status}</p></article>
              ))}
            </div>
            <div className="net-zero-model__layers">
              {architectureLayers.map((layer, index) => (
                <div key={layer}><span>{String(index + 1).padStart(2, "0")}</span><strong>{layer}</strong></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="hackathon-case__section net-zero-project-context">
        <SectionIntro
          label="03 / Product context"
          title="Keep context"
          note="Moving from the portfolio into one project should feel like changing scope—not entering another product."
        />
        <div className="hackathon-case__content">
          <p className="hackathon-case__lead">
            Persistent organization and project cues made the hierarchy visible while each dashboard surfaced the risks, targets and progress relevant to that level.
          </p>
          <EvidenceFigure
            src="/assets/images/net-zero-project-dashboard.png"
            alt="Project dashboard showing progress, risks, certification stages and local requirements"
            width={854}
            height={590}
            label="Project overview"
            caption="Risks · progress · LEED stage compliance · local requirements"
          />
        </div>
      </section>

      <section className="hackathon-case__section net-zero-compliance">
        <SectionIntro
          label="04 / Compliance model"
          title="One source"
          note="Certification rules had to stay understandable without flattening away their detail."
        />
        <div className="hackathon-case__content">
          <p className="hackathon-case__lead">
            I treated the scorecard as a shared product model: each credit connects requirements, point targets, project evidence and local standards in one traceable place.
          </p>
          <div className="net-zero-trace">
            {architectureLayers.map((layer, index) => (
              <div key={layer}><span>{String(index + 1).padStart(2, "0")}</span><strong>{layer}</strong></div>
            ))}
          </div>
          <EvidenceFigure
            src="/assets/images/net-zero-credit-model.png"
            alt="LEED-led scorecard and credit evidence model"
            width={854}
            height={610}
            label="LEED-led model"
            caption="Designed to retain SBC 1001 and project-specific requirements alongside the main scorecard."
          />
        </div>
      </section>

      <section className="hackathon-case__section net-zero-system">
        <div className="hackathon-case__rail">
          <p className="hackathon-case__eyebrow">05 / UI system</p>
          <h2>Use the system</h2>
          <p className="hackathon-case__rail-note">The constraint was not to invent components. It was to make the product coherent through the library.</p>
          <p className="net-zero-system__principle"><span>Design principle</span>Compose carefully before creating anything new.</p>
        </div>
        <div className="hackathon-case__content">
          <p className="hackathon-case__lead">
            Following shadcn closely gave engineers recognizable patterns and gave a complex B2B product a consistent interaction grammar.
          </p>
          <div className="net-zero-system__panel">
            {systemPatterns.map(([number, title, body]) => (
              <article key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="hackathon-case__section net-zero-ai">
        <SectionIntro
          label="06 / Contextual AI"
          title="Assist in place"
          note="AI was most useful when it understood the project, certification and credit already on screen."
        />
        <div className="hackathon-case__content">
          <p className="hackathon-case__lead">
            The assistant concept stayed inside the compliance workflow: generate a LEED-aligned credit template, reference approved submissions and offer to pull related project data instead of starting with an empty chat.
          </p>
          <EvidenceFigure
            src="/assets/images/net-zero-ai-assistant.png"
            alt="Contextual AI assistant working inside a project credit"
            width={854}
            height={590}
            label="Context used"
            caption="Project context → credit guidance → evidence retrieval"
          />
        </div>
      </section>

      <section className="hackathon-case__section net-zero-reporting">
        <SectionIntro
          label="07 / Reporting"
          title="Close the loop"
          note="Certification work needs an auditable output—not only progress inside the application."
        />
        <div className="hackathon-case__content">
          <p className="hackathon-case__lead">
            The reporting centre turns structured project and scorecard data into repeatable compliance outputs, including certification, PIF and category-performance reports.
          </p>
          <EvidenceFigure
            src="/assets/images/net-zero-report-centre.png"
            alt="Report centre with templates, generation status and download history"
            width={854}
            height={570}
            label="Report centre"
            caption="Templates · generation status · downloadable history"
          />
        </div>
      </section>

      <section className="hackathon-case__section net-zero-tradeoffs">
        <SectionIntro
          label="08 / Trade-offs"
          title="Trade-offs"
          note="The choices that kept the new MVP coherent—and the boundaries I would state plainly."
        />
        <div className="hackathon-case__content"><EditorialRows items={tradeoffs} /></div>
      </section>

      <section className="hackathon-case__section net-zero-outcome">
        <SectionIntro
          label="09 / Outcome"
          title="Design readiness"
          note="A complete product direction, with impact claims kept separate from design deliverables."
        />
        <div className="hackathon-case__content">
          <p className="hackathon-case__lead">
            The work turned a fragmented MVP into a coherent high-fidelity system that founders and engineers could discuss, evaluate and build from.
          </p>
          <div className="hackathon-three-columns hackathon-measures net-zero-outcome__columns">
            <article><p className="hackathon-case__eyebrow">Architecture</p><p>Organization, project and compliance layers connected through one clear navigation model.</p></article>
            <article><p className="hackathon-case__eyebrow">System</p><p>Reusable shadcn patterns applied across dashboards, scorecards, evidence and reports.</p></article>
            <article><p className="hackathon-case__eyebrow">Status</p><p>Prototype and design system completed; no production impact claimed.</p></article>
          </div>
          <a className="net-zero-prototype" href="https://www.figma.com/design/PGmXBZ99M5R2CeOjvTV7jL/Green-Building-Certification-Platform?node-id=0-1" target="_blank" rel="noreferrer">
            Open product prototype →
          </a>
        </div>
      </section>

      <section className="hackathon-case__section net-zero-lessons">
        <SectionIntro
          label="10 / Key takeaways"
          title="What I learned"
          note="The strongest takeaway was not a component. It was learning how much product clarity begins before the interface."
        />
        <div className="hackathon-case__content">
          <p className="hackathon-case__lead net-zero-lessons__lead">Architecture and constraints became the design material.</p>
          <EditorialRows items={lessons} />
        </div>
      </section>

      <Link className="hackathon-next" href="/projects/exercise-snack">
        <div><p className="hackathon-case__eyebrow">Next case study</p><h2>Exercise Snack</h2></div>
        <div><p>Short movement, shaped around the workday.</p><span>View project →</span></div>
      </Link>
    </main>
  );
}

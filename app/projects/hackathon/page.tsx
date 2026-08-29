import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HackathonGallery from "@/components/HackathonGallery";

export const metadata: Metadata = {
  title: "Hackathon Platform — Jakub Zakrzewski",
  description:
    "A product design case study about redefining hackathon participation, connecting the event journey and measuring meaningful activation.",
};

const journeySteps = [
  ["01", "Discover", "Website"],
  ["02", "Join", "Registration forms"],
  ["03", "Meet", "Discord"],
  ["04", "Watch", "Twitch"],
  ["05", "Build", "Separate tools"],
  ["06", "Submit", "External forms"],
];

const decisions = [
  {
    title: "Count completed registration—not signup intent.",
    body: "Joining or creating a team became the activation event and the honest definition of an event-ready participant.",
  },
  {
    title: "Make team formation the end of registration.",
    body: "Onboarding led people toward a team instead of treating the initial signup click as the end of the journey.",
  },
  {
    title: "Keep the remaining event journey connected.",
    body: "Rules, schedule, stream and submission stayed close to the actions participants needed to complete.",
  },
];

const lessons = [
  {
    title: "Define activation before optimizing it.",
    body: "The 20% baseline showed that signup volume was not meaningful participation; the product needed a behavior-based definition.",
  },
  {
    title: "Bring engineering into the model early.",
    body: "Daily collaboration exposed constraints before they hardened into expensive interaction decisions.",
  },
  {
    title: "Test uncertainty, not polish.",
    body: "The most useful Maze rounds focused on where people hesitated and what they expected to happen next.",
  },
  {
    title: "Pair behavioral data with moderated follow-up.",
    body: "Instrument the journey, then use short interviews to understand the intent behind the numbers.",
  },
];

function SectionIntro({
  label,
  title,
  note,
}: {
  label: string;
  title: string;
  note?: string;
}) {
  return (
    <div className="hackathon-case__rail">
      <p className="hackathon-case__eyebrow">{label}</p>
      <h2>{title}</h2>
      {note ? <p className="hackathon-case__rail-note">{note}</p> : null}
    </div>
  );
}

function EditorialRows({
  items,
}: {
  items: Array<{ title: string; body: string }>;
}) {
  return (
    <div className="hackathon-editorial-rows">
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

export default function HackathonPage() {
  return (
    <main className="hackathon-case">
      <header className="hackathon-case__header">
        <Link href="/projects">← Works</Link>
        <p>Case 01 / Hackathon platform</p>
        <Link href="/projects">Next / Net Zero Build →</Link>
      </header>

      <section className="hackathon-case__section hackathon-case__hero">
        <div className="hackathon-case__hero-rail">
          <div>
            <p className="hackathon-case__eyebrow">Case study 01</p>
            <h1>Rebuilding the hackathon experience.</h1>
            <p className="hackathon-case__thesis">
              From signup intent to active participation.
            </p>
          </div>
          <dl className="hackathon-case__hero-meta">
            <div><dt>Role</dt><dd>Lead product design</dd></div>
            <div><dt>Tools</dt><dd>Figma, FigJam, Maze</dd></div>
            <div><dt>Timeline</dt><dd>June 2024</dd></div>
          </dl>
        </div>

        <div className="hackathon-case__hero-content">
          <div className="hackathon-case__hero-image">
            <Image
              src="/assets/images/hackathon-case-study-image.webp.webp"
              alt="Four hackathon participants collaborating around a laptop"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 58vw"
            />
          </div>
          <div className="hackathon-case__caption">
            <p className="hackathon-case__eyebrow">Description</p>
            <p>
              A web platform supporting hackathon participants before and during
              events. The redesign brought the most important activities into one
              product and aligned registration with a meaningful activation event:
              joining or creating a team.
            </p>
          </div>
        </div>
      </section>

      <section className="hackathon-case__section">
        <SectionIntro
          label="Project summary"
          title="Project snapshot"
          note="What changed, what I owned, and which product signal guided the redesign."
        />
        <div className="hackathon-case__content hackathon-summary">
          <p className="hackathon-case__lead">
            A redesign that aligned completed registration with meaningful
            participation: joining or creating a team.
          </p>
          <div className="hackathon-three-columns hackathon-summary__columns">
            <article>
              <p className="hackathon-case__eyebrow">Context</p>
              <p>Only around 20% of signup starters completed registration by joining or creating a team.</p>
            </article>
            <article>
              <p className="hackathon-case__eyebrow">My role</p>
              <p>I led the end-to-end product direction, research synthesis, interaction design and component-system thinking.</p>
            </article>
            <article>
              <p className="hackathon-case__eyebrow">Scope</p>
              <p>Event discovery, onboarding, team formation, agenda, streaming, submissions and reusable interface patterns.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="hackathon-case__section">
        <SectionIntro
          label="01 / Activation gap"
          title="Activation gap"
          note="Signup intent was counted as participation, even though the journey was incomplete."
        />
        <div className="hackathon-case__content">
          <p className="hackathon-case__lead hackathon-case__lead--large">
            Only around 20% of people who started signup completed registration by joining or creating a team.
          </p>
          <div className="hackathon-activation__metric">
            <strong>20%</strong>
            <div>
              <p className="hackathon-case__eyebrow">Registration completion</p>
              <p>joined or created a team ÷ started signup</p>
            </div>
          </div>
          <div className="hackathon-two-columns">
            <article>
              <p className="hackathon-case__eyebrow">The definition</p>
              <p>Creating an account showed intent. A participant became meaningfully activated only after joining or creating a team.</p>
            </article>
            <article>
              <p className="hackathon-case__eyebrow">The trade-off</p>
              <p>The participant count became smaller on paper, but more honest, actionable and aligned with submission readiness.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="hackathon-case__section">
        <SectionIntro
          label="02 / Journey gaps"
          title="Journey gaps"
          note="Six products were involved in completing one participation journey."
        />
        <div className="hackathon-case__content">
          <p className="hackathon-case__lead">
            Participants repeatedly lost event context while moving between registration, team formation, coordination, streaming and submission.
          </p>
          <p className="hackathon-case__body-copy">
            Every switch added another place to lose progress, repeat information or wonder what happened next.
          </p>
          <p className="hackathon-case__eyebrow hackathon-journey__label">Where the experience broke apart</p>
          <div className="hackathon-journey">
            {journeySteps.map(([number, action, tool], index) => (
              <div className="hackathon-journey__step" style={{ width: `${100 - index * 13}%` }} key={number}>
                <span>{number}</span><strong>{action}</strong><span>/</span><span>{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hackathon-case__section hackathon-case__section--direction">
        <SectionIntro
          label="03 / The product direction"
          title="One product"
          note="Discovery, team formation, event context and submission stay connected—while community channels remain available only where they add real value."
        />
        <div className="hackathon-case__content hackathon-direction">
          <div className="hackathon-direction__image">
            <Image
              src="/assets/images/event-page.webp.webp"
              alt="Redesigned hackathon event overview keeping essential event actions in one interface"
              fill
              sizes="(max-width: 900px) 100vw, 58vw"
            />
          </div>
          <p className="hackathon-direction__caption">New Native direction — connected actions, preserved community.</p>
        </div>
        <p className="hackathon-direction__principle"><span>Design principle</span>Keep context close to the action.</p>
      </section>

      <section className="hackathon-case__section">
        <SectionIntro
          label="04 / Product decisions"
          title="Three decisions"
          note="The work connected the participation metric to concrete changes in registration and the wider event journey."
        />
        <div className="hackathon-case__content"><EditorialRows items={decisions} /></div>
      </section>

      <section className="hackathon-case__section">
        <SectionIntro
          label="05 / Success criteria"
          title="Measure activation"
          note="The redesign was not shipped, so 20% remains the baseline—not a claimed outcome."
        />
        <div className="hackathon-case__content">
          <p className="hackathon-case__lead hackathon-case__lead--large">
            Success meant increasing completed registration without hiding abandonment behind signup volume.
          </p>
          <div className="hackathon-three-columns hackathon-measures">
            <article><p className="hackathon-case__eyebrow">Primary metric</p><h3>Registration completion</h3><p>Joined or created a team ÷ signup started</p></article>
            <article><p className="hackathon-case__eyebrow">Supporting signal</p><h3>Time to team</h3><p>How long completion took after signup began</p></article>
            <article><p className="hackathon-case__eyebrow">Guardrail</p><h3>Signup abandonment</h3><p>Whether the new definition increased early drop-off</p></article>
          </div>
        </div>
      </section>

      <section className="hackathon-case__section">
        <SectionIntro
          label="06 / Validation"
          title="Test completion"
          note="Maze iterations focused on finding a team and understanding what participants expected after signup."
        />
        <div className="hackathon-case__content">
          <p className="hackathon-case__lead hackathon-case__lead--large">
            Testing examined whether team membership felt like the next meaningful outcome—not another external destination.
          </p>
          <div className="hackathon-three-columns hackathon-validation">
            <article><p className="hackathon-case__eyebrow">Trace the funnel</p><p>Follow signup starters through join or create team and identify where completion broke.</p></article>
            <article><p className="hackathon-case__eyebrow">Test the team path</p><p>Run focused Maze rounds on finding a team, understanding the choice and knowing what happened next.</p></article>
            <article><p className="hackathon-case__eyebrow">Design with the build</p><p>Resolve constraints with engineering while the registration model was still flexible.</p></article>
          </div>
        </div>
      </section>

      <HackathonGallery />

      <section className="hackathon-case__section">
        <SectionIntro
          label="08 / Key takeaways"
          title="What I learned"
          note="The project changed how I define activation, connect journeys and use behavioral evidence."
        />
        <div className="hackathon-case__content"><EditorialRows items={lessons} /></div>
      </section>

      <Link className="hackathon-next" href="/projects">
        <div><p className="hackathon-case__eyebrow">Next case study</p><h2>Net Zero Build</h2></div>
        <div><p>AI-powered compliance MVP</p><span>View project →</span></div>
      </Link>
    </main>
  );
}

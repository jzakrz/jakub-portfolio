import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CaseStudyHeader from "@/components/CaseStudyHeader";
import HackathonGallery from "@/components/HackathonGallery";

export const metadata: Metadata = {
  title: "Hackathon Platform — Jakub Zakrzewski",
  description:
    "A product design case study about redefining hackathon participation, connecting the event journey and measuring meaningful activation.",
};

const journeySteps = [
  ["01", "Discover", "Website"],
  ["02", "Join", "External registration forms"],
  ["03", "Meet", "Discord"],
  ["04", "Watch", "Twitch"],
  ["05", "Build", "Separate tools"],
  ["06", "Submit", "Website"],
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
    title: "Signup is not participation",
    body: "Registration looked like the end of the funnel, but the project showed me that real activation happened when participants moved toward joining or creating a team.",
  },
  {
    title: "Make the next step hard to miss",
    body: "When team formation was separated from signup, it was easy to overlook. Bringing it into onboarding—and keeping it visible afterward—made the intended journey explicit.",
  },
  {
    title: "Unmoderated tests need more context",
    body: "Maze testing taught me that when I wasn’t there to clarify the scenario, task wording became part of the experience being tested. Later rounds improved both the product flow and the way the task was communicated.",
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
      <CaseStudyHeader label="Case 01 / Hackathon platform" />

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
          title="Registration Completion"
          note="Signup intent was counted as participation, even though the journey was incomplete."
        />
        <div className="hackathon-case__content">
          <p className="hackathon-case__lead hackathon-case__lead--compact">
            Only around 20% of people who started signup completed registration by joining or creating a team.
          </p>
          <div className="hackathon-two-columns hackathon-activation__details">
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
          note="At least five products were involved in completing one participation journey."
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
              src="/assets/images/hackathon-case-study-image.webp.webp"
              alt="Hackathon participants collaborating around laptops"
              fill
              sizes="(max-width: 900px) 100vw, 58vw"
            />
          </div>
        </div>
      </section>

      <section className="hackathon-case__section">
        <SectionIntro
          label="04 / Product decisions"
          title="Three decisions"
          note="The work connected the participation metric to concrete changes in registration and the wider event journey."
        />
        <div className="hackathon-case__content"><EditorialRows items={decisions} /></div>
      </section>

      <section className="hackathon-case__section hackathon-validation-section">
        <div className="hackathon-case__rail hackathon-validation__rail">
          <div className="hackathon-validation__intro">
            <p className="hackathon-case__eyebrow">05 / Validation</p>
            <h2>Testing the path to a team</h2>
            <p className="hackathon-case__rail-note">
              The key question was whether participants understood team membership as the natural next step after signing up—and whether they knew how to get there.
            </p>
          </div>
          <div className="hackathon-validation__note">
            <p className="hackathon-case__eyebrow">About the testing</p>
            <p>The study was run remotely in Maze. Some early rounds also helped refine the task wording so participants could understand the scenario without a moderator.</p>
          </div>
        </div>
        <div className="hackathon-case__content hackathon-validation__content">
          <p className="hackathon-case__lead hackathon-case__lead--compact">
            The first prototype included the planned MVP experience, from event discovery and signup to team participation and submission. Unmoderated Maze testing showed one important problem: signing up did not naturally lead participants to joining a team.
          </p>
          <p className="hackathon-validation__bridge">
            That led to the second iteration. I introduced team formation directly into onboarding, giving participants a clear choice to join or create a team, and added a persistent prompt after signup so the action remained visible if they chose to continue without one.
          </p>
          <div className="hackathon-validation__iterations">
            <article>
              <p className="hackathon-case__eyebrow">01 / Initial MVP</p>
              <p>Full redesigned platform tested as one end-to-end experience.</p>
              <p><strong>Finding:</strong> participants could register, but team formation was easy to miss.</p>
            </article>
            <article>
              <p className="hackathon-case__eyebrow">02 / Team-first onboarding</p>
              <p>Added join/create-team choices during onboarding and a persistent team prompt afterward.</p>
              <p><strong>Outcome:</strong> team formation became an explicit part of the event journey rather than a separate action users had to discover.</p>
            </article>
          </div>
        </div>
      </section>

      <HackathonGallery />

      <section className="hackathon-case__section">
        <SectionIntro
          label="07 / Key takeaways"
          title="What I learned"
          note="Three lessons from designing the journey from event signup to active participation."
        />
        <div className="hackathon-case__content"><EditorialRows items={lessons} /></div>
      </section>

      <Link className="hackathon-next" href="/projects/net-zero-build">
        <div><p className="hackathon-case__eyebrow">Next case study</p><h2>Net Zero Build</h2></div>
        <div><p>AI-powered compliance MVP</p><span>View project →</span></div>
      </Link>
    </main>
  );
}

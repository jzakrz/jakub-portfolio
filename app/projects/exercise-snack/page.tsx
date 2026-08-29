import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ExerciseSnackGallery from "@/components/ExerciseSnackGallery";

export const metadata: Metadata = {
  title: "Exercise Snack — Jakub Zakrzewski",
  description:
    "A product design case study about fitting short, personalized movement breaks into the workday and facilitating shared creative ownership in a five-person team.",
};

const habitSteps = [
  ["01", "Notice", "Find a realistic gap between meetings."],
  ["02", "Plan", "Add a short break without losing control."],
  ["03", "Move", "Follow a simple, personalized set."],
  ["04", "Return", "See continuity and make the habit visible."],
];

const framingSteps = [
  ["01", "Notice", "Find a gap between meetings"],
  ["02", "Plan", "Add an active break"],
  ["03", "Start", "Use simple no-equipment movement"],
  ["04", "Adapt", "Edit or ask the trainer"],
  ["05", "Finish", "Record the completed break"],
  ["06", "Return", "See continuity and progress"],
];

const decisions = [
  {
    title: "Calendar-aware, not calendar-controlled.",
    body: "Suggest realistic breaks around meetings while preserving snooze, skip and manual planning.",
  },
  {
    title: "Recommendation with direct control.",
    body: "Let the virtual trainer shape a set, but keep a direct edit and browse path for people who do not want a conversation.",
  },
  {
    title: "Progress without pressure.",
    body: "Use completed breaks, days in a row and visible progress to support continuity—not to turn every movement into a competition.",
  },
];

const lessons = [
  {
    title: "Leadership is facilitation.",
    body: "Being the only experienced designer did not grant unilateral authority. My role was to frame the question, make reasoning visible and help five people commit together.",
  },
  {
    title: "Evidence resolves opinion.",
    body: "When strong creative preferences conflicted, interview patterns and usability evidence gave the team a shared reference—not a winner by seniority.",
  },
  {
    title: "Delegation protects quality.",
    body: "The deadline made solo execution impossible. Giving each designer real ownership let us work in parallel and improve the whole concept.",
  },
  {
    title: "Control builds trust.",
    body: "Personalized recommendations worked best when people could inspect, edit or bypass them. The clearest UI fix was only one expression of that larger principle.",
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

export default function ExerciseSnackPage() {
  return (
    <main className="hackathon-case exercise-case">
      <header className="hackathon-case__header">
        <Link href="/projects">← Works</Link>
        <p>Case 02 / Exercise Snack</p>
        <Link href="/projects/hackathon">Next / Hackathon platform →</Link>
      </header>

      <section className="hackathon-case__section hackathon-case__hero">
        <div className="hackathon-case__hero-rail">
          <div>
            <p className="hackathon-case__eyebrow">Case study 02</p>
            <h1>Exercise Snack.</h1>
            <p className="hackathon-case__thesis">
              Short movement, shaped around the workday.
            </p>
          </div>
          <dl className="hackathon-case__hero-meta">
            <div><dt>Role</dt><dd>Product design &amp; facilitation</dd></div>
            <div><dt>Team</dt><dd>Five designers</dd></div>
            <div><dt>Tools</dt><dd>Figma, FigJam, NotebookLM</dd></div>
          </dl>
        </div>

        <div className="hackathon-case__hero-content">
          <div className="hackathon-case__hero-image exercise-case__hero-image">
            <Image
              src="/assets/images/exercise-snack-hero.png"
              alt="Exercise Snack mobile experience used alongside a fitness watch"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 58vw"
            />
          </div>
          <div className="hackathon-case__caption">
            <p className="hackathon-case__eyebrow">Description</p>
            <p>
              A mobile habit product that turns gaps between meetings into short,
              personalized movement breaks—without asking people to leave the
              rhythm of work.
            </p>
          </div>
        </div>
      </section>

      <section className="hackathon-case__section">
        <SectionIntro
          label="Project summary"
          title="Project snapshot"
          note="The opportunity, my role, and how five designers shared ownership."
        />
        <div className="hackathon-case__content hackathon-summary">
          <p className="hackathon-case__lead">
            A student product concept for helping sedentary workers build a
            repeatable habit of active breaks.
          </p>
          <div className="hackathon-three-columns hackathon-summary__columns">
            <article>
              <p className="hackathon-case__eyebrow">Context</p>
              <p>13 interviews showed that desk workers valued movement, but meetings, time pressure and inconsistency shaped whether a break actually happened.</p>
            </article>
            <article>
              <p className="hackathon-case__eyebrow">My role</p>
              <p>I worked across research, strategy, interaction and prototyping while facilitating decisions in a five-person team with four early-career designers.</p>
            </article>
            <article>
              <p className="hackathon-case__eyebrow">Scope</p>
              <p>Mobile habit design, calendar-aware planning, personalized exercise guidance, progress, gamification and usability testing.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="hackathon-case__section">
        <SectionIntro
          label="01 / Research"
          title="The workday"
          note="Work breaks were shaped by meetings and basic needs—not exercise plans."
        />
        <div className="hackathon-case__content">
          <p className="hackathon-case__lead hackathon-case__lead--large">
            The problem was not knowing movement mattered. It was making movement possible in a day already ruled by meetings.
          </p>
          <div className="hackathon-activation__metric exercise-research__metric">
            <strong>13</strong>
            <div>
              <p className="hackathon-case__eyebrow">Discovery interviews</p>
              <p>7 women / 6 men / mostly hybrid workers</p>
            </div>
          </div>
          <div className="hackathon-two-columns">
            <article>
              <p className="hackathon-case__eyebrow">The pattern</p>
              <p>Participants spent long hours at a desk. Coffee, toilets and meetings created breaks; active recovery rarely did.</p>
            </article>
            <article>
              <p className="hackathon-case__eyebrow">The design response</p>
              <p>Make movement short, safe and flexible enough to fit the workday—rather than asking the workday to fit a workout.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="hackathon-case__section exercise-framing">
        <SectionIntro
          label="02 / Product framing"
          title="The break"
          note="Movement only works when the interruption feels smaller than the resistance."
        />
        <div className="hackathon-case__content">
          <p className="hackathon-case__lead">
            Exercise Snack reframed fitness as a sequence of tiny, repeatable actions inside the workday.
          </p>
          <p className="hackathon-case__body-copy">
            The product had to notice a realistic moment, recommend something useful, preserve control and make returning feel worthwhile.
          </p>
          <p className="hackathon-case__eyebrow exercise-framing__label">What the habit needed to do</p>
          <div className="exercise-framing__grid">
            {framingSteps.map(([number, title, body]) => (
              <article key={number}>
                <p className="hackathon-case__eyebrow">{number}</p>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="hackathon-case__section hackathon-case__section--direction">
        <div className="hackathon-case__rail exercise-direction__rail">
          <p className="hackathon-case__eyebrow">03 / Product direction</p>
          <h2>Fit the workday</h2>
          <p className="hackathon-case__rail-note">
            Calendar-aware planning, short no-equipment movement and personalized guidance make an active break feel possible between meetings—not like another task to manage.
          </p>
          <p className="hackathon-direction__principle exercise-direction__principle"><span>Design principle</span>Any movement is better than none.</p>
        </div>
        <div className="hackathon-case__content hackathon-direction">
          <div className="exercise-habit-loop">
            <p className="hackathon-case__eyebrow">The active-break loop</p>
            <div className="exercise-habit-loop__steps">
              {habitSteps.map(([number, title, body]) => (
                <article key={number}>
                  <p className="hackathon-case__eyebrow">{number}</p>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
          <p className="hackathon-direction__caption">Exercise Snack direction — a small interruption with enough flexibility to become a habit.</p>
        </div>
      </section>

      <section className="hackathon-case__section">
        <SectionIntro
          label="04 / Product decisions"
          title="Three choices"
          note="We reduced the concept to the decisions most likely to make an active break repeatable."
        />
        <div className="hackathon-case__content"><EditorialRows items={decisions} /></div>
      </section>

      <section className="hackathon-case__section exercise-collaboration">
        <SectionIntro
          label="05 / Collaboration"
          title="Shared direction"
          note="Being the only experienced designer did not make me the sole decision-maker."
        />
        <div className="hackathon-case__content">
          <p className="hackathon-case__lead hackathon-case__lead--large">
            For the first time, I worked with four early-career designers whose different skills, backgrounds and interests all shaped the creative direction.
          </p>
          <div className="hackathon-three-columns hackathon-measures exercise-collaboration__columns">
            <article><p className="hackathon-case__eyebrow">Working model</p><h3>Frame the question</h3><p>Bring evidence into the discussion, then commit to a direction together.</p></article>
            <article><p className="hackathon-case__eyebrow">The trade-off</p><h3>Discussion took time</h3><p>There were no unilateral creative decisions, even under a tight deadline.</p></article>
            <article><p className="hackathon-case__eyebrow">What it enabled</p><h3>Distributed ownership</h3><p>We could work in parallel and defend the direction as one team.</p></article>
          </div>
        </div>
      </section>

      <section className="hackathon-case__section">
        <SectionIntro
          label="06 / Success criteria"
          title="Measure the habit"
          note="This was a tested student concept, so these are proposed product measures—not claimed business outcomes."
        />
        <div className="hackathon-case__content">
          <p className="hackathon-case__lead hackathon-case__lead--large">
            Success meant helping people complete active breaks repeatedly without making the workday feel more interruptive.
          </p>
          <div className="hackathon-three-columns hackathon-measures">
            <article><p className="hackathon-case__eyebrow">Primary metric</p><h3>Planned-break completion</h3><p>Completed active breaks ÷ planned breaks</p></article>
            <article><p className="hackathon-case__eyebrow">Supporting signal</p><h3>Repeat active days</h3><p>How often a person returns across the working week</p></article>
            <article><p className="hackathon-case__eyebrow">Guardrail</p><h3>Interruption cost</h3><p>Snoozed or skipped breaks around meetings and deadlines</p></article>
          </div>
        </div>
      </section>

      <section className="hackathon-case__section">
        <SectionIntro
          label="07 / Usability testing"
          title="Test the friction"
          note="Ten desk-based workers completed task scenarios and thought aloud through the high-fidelity prototype."
        />
        <div className="hackathon-case__content">
          <p className="hackathon-case__lead hackathon-case__lead--large">
            Testing showed that the product idea was understandable, but control had to be more explicit than the first concept allowed.
          </p>
          <div className="hackathon-three-columns hackathon-validation">
            <article><p className="hackathon-case__eyebrow">Critical issue 01</p><p>Exercise-swap arrows looked like reorder or selection controls. The action needed a clearer edit affordance.</p></article>
            <article><p className="hackathon-case__eyebrow">Critical issue 02</p><p>Global break settings were difficult to find. People needed a more visible route to duration and notification controls.</p></article>
            <article><p className="hackathon-case__eyebrow">The product signal</p><p>Some participants preferred a browsable exercise list over chat. The concept evolved toward recommendation plus a direct control path.</p></article>
          </div>
        </div>
      </section>

      <ExerciseSnackGallery />

      <section className="hackathon-case__section exercise-lessons">
        <SectionIntro
          label="09 / Key takeaways"
          title="What I learned"
          note="The strongest lesson was not a UI change. It was learning how to lead creative work without owning every decision."
        />
        <div className="hackathon-case__content"><EditorialRows items={lessons} /></div>
      </section>

      <Link className="hackathon-next" href="/projects/hackathon">
        <div><p className="hackathon-case__eyebrow">Next case study</p><h2>Hackathon platform</h2></div>
        <div><p>From signup intent to active participation</p><span>View project →</span></div>
      </Link>
    </main>
  );
}

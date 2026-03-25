import Link from "next/link";

export default function HackathonPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <header className="fixed left-1/2 top-4 z-50 w-[calc(100%-1.5rem)] max-w-6xl -translate-x-1/2 px-6 lg:px-10">
        <div className="flex items-center justify-between rounded-[1.35rem] bg-white/70 px-4 py-3 shadow-sm backdrop-blur">
          <Link
            href="/"
            className="rounded-[0.8rem] bg-black px-5 py-2.5 text-[0.88rem] font-semibold uppercase tracking-[0.08em] text-white transition hover:-translate-y-0.5"
          >
            Back to Portfolio
          </Link>

          <a
            href="#case-study-screens"
            className="rounded-[0.8rem] bg-black px-5 py-2.5 text-[0.88rem] font-semibold uppercase tracking-[0.08em] text-white transition hover:-translate-y-0.5"
          >
            View Screens
          </a>
        </div>
      </header>

      <section className="bg-[#3f3f3f] px-6 pb-16 pt-24 text-white lg:px-10 lg:pb-24 lg:pt-32">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-5xl">
            <div className="mb-6 flex flex-wrap gap-2 lg:mb-8">
              <span className="rounded-full bg-white/10 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-white/80">
                Commercial Project
              </span>
              <span className="rounded-full bg-white/10 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-white/80">
                Event Platform
              </span>
            </div>

            <h1 className="text-[clamp(4rem,9vw,7.8rem)] font-black uppercase leading-[0.88] tracking-[-0.06em] text-white">
              Hackathon Platform
              <br />
              Redesign.
            </h1>

            <p className="mt-8 max-w-4xl text-[1.1rem] leading-[1.4] text-white/85 lg:mt-10 lg:text-[1.4rem]">
              A web platform supporting hackathon participants before and during
              the event. The goal of the redesign was to bring the most
              important user activities into one place instead of redirecting
              users to external tools such as Discord, Twitch, or Google Forms.
              An important part of the project was also simplifying the event
              sign-up and team-joining flow, as well as unifying the interface.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="overflow-hidden rounded-[2.4rem] border border-white/10 bg-black/50 p-8 lg:p-10">
              <div className="mb-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-white/10 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-white/80">
                  Product Design
                </span>
                <span className="rounded-full bg-white/10 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-white/80">
                  UX
                </span>
                <span className="rounded-full bg-white/10 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-white/80">
                  UI
                </span>
                <span className="rounded-full bg-white/10 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-white/80">
                  Prototyping
                </span>
                <span className="rounded-full bg-white/10 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-white/80">
                  User Testing
                </span>
              </div>

              <div className="rounded-[1.8rem] border border-white/10 bg-[#101010] p-5 lg:p-7">
                <div className="mb-5 flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-white/30" />
                  <span className="h-3 w-3 rounded-full bg-white/30" />
                  <span className="h-3 w-3 rounded-full bg-white/30" />
                </div>

                <div className="space-y-4 font-mono text-[1rem] text-white/90 lg:text-[1.25rem]">
                  <p>&gt; Simplify sign-up and onboarding</p>
                  <p>&gt; Bring key actions into one platform</p>
                  <p>&gt; Make joining a team easier</p>
                  <p className="text-white/50">
                    Outcome: clearer flow, fewer drop-offs, less confusion
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[2.4rem] border border-white/10 bg-white/5 p-8 lg:p-10">
              <p className="text-[0.85rem] font-medium uppercase tracking-[0.16em] text-white/55">
                Project Snapshot
              </p>

              <div className="mt-8 grid gap-8">
                <div>
                  <p className="text-[0.85rem] font-medium uppercase tracking-[0.16em] text-white/40">
                    My role
                  </p>
                  <p className="mt-3 text-[1.05rem] leading-[1.45] text-white/88">
                    I was responsible for the entire design process — from
                    research and information architecture, through flow and
                    interface design, to prototyping, user testing, and
                    collaboration with developers.
                  </p>
                </div>

                <div>
                  <p className="text-[0.85rem] font-medium uppercase tracking-[0.16em] text-white/40">
                    Tools
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-full bg-white/10 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-white/80">
                      Figma
                    </span>
                    <span className="rounded-full bg-white/10 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-white/80">
                      FigJam
                    </span>
                    <span className="rounded-full bg-white/10 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-white/80">
                      Maze
                    </span>
                  </div>
                </div>

                <div>
                  <p className="text-[0.85rem] font-medium uppercase tracking-[0.16em] text-white/40">
                    Outcome
                  </p>
                  <p className="mt-3 text-[1.05rem] leading-[1.45] text-white/88">
                    Through iterative prototype testing, I was able to simplify
                    the key user flow and make it more intuitive. In the final
                    version, most participants were able to complete the happy
                    path without getting lost.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="rounded-[2.2rem] border border-black/10 bg-white p-7 lg:p-9">
            <p className="text-[0.85rem] font-medium uppercase tracking-[0.16em] text-black/45">
              Overview
            </p>

            <p className="mt-6 text-[1.15rem] leading-[1.45] tracking-[-0.02em] text-black/90 lg:text-[1.28rem]">
              The redesign aimed to reduce context switching and move the most
              important participant actions into one unified event platform.
            </p>
          </div>

          <div className="rounded-[2.2rem] border border-black/10 bg-white p-7 lg:p-9">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <p className="text-[0.85rem] font-medium uppercase tracking-[0.16em] text-black/45">
                  My Role
                </p>

                <p className="mt-4 text-[1.05rem] leading-[1.5] tracking-[-0.02em] text-black/88 lg:text-[1.18rem]">
                  I was responsible for the full design process — research, IA,
                  flow design, interface design, prototyping, user testing, and
                  collaboration with developers. My previous hackathon
                  organizing experience helped me better understand participant
                  and stakeholder needs.
                </p>
              </div>

              <div>
                <p className="text-[0.85rem] font-medium uppercase tracking-[0.16em] text-black/45">
                  Lessons Learned
                </p>

                <p className="mt-4 text-[1.05rem] leading-[1.5] tracking-[-0.02em] text-black/88 lg:text-[1.18rem]">
                  Some participants did not realize they had to join a team in
                  order to take part in the event. To solve this, I introduced a
                  persistent banner that stayed visible until the team step was
                  completed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-4 lg:px-10 lg:py-6">
        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2.6rem] bg-[#f1cc00] p-8 lg:p-10">
            <p className="text-[0.85rem] font-medium uppercase tracking-[0.16em] text-black/55">
              Key Lesson
            </p>

            <h2 className="mt-5 text-[clamp(2.6rem,4vw,4.5rem)] font-black uppercase leading-[0.92] tracking-[-0.06em] text-black">
              Make the team step impossible to miss.
            </h2>

            <p className="mt-6 max-w-[720px] text-[1.05rem] leading-[1.5] tracking-[-0.02em] text-black/85 lg:text-[1.18rem]">
              If the user skipped joining a team during onboarding, a persistent
              banner remained visible until they joined or created one. This
              made the requirement much clearer and reduced confusion around the
              key event flow.
            </p>
          </div>

          <div className="rounded-[2.6rem] border border-black/10 bg-black p-8 text-white lg:p-10">
            <p className="text-[0.85rem] font-medium uppercase tracking-[0.16em] text-white/45">
              Why it mattered
            </p>

            <div className="mt-8 space-y-5">
              <div className="rounded-[1.6rem] bg-white/6 p-5">
                <p className="text-[0.8rem] uppercase tracking-[0.16em] text-white/45">
                  Before
                </p>
                <p className="mt-2 text-[1.02rem] leading-[1.45] text-white/88">
                  Team participation rules were easy to overlook during
                  onboarding.
                </p>
              </div>

              <div className="rounded-[1.6rem] bg-white/6 p-5">
                <p className="text-[0.8rem] uppercase tracking-[0.16em] text-white/45">
                  After
                </p>
                <p className="mt-2 text-[1.02rem] leading-[1.45] text-white/88">
                  The banner created a continuous reminder until the user
                  completed the required team step.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#3f3f3f] px-6 py-14 text-white lg:px-10 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-[0.85rem] font-medium uppercase tracking-[0.16em] text-white/45">
              Takeaway
            </p>

            <blockquote className="mt-8 text-[clamp(3rem,6.5vw,6.4rem)] font-black leading-[0.92] tracking-[-0.06em] text-white">
              “Most participants could complete the happy path without getting
              lost.”
            </blockquote>
          </div>
        </div>
      </section>

      <section
        id="case-study-screens"
        className="px-6 py-12 lg:px-10 lg:py-16"
      >
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="text-[clamp(2.8rem,5vw,5rem)] font-black uppercase leading-[0.92] tracking-[-0.06em] text-black">
                Screen Scope
              </h2>

              <p className="mt-4 max-w-3xl text-[1.08rem] leading-[1.45] tracking-[-0.02em] text-black/80 lg:text-[1.18rem]">
                Selected screens showing the key user flow — from entering the
                event page, through sign-up and onboarding, to joining a team.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-black px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-white/80">
                Event page
              </span>
              <span className="rounded-full bg-black px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-white/80">
                Sign-up form
              </span>
              <span className="rounded-full bg-black px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-white/80">
                Onboarding
              </span>
              <span className="rounded-full bg-black px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-white/80">
                Matchmaking
              </span>
              <span className="rounded-full bg-black px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-white/80">
                User profile
              </span>
            </div>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-12">
            <div className="rounded-[2.6rem] border border-dashed border-black/20 bg-[#fafafa] p-8 lg:col-span-7 lg:min-h-[420px] lg:p-10">
              <p className="text-[0.85rem] font-medium uppercase tracking-[0.16em] text-black/45">
                Gallery Placeholder 01
              </p>

              <h3 className="mt-5 text-[clamp(2.2rem,3.5vw,3.8rem)] font-black uppercase leading-[0.94] tracking-[-0.06em] text-black">
                Event Page / Sign-up
              </h3>

              <p className="mt-4 max-w-[620px] text-[1rem] leading-[1.5] text-black/72 lg:text-[1.1rem]">
                Reserved for the images you will send later.
              </p>
            </div>

            <div className="rounded-[2.6rem] border border-dashed border-black/20 bg-[#fafafa] p-8 lg:col-span-5 lg:min-h-[420px] lg:p-10">
              <p className="text-[0.85rem] font-medium uppercase tracking-[0.16em] text-black/45">
                Gallery Placeholder 02
              </p>

              <h3 className="mt-5 text-[clamp(2rem,3vw,3.2rem)] font-black uppercase leading-[0.94] tracking-[-0.06em] text-black">
                Onboarding / Matchmaking
              </h3>

              <p className="mt-4 text-[1rem] leading-[1.5] text-black/72 lg:text-[1.1rem]">
                Reserved for onboarding, team-joining, or matchmaking visuals.
              </p>
            </div>

            <div className="rounded-[2.6rem] border border-dashed border-black/20 bg-[#fafafa] p-8 lg:col-span-12 lg:min-h-[280px] lg:p-10">
              <p className="text-[0.85rem] font-medium uppercase tracking-[0.16em] text-black/45">
                Gallery Placeholder 03
              </p>

              <h3 className="mt-5 text-[clamp(2.1rem,3.2vw,3.4rem)] font-black uppercase leading-[0.94] tracking-[-0.06em] text-black">
                User Profile / Supporting Screens
              </h3>

              <p className="mt-4 max-w-[760px] text-[1rem] leading-[1.5] text-black/72 lg:text-[1.1rem]">
                Wide placeholder for the last image group.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
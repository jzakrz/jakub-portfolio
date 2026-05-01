"use client";

import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";


export default function ExerciseSnackPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Header />

      <section className="bg-black px-6 pb-16 pt-24 text-white lg:px-10 lg:pb-24 lg:pt-32">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/"
            className="mb-8 inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/20 bg-[#1f1f1f] px-5 py-2.5 text-[0.88rem] font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#2a2a2a] lg:mb-10"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-4 w-4 stroke-current"
              fill="none"
              strokeWidth="2.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5" />
              <path d="m12 19-7-7 7-7" />
            </svg>
            Back to Portfolio
          </Link>

          <div className="max-w-5xl">
            <div className="mb-6 flex flex-wrap gap-2 lg:mb-8">
              <span className="rounded-full bg-white/10 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-white/80">
                Student Project
              </span>
              <span className="rounded-full bg-white/10 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-white/80">
                Mobile App
              </span>
            </div>

            <h1 className="text-[clamp(3.6rem,9vw,7.2rem)] font-black uppercase leading-[0.88] tracking-[-0.06em] text-white">
              Exercise Snack
            </h1>

            <p className="mt-8 max-w-4xl text-[1.1rem] leading-[1.4] text-white/85 lg:mt-10 lg:text-[1.4rem]">
              A team project developed during postgraduate studies in UX Design /
              Product Design at SWPS University. The app supports people with a
              sedentary workday by introducing short, structured activity breaks.
              Gamification was used to build consistency and make movement habits
              easier to maintain.
            </p>
          </div>

          <div className="mt-12 lg:mt-16 lg:w-[52.5%]">
            <div className="rounded-[2.4rem] border border-white/15 bg-[#262626] p-8 lg:p-10">
              <p className="text-[0.85rem] font-medium uppercase tracking-[0.16em] text-white/70">
                Project Snapshot
              </p>

              <div className="mt-8 grid gap-8">
                <div>
                  <p className="text-[0.85rem] font-medium uppercase tracking-[0.16em] text-white/65">
                    My role
                  </p>
                  <p className="mt-3 text-[1.05rem] leading-[1.45] text-white/94">
                    I worked across the full design process with the team —
                    research, concept shaping, prototyping, and testing. My
                    strongest focus was refining the workout flow and designing
                    interface screens, then iterating based on test feedback.
                  </p>
                </div>

                <div>
                  <p className="text-[0.85rem] font-medium uppercase tracking-[0.16em] text-white/65">
                    Tools
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {["Figma", "FigJam", "Google Meet (Testing)"].map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full bg-white/12 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-white/90"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-[0.85rem] font-medium uppercase tracking-[0.16em] text-white/65">
                    Outcome
                  </p>
                  <p className="mt-3 text-[1.05rem] leading-[1.45] text-white/94">
                    The final concept focused on a complete workout journey: from
                    a suggested exercise set, through the active session, to a
                    closing summary. Users could accept the recommendation,
                    adjust it manually, or use AI-coach support to modify it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f7f5] px-6 py-4 lg:px-10 lg:py-6">
        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2.6rem] bg-[#f1cc00] p-8 lg:p-10">
            <h2 className="mt-5 text-[clamp(2.6rem,4vw,4.5rem)] font-black uppercase leading-[0.92] tracking-[-0.06em] text-black">
              Lessons Learned
            </h2>

            <p className="mt-6 max-w-[720px] text-[1.05rem] leading-[1.5] tracking-[-0.02em] text-black/85 lg:text-[1.18rem]">
              One icon in the workout editor created confusion. We initially used
              a two-arrow symbol, and participants read it as reordering
              exercises instead of editing or replacing one. Switching to a
              pencil icon made the action immediately clearer.
            </p>
          </div>

          <div className="rounded-[2.6rem] border border-black/10 bg-[#f2f1ee] p-8 text-black lg:p-10">
            <p className="text-[0.85rem] font-medium uppercase tracking-[0.16em] text-black/50">
              Why it mattered
            </p>

            <div className="mt-8 space-y-5">
              <div className="rounded-[1.6rem] border border-black/10 bg-[#ebe9e4] p-5">
                <p className="text-[0.8rem] uppercase tracking-[0.16em] text-black/50">
                  Before
                </p>
                <p className="mt-2 text-[1.02rem] leading-[1.45] text-black/80">
                  Participants interpreted the icon as a way to change exercise
                  order.
                </p>
              </div>

              <div className="rounded-[1.6rem] border border-black/10 bg-[#ebe9e4] p-5">
                <p className="text-[0.8rem] uppercase tracking-[0.16em] text-black/50">
                  After
                </p>
                <p className="mt-2 text-[1.02rem] leading-[1.45] text-black/80">
                  The pencil icon signaled edit intent clearly and reduced
                  hesitation in the flow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f7f5] px-6 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="text-[clamp(2.8rem,5vw,5rem)] font-black uppercase leading-[0.92] tracking-[-0.06em] text-black">
                Selected Screens
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center justify-center rounded-full bg-black px-5 py-2.5 text-[0.82rem] font-semibold uppercase tracking-[0.08em] text-white">
                Prototype: available on request
              </span>
            </div>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {[
              {
                caption: "A proposed exercise set tailored to the user",
                src: "https://i.postimg.cc/brJzhYqc/Pre-workout-screen.png",
              },
              {
                caption: "A simple and clear workout session flow",
                src: "https://i.postimg.cc/x8C02j9r/Cwiczenie-nr-1-Intro.png",
              },
              {
                caption: "Workout editing with manual controls",
                src: "https://i.postimg.cc/vTWCkp60/EDYCJA-GODZINY-PRZERWY.png",
              },
              {
                caption: "Chatbot guidance for workout changes",
                src: "https://i.postimg.cc/RhFMBC42/Chatbot-prototype.png",
              },
              {
                caption: "After-session summary",
                src: "https://i.postimg.cc/x8C02jnF/After-session.png",
              },
              {
                caption: "Statistics supporting long-term consistency",
                src: "https://i.postimg.cc/kG4nmMq1/Stats.png",
              },
            ].map((screen) => (
              <div key={screen.caption}>
                <Image
                  src={screen.src}
                  alt={screen.caption}
                  width={900}
                  height={1600}
                  className="h-auto w-full rounded-xl border border-black/10 bg-white sm:rounded-[1.5rem] lg:rounded-[2rem]"
                />
                <p className="mt-4 px-1 text-[0.82rem] font-medium uppercase tracking-[0.16em] text-black/45">
                  {screen.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

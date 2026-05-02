"use client";

import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ExerciseSnackPage() {
  const [isPrototypeOpen, setIsPrototypeOpen] = useState(false);
  const [isPrototypeLoading, setIsPrototypeLoading] = useState(false);

  useEffect(() => {
    if (!isPrototypeOpen) return;

    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    };
  }, [isPrototypeOpen]);

  return (
    <>
      <main className="min-h-screen overflow-x-clip bg-white text-black">
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
              <button
                type="button"
                onClick={() => {
                  setIsPrototypeLoading(true);
                  setIsPrototypeOpen(true);
                }}
                className="hidden cursor-pointer items-center justify-center rounded-full bg-black px-5 py-2.5 text-[0.88rem] font-semibold uppercase tracking-[0.08em] text-white transition-transform hover:scale-[1.03] sm:inline-flex"
              >
                Open Prototype
              </button>
            </div>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
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
              <div key={screen.caption} className="mx-auto w-full max-w-[290px]">
                <div className="rounded-[2.1rem] border border-black/15 bg-[#1c1c1c] p-2.5 shadow-[0_18px_34px_rgba(0,0,0,0.12)]">
                  <div className="rounded-[1.6rem] bg-black p-1.5">
                    <Image
                      src={screen.src}
                      alt={screen.caption}
                      width={430}
                      height={932}
                      className="h-auto w-full rounded-[1.2rem] border border-white/10 bg-white"
                    />
                  </div>
                </div>
                <p className="mt-4 px-1 text-center text-[0.76rem] font-medium uppercase tracking-[0.16em] text-black/45">
                  {screen.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>

      {isPrototypeOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-2"
          onClick={() => setIsPrototypeOpen(false)}
        >
          <div
            className="relative mx-auto w-full max-w-[1320px]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsPrototypeOpen(false)}
              aria-label="Close prototype modal"
              className="absolute -right-2 -top-2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition hover:scale-95"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-5 w-5 stroke-current"
                fill="none"
                strokeWidth="2.2"
                strokeLinecap="round"
              >
                <path d="M6 6l12 12" />
                <path d="M18 6 6 18" />
              </svg>
            </button>

            <div className="overflow-hidden rounded-[1.8rem] border border-black/10 bg-[#f6f6f7] shadow-[0_35px_90px_rgba(0,0,0,0.18)]">
              <div className="border-b border-black/10 bg-[#ececef] px-5 py-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                    <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                    <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                  </div>

                  <div className="flex-1">
                    <div className="mx-auto flex h-10 max-w-[520px] items-center rounded-full border border-black/10 bg-white px-4 text-sm text-black/45">
                      exercise-snack-prototype.fig
                    </div>
                  </div>

                  <div className="w-[72px]" />
                </div>
              </div>

              <div className="bg-white p-3">
                <div className="relative overflow-hidden rounded-[1rem] border border-black/10 bg-white">
                  {isPrototypeLoading && (
                    <div className="pointer-events-none absolute inset-0 z-10">
                      <div className="absolute left-1/2 top-6 flex -translate-x-1/2 flex-col items-center gap-3">
                        <div className="flex h-12 w-12 animate-bounce items-center justify-center rounded-full border border-black/10 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
                          <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            className="h-5 w-5 stroke-current text-black"
                            fill="none"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M12 19V5" />
                            <path d="M6 11l6-6 6 6" />
                          </svg>
                        </div>

                        <div className="figma-loader">Loading</div>
                      </div>
                    </div>
                  )}

                  <iframe
                    style={{ border: "none" }}
                    width="100%"
                    height="900"
                    src="https://embed.figma.com/proto/x0n44iyTYL4Yj1dFpHNB4h/Exercise-Snack--Student-Project-?node-id=1491-21114&p=f&viewport=-4411%2C-42%2C0.13&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1491%3A21356&page-id=5%3A2&embed-host=share"
                    allowFullScreen
                    onLoad={() => {
                      setTimeout(() => {
                        setIsPrototypeLoading(false);
                      }, 4000);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
        .figma-loader {
          width: fit-content;
          font-size: 40px;
          line-height: 1.5;
          font-family: system-ui, sans-serif;
          font-weight: 700;
          text-transform: uppercase;
          color: transparent;
          -webkit-text-stroke: 1px #000;
          background:
            radial-gradient(
                1.13em at 50% 1.6em,
                #000 99%,
                transparent 101%
              )
              calc(50% - 1.6em) 0 / 3.2em 100% text,
            radial-gradient(
                1.13em at 50% -0.8em,
                transparent 99%,
                #000 101%
              )
              50% 0.8em / 3.2em 100% repeat-x text;
          -webkit-background-clip: text;
          background-clip: text;
          animation: figmaLoaderWave 2s linear infinite;
        }

        @keyframes figmaLoaderWave {
          to {
            background-position:
              calc(50% + 1.6em) 0,
              calc(50% + 3.2em) 0.8em;
          }
        }
      `}</style>
    </>
  );
}

"use client";

import Header from "@/components/Header";
import Link from "next/link";
import { useState } from "react";

export default function HackathonPage() {
  const [isPrototypeOpen, setIsPrototypeOpen] = useState(false);
  const [isPrototypeLoading, setIsPrototypeLoading] = useState(false);

  return (
    <>
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
              <div className="overflow-hidden rounded-[2.4rem] border border-white/15 bg-[#262626] p-8 lg:p-10">
                <div className="mb-6 flex flex-wrap gap-2">
                  <span className="rounded-full bg-white/12 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-white/90">
                    Product Design
                  </span>
                  <span className="rounded-full bg-white/12 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-white/90">
                    UX
                  </span>
                  <span className="rounded-full bg-white/12 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-white/90">
                    UI
                  </span>
                  <span className="rounded-full bg-white/12 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-white/90">
                    Prototyping
                  </span>
                  <span className="rounded-full bg-white/12 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-white/90">
                    User Testing
                  </span>
                </div>

                <div className="rounded-[1.8rem] border border-white/15 bg-[#171717] p-5 lg:p-7">
                  <div className="mb-5 flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-white/30" />
                    <span className="h-3 w-3 rounded-full bg-white/30" />
                    <span className="h-3 w-3 rounded-full bg-white/30" />
                  </div>

                  <div className="space-y-4 font-mono text-[1rem] text-white/95 lg:text-[1.25rem]">
                    <p>&gt; Simplify sign-up and onboarding</p>
                    <p>&gt; Bring key actions into one platform</p>
                    <p>&gt; Make joining a team easier</p>
                    <p className="text-white/70">
                      Outcome: clearer flow, fewer drop-offs, less confusion
                    </p>
                  </div>
                </div>
              </div>

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
                      I was responsible for the entire design process — from
                      research and information architecture, through flow and
                      interface design, to prototyping, user testing, and
                      collaboration with developers.
                    </p>
                  </div>

                  <div>
                    <p className="text-[0.85rem] font-medium uppercase tracking-[0.16em] text-white/65">
                      Tools
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="rounded-full bg-white/12 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-white/90">
                        Figma
                      </span>
                      <span className="rounded-full bg-white/12 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-white/90">
                        FigJam
                      </span>
                      <span className="rounded-full bg-white/12 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-white/90">
                        Maze
                      </span>
                    </div>
                  </div>

                  <div>
                    <p className="text-[0.85rem] font-medium uppercase tracking-[0.16em] text-white/65">
                      Outcome
                    </p>
                    <p className="mt-3 text-[1.05rem] leading-[1.45] text-white/94">
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

        <section className="px-6 py-4 lg:px-10 lg:py-6">
          <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[2.6rem] bg-[#f1cc00] p-8 lg:p-10">
             

              <h2 className="mt-5 text-[clamp(2.6rem,4vw,4.5rem)] font-black uppercase leading-[0.92] tracking-[-0.06em] text-black">
                Lessons Learned
              </h2>

              <p className="mt-6 max-w-[720px] text-[1.05rem] leading-[1.5] tracking-[-0.02em] text-black/85 lg:text-[1.18rem]">
                Some participants did not realize they had to join a team in
                    order to take part in the event. To solve this, I introduced a
                    persistent banner that stayed visible until the team step was
                    completed.
              </p>
            </div>

            <div className="rounded-[2.6rem] border border-white/15 bg-[#262626] p-8 text-white lg:p-10">
              <p className="text-[0.85rem] font-medium uppercase tracking-[0.16em] text-white/70">
                Why it mattered
              </p>

              <div className="mt-8 space-y-5">
                <div className="rounded-[1.6rem] border border-white/12 bg-[#303030] p-5">
                  <p className="text-[0.8rem] uppercase tracking-[0.16em] text-white/70">
                    Before
                  </p>
                  <p className="mt-2 text-[1.02rem] leading-[1.45] text-white/94">
                    Team participation rules were easy to overlook during
                    onboarding.
                  </p>
                </div>

                <div className="rounded-[1.6rem] border border-white/12 bg-[#303030] p-5">
                  <p className="text-[0.8rem] uppercase tracking-[0.16em] text-white/70">
                    After
                  </p>
                  <p className="mt-2 text-[1.02rem] leading-[1.45] text-white/94">
                    The banner created a continuous reminder until the user
                    completed the required team step.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-12 lg:px-10 lg:py-16">
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

              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsPrototypeLoading(true);
                    setIsPrototypeOpen(true);
                  }}
                  className="inline-flex cursor-pointer items-center justify-center rounded-full bg-black px-5 py-2.5 text-[0.88rem] font-semibold uppercase tracking-[0.08em] text-white transition-transform hover:scale-[1.03]"
                >
                  Open Prototype
                </button>
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
                hackathon-platform-prototype.fig
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
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] animate-bounce">
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
      src="https://embed.figma.com/proto/ZktGQu1JSiKVIstVvhbdU0/Hackathon-Platform-Redesign?page-id=5116%3A37624&node-id=5116-44646&p=f&viewport=1802%2C-3302%2C0.55&scaling=scale-down&content-scaling=fixed&starting-point-node-id=5116%3A44646&embed-host=share"
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

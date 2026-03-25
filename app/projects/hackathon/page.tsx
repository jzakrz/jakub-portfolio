export default function HackathonPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="bg-black px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/60">
            Commercial Project · Event Platform
          </p>

          <h1 className="mt-6 text-5xl font-black uppercase leading-none tracking-tight lg:text-7xl">
            Hackathon
            <br />
            Platform
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-white/80 lg:text-xl">
            A web platform supporting hackathon participants before and during the
            event. The redesign focused on simplifying onboarding, reducing context
            switching, and making team joining easier.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-black/10 bg-white p-8">
              <h2 className="text-2xl font-bold">My Role</h2>
              <p className="mt-4 leading-relaxed text-black/70">
                I was responsible for the full design process: research,
                information architecture, flows, interface design, prototyping,
                testing, and collaboration with developers.
              </p>
            </article>

            <article className="rounded-3xl border border-black/10 bg-white p-8">
              <h2 className="text-2xl font-bold">Outcome</h2>
              <p className="mt-4 leading-relaxed text-black/70">
                The final flow was clearer and easier to complete, helping
                participants move through sign-up and team joining with less
                confusion.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
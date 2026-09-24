import Image from "next/image";

const sections = [
  {
    title: "How it works",
    description:
      "Comainter reads the issue, compares it with repository history, checks the linked pull request, and verifies whether the change actually addresses the reported problem. It looks at code, docs, standards, previous issues, and project conventions before a maintainer spends time on review.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    alt: "Dashboard showing technical analysis and review signals",
  },
  {
    title: "What you can connect",
    description:
      "Connect the sources that define how your project works: repositories, issues, pull requests, documentation, contribution rules, changelogs, release notes, architecture notes, and internal standards. Comainter uses that context to judge whether a report or fix matches the actual codebase.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    alt: "Infrastructure servers representing connected developer systems",
  },
  {
    title: "A response that answers the question",
    description:
      "Comainter does not just summarize a thread. It responds like a careful maintainer: what the user is asking, whether the issue is valid, whether the pull request solves it, what evidence is missing, and what should happen next.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    alt: "Developer screen with code and technical review context",
  },
];

export default function FeatureSection() {
  return (
    <section id="features" className="bg-white px-4 py-24 text-black sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
            Validate the work before it reaches review.
          </h2>
          <p className="mt-5 text-base leading-7 text-zinc-600 sm:text-lg">
            Comainter turns repository context into a clear decision about the
            issue, the pull request, and the next step for the maintainer.
          </p>
        </div>

        <div className="mt-20 space-y-24">
          {sections.map((section, index) => {
            const reverse = index % 2 === 1;

            return (
              <article
                key={section.title}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <div className={reverse ? "lg:order-2" : undefined}>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-zinc-200 bg-zinc-100 shadow-sm shadow-zinc-950/[0.03]">
                    <Image
                      src={section.image}
                      alt={section.alt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className={reverse ? "lg:order-1" : undefined}>
                  <h3 className="text-2xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
                    {section.title}
                  </h3>
                  <p className="mt-5 text-base leading-8 text-zinc-600">
                    {section.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

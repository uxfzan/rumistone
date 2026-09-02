import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight, Square, Mountain } from "lucide-react";
import { PageHero, QuoteCTA, SITE_URL, SiteShell } from "@/components/site/SiteLayout";
import galFlat from "@/assets/gallery-flat.jpg";
import galUpright from "@/assets/gallery-upright.jpg";

export const Route = createFileRoute("/headstones-markers")({
  head: () => ({
    meta: [
      { title: "Headstones, Markers & Monuments | Bay Area | Rumi Stone" },
      {
        name: "description",
        content:
          "Custom flat markers and upright monuments in premium granite. Personalized designs, honest pricing, delivered to cemeteries across California.",
      },
      { property: "og:title", content: "Headstones, Markers & Monuments | Bay Area | Rumi Stone" },
      { property: "og:description", content: "Two beautiful ways to remember — crafted, engraved, and delivered with care." },
      { property: "og:url", content: `${SITE_URL}/headstones-markers` },
      { property: "og:image", content: `${SITE_URL}${galUpright}` },
      { name: "twitter:image", content: `${SITE_URL}${galUpright}` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/headstones-markers` }],
  }),
  component: HeadstonesPage,
});

const products = [
  {
    icon: Square,
    title: "Flat Markers",
    img: galFlat,
    body: "Sleek, ground-level memorials in lasting granite. A timeless, understated tribute.",
    features: ["Premium granite colors", "Custom engraving & artwork", "Meets all cemetery requirements"],
  },
  {
    icon: Mountain,
    title: "Upright Monuments",
    img: galUpright,
    body: "Standing headstones that make a lasting statement. Fully personalized, beautifully finished.",
    features: ["Single & companion designs", "Custom shapes, etchings & lettering", "Premium granite, expertly polished"],
  },
];

function HeadstonesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Headstones & Markers"
        title="Headstones & Grave Markers,"
        accent="Made for Your Loved One"
        subtitle="Two beautiful ways to remember — crafted, engraved, and delivered with care."
      />

      <section className="container-px mx-auto max-w-[1600px] py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-2">
          {products.map(({ icon: Icon, title, img, body, features }, i) => (
            <article
              key={title}
              data-reveal
              data-reveal-delay={i * 100}
              className="reveal surface-card surface-card-hover group overflow-hidden rounded-2xl"
            >
              <div className="img-zoom aspect-[4/3] overflow-hidden">
                <img src={img} alt={`${title} — Rumi Stone`} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="p-8">
                <div className="mb-4 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-[color:var(--gold)]/25 bg-white text-[color:var(--gold)]">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <h2 className="text-[1.75rem] text-foreground">{title}</h2>
                </div>
                <p className="text-[15px] leading-[1.7] text-muted-foreground">{body}</p>
                <ul className="mt-6 space-y-2.5">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[14.5px] text-foreground/80">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[color:var(--gold)]/12 text-[color:var(--gold)]">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/quote"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-background transition-all hover:-translate-y-0.5"
                >
                  Get a Free Quote <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <QuoteCTA heading="Not Sure Which Is Right? We'll Help" body="We'll walk you through the options, cemetery requirements, and pricing — with no pressure." />
    </SiteShell>
  );
}

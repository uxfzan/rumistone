import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { PageHero, QuoteCTA, SITE_URL, SiteShell } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews | What Families Say About Rumi Stone" },
      {
        name: "description",
        content:
          "Read what California families say about their memorials from Rumi Stone — honest pricing, caring service, and beautiful craftsmanship.",
      },
      { property: "og:title", content: "Reviews | What Families Say About Rumi Stone" },
      { property: "og:description", content: "85% of our work comes from returning families and referrals." },
      { property: "og:url", content: `${SITE_URL}/reviews` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/reviews` }],
  }),
  component: ReviewsPage,
});

const testimonials = [
  { name: "Andrea Torres", city: "Hayward, CA", quote: "My family hired Rumi Stone for my father's headstone and the service was exceptional. They answered every question and helped us create a memorial that perfectly honored his life." },
  { name: "Michael Chen", city: "San Jose, CA", quote: "From the first phone call we felt cared for. The design was beautiful and the installation was handled with such respect. Pricing was a fraction of what the cemetery quoted." },
  { name: "Patricia Alvarez", city: "Sacramento, CA", quote: "The craftsmanship is breathtaking. Every detail of the engraving was exactly as we imagined. A true family business that treats you like family." },
];

function ReviewsPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Family Stories"
        title="Trusted by"
        accent="California Families"
        subtitle="85% of our work comes from returning families and referrals."
      />

      <section className="container-px mx-auto max-w-[1600px] py-16 md:py-24">
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              data-reveal
              data-reveal-delay={i * 100}
              className="reveal surface-card surface-card-hover relative flex h-full flex-col rounded-2xl p-8"
            >
              <span className="absolute -top-4 left-8 font-serif text-6xl italic leading-none text-[color:var(--gold)]/40">"</span>
              <div className="flex gap-1 text-[color:var(--gold)]">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <blockquote className="mt-5 flex-1 font-serif text-[1.15rem] leading-[1.6] text-foreground/85">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-5">
                <div className="text-[14px] font-semibold tracking-tight text-foreground">{t.name}</div>
                <div className="mt-0.5 text-[10px] uppercase tracking-[0.24em] text-muted-foreground">{t.city}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <QuoteCTA heading="Join the Families We've Helped" body="Start with a free, no-pressure quote today." />
    </SiteShell>
  );
}

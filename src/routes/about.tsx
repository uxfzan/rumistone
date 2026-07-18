import { createFileRoute } from "@tanstack/react-router";
import { Heart, Sparkles, Shield } from "lucide-react";
import { PageHero, QuoteCTA, SITE_URL, SectionHeader, SiteShell } from "@/components/site/SiteLayout";
import aboutImg from "@/assets/about-craftsman.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Rumi Stone | Custom Memorials Crafted with Care" },
      {
        name: "description",
        content:
          "Rumi Stone creates affordable, personalized headstones and monuments across California. Learn our story and the care behind every memorial we craft.",
      },
      { property: "og:title", content: "About Rumi Stone | Custom Memorials Crafted with Care" },
      { property: "og:description", content: "A decade of helping California families honor the people they love." },
      { property: "og:url", content: `${SITE_URL}/about` },
      { property: "og:image", content: `${SITE_URL}${aboutImg}` },
      { name: "twitter:image", content: `${SITE_URL}${aboutImg}` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/about` }],
  }),
  component: AboutPage,
});

const values = [
  { icon: Heart, title: "Compassion First", body: "We serve families in tender moments — with patience and empathy." },
  { icon: Shield, title: "Honest Value", body: "Fair pricing, always. No pressure, no showroom overhead." },
  { icon: Sparkles, title: "Lasting Quality", body: "Premium granite, expert craftsmanship, memorials made to endure." },
];

function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Our Story"
        title="Crafting Memories in"
        accent="Stone"
        subtitle="A decade of helping California families honor the people they love."
      />

      <section className="container-px mx-auto grid max-w-6xl items-center gap-12 py-16 md:py-24 lg:grid-cols-2 lg:gap-16">
        <div data-reveal className="reveal img-zoom overflow-hidden rounded-2xl shadow-[var(--shadow-elegant)]">
          <img src={aboutImg} alt="Rumi Stone craftsman engraving a granite memorial" width={1400} height={1000} className="h-full w-full object-cover" loading="lazy" />
        </div>
        <div data-reveal data-reveal-delay="120" className="reveal">
          <div className="mb-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-[color:var(--gold)]">
            <span className="inline-block h-px w-10 bg-[color:var(--gold)]" /> Our Story
          </div>
          <h2 className="text-foreground">
            A family business, built on <span className="italic text-gradient-gold">care</span>.
          </h2>
          <div className="mt-6 space-y-5 text-[15.5px] leading-[1.75] text-foreground/75">
            <p>
              Rumi Stone was founded by Sami with one belief: every family deserves a beautiful memorial without the traditional markup.
            </p>
            <p>
              For over a decade, we've served California families with personalized headstones and monuments — crafted in premium granite and delivered with the guidance families need in tender moments.
            </p>
            <p>
              We don't run a showroom. That means lower overhead — and honest pricing passed straight to you.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--cream)] py-24 md:py-32">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeader eyebrow="What Guides Us" title="Our" accent="Values" />
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {values.map(({ icon: Icon, title, body }, i) => (
              <div key={title} data-reveal data-reveal-delay={i * 80} className="reveal surface-card surface-card-hover rounded-2xl p-8">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl border border-[color:var(--gold)]/25 bg-white text-[color:var(--gold)] shadow-sm">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="text-[1.35rem] text-foreground">{title}</h3>
                <p className="mt-3 text-[14.5px] leading-[1.7] text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-6xl py-20">
        <div className="grid grid-cols-1 gap-6 rounded-3xl border border-border bg-white/70 p-8 shadow-[var(--shadow-soft)] backdrop-blur md:grid-cols-3">
          {[
            ["10+", "Years"],
            ["1,000+", "Memorials"],
            ["85%", "Returning & Referral Families"],
          ].map(([k, v]) => (
            <div key={v} className="text-center">
              <div className="font-serif text-4xl italic text-gradient-gold">{k}</div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">{v}</div>
            </div>
          ))}
        </div>
      </section>

      <QuoteCTA heading="We'd Be Honored to Help" body="Reach out and let's talk about what would honor your loved one best." />
    </SiteShell>
  );
}

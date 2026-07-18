import { createFileRoute } from "@tanstack/react-router";
import { PhoneCall, PencilRuler, Hammer, Truck } from "lucide-react";
import { PageHero, QuoteCTA, SITE_URL, SectionHeader, SiteShell } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works | Ordering a Headstone Made Simple | Rumi Stone" },
      {
        name: "description",
        content:
          "Ordering a memorial is simple with Rumi Stone. Four easy steps — from free quote to cemetery installation across California.",
      },
      { property: "og:title", content: "How It Works | Ordering a Headstone Made Simple | Rumi Stone" },
      { property: "og:description", content: "Four caring steps from first call to final installation." },
      { property: "og:url", content: `${SITE_URL}/how-it-works` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/how-it-works` }],
  }),
  component: HowPage,
});

const steps = [
  { icon: PhoneCall, title: "Reach Out", body: "Call or request a free quote. Tell us what you need — cemetery, memorial type, any ideas." },
  { icon: PencilRuler, title: "Design Together", body: "We create a custom design and share a proof for your approval — no obligation." },
  { icon: Hammer, title: "We Craft It", body: "Your memorial is expertly cut, engraved, and finished in premium granite." },
  { icon: Truck, title: "Delivery & Install", body: "We handle delivery and installation at the cemetery, statewide across California." },
];

function HowPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Our Process"
        title="Simple, Guided,"
        accent="Stress-Free"
        subtitle="Four caring steps from first call to final installation."
      />

      <section className="container-px mx-auto max-w-7xl py-16 md:py-24">
        <SectionHeader eyebrow="Step by Step" title="How It" accent="Works" />
        <div className="mt-16 grid gap-9 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, body }, i) => (
            <div
              key={title}
              data-reveal
              data-reveal-delay={i * 80}
              className="reveal surface-card surface-card-hover relative rounded-2xl p-8 pt-10"
            >
              <div className="absolute -top-5 left-8 grid h-11 w-11 place-items-center rounded-full bg-[linear-gradient(135deg,oklch(0.6_0.11_235),oklch(0.42_0.1_248))] font-serif text-lg text-white shadow-[0_8px_20px_-8px_oklch(0.42_0.1_248/0.5)] ring-4 ring-background">
                {i + 1}
              </div>
              <Icon className="h-7 w-7 text-[color:var(--gold)]" strokeWidth={1.6} />
              <h3 className="mt-4 text-[1.25rem] text-foreground">{title}</h3>
              <p className="mt-2 text-[14.5px] leading-[1.7] text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <QuoteCTA heading="Ready to Begin" body="Start with a free quote — we'll guide you through every step." />
    </SiteShell>
  );
}

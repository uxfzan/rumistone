import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { PageHero, PHONE, QuoteCTA, SITE_URL, SiteShell } from "@/components/site/SiteLayout";

const faqs = [
  { q: "How much does a headstone cost?", a: "Prices vary by size, stone, and design. Because we're website-only, we pass significant savings on to you compared to traditional retailers. Request a free quote for an exact price." },
  { q: "How long does it take?", a: "Most memorials are completed within 4–8 weeks after design approval. We can expedite urgent requests when possible." },
  { q: "Do you deliver to my cemetery?", a: "Yes — we serve all cemeteries in the Bay Area and ship statewide across California." },
  { q: "Can I fully customize the design?", a: "Absolutely. Choose your stone, shape, lettering, artwork, and etchings — we'll bring your vision to life." },
  { q: "Do you handle installation?", a: "Yes. We manage delivery and installation at the cemetery, including permits and foundation work." },
  { q: "What granite colors are available?", a: "We offer premium colors including Absolute Black, Standard Gray, India Red, Bahama Blue, Autumn Rose, Blue Pearl, Paradiso, Himalayan Blue, and Tropical Green — with more options available on request." },
  { q: "How do I start?", a: `Call ${PHONE} or request a free quote online. We'll walk you through everything.` },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Headstone FAQ | Pricing, Delivery & Design | Rumi Stone" },
      {
        name: "description",
        content:
          "Answers to common questions about ordering headstones and markers — pricing, timelines, delivery, cemetery rules, and custom design.",
      },
      { property: "og:title", content: "Headstone FAQ | Pricing, Delivery & Design | Rumi Stone" },
      { property: "og:description", content: "Common questions about ordering a memorial with Rumi Stone." },
      { property: "og:url", content: `${SITE_URL}/faq` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/faq` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FAQPage,
});

function FAQPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <SiteShell>
      <PageHero
        eyebrow="Questions"
        title="Frequently Asked"
        accent="Questions"
        subtitle="Everything you need to know about ordering a memorial with Rumi Stone."
      />

      <section className="container-px mx-auto max-w-4xl py-16 md:py-20">
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)]">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className={i > 0 ? "border-t border-border" : ""}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left transition-colors hover:bg-black/[0.02] md:px-8"
                >
                  <span className="font-serif text-[1.15rem] text-foreground md:text-[1.3rem]">{f.q}</span>
                  <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border bg-white transition-transform duration-500 ${isOpen ? "rotate-180 border-[color:var(--gold)]/50 bg-[color:var(--gold)]/10" : ""}`}>
                    <ChevronDown className="h-4 w-4 text-[color:var(--gold)]" />
                  </span>
                </button>
                <div className={`grid overflow-hidden transition-[grid-template-rows] duration-500 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="min-h-0">
                    <div className="px-6 pb-6 pr-16 text-[14.5px] leading-[1.75] text-muted-foreground md:px-8 md:text-[15.5px]">
                      {f.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <QuoteCTA heading="Still Have Questions" body="We're happy to talk. Reach out any time." />
    </SiteShell>
  );
}

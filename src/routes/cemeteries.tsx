import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronDown, MapPin } from "lucide-react";
import { PageHero, SITE_URL, SiteShell } from "@/components/site/SiteLayout";

const serviceAreas = [
  "Alameda County",
  "Contra Costa County",
  "Marin County",
  "San Mateo County",
  "Santa Clara County",
  "Solano County",
  "Sonoma County",
];

export const Route = createFileRoute("/cemeteries")({
  head: () => ({
    meta: [
      { title: "Bay Area Cemeteries We Serve | Rumi Stone" },
      {
        name: "description",
        content: "Rumi Stone serves cemeteries across seven Bay Area counties with custom headstones and grave markers.",
      },
      { property: "og:title", content: "Bay Area Cemeteries We Serve | Rumi Stone" },
      { property: "og:description", content: "Memorial service areas across Alameda, Contra Costa, Marin, San Mateo, Santa Clara, Solano, and Sonoma counties." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/cemeteries` }],
  }),
  component: CemeteriesPage,
});

function CemeteriesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Cemeteries"
        title="Bay Area"
        accent="Service Areas"
        subtitle="We help families navigate cemetery requirements throughout the Bay Area with patient, personal guidance."
      />
      <section className="container-px mx-auto max-w-4xl py-20 md:py-28">
        <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-[var(--shadow-elegant)]">
          {serviceAreas.map((county) => (
            <details key={county} className="group border-b border-border last:border-b-0">
              <summary className="grid cursor-pointer list-none grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 px-5 py-5 text-[17px] font-medium text-foreground transition-colors hover:bg-[color:var(--cream)] sm:px-7 sm:text-[19px]">
                <MapPin className="h-5 w-5 shrink-0 text-[color:var(--gold)]" />
                <span className="min-w-0">{county}</span>
                <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <div className="px-5 pb-6 pl-14 text-[15px] leading-7 text-muted-foreground sm:px-7 sm:pl-16">
                We serve cemeteries throughout {county}. Contact us to confirm requirements and discuss your memorial.
                <Link to="/quote" className="ml-1 font-semibold text-[color:var(--gold)] hover:underline">
                  Get a free quote.
                </Link>
              </div>
            </details>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
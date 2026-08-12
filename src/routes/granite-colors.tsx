import { createFileRoute } from "@tanstack/react-router";
import { PageHero, QuoteCTA, SITE_URL, SiteShell } from "@/components/site/SiteLayout";
import gPicasso from "@/assets/granite-picasso-green.jpg";
import gGalaxy from "@/assets/granite-galaxy-black.jpg";
import gBahama from "@/assets/granite-bahama-blue.jpg";
import gIndia from "@/assets/granite-india-red.jpg";
import gGray from "@/assets/granite-gray.jpg";
import gHimalayan from "@/assets/Himalyan.webp";
import gParadiso from "@/assets/Paradiso Granite.webp";
import gBluePearl from "@/assets/Blue Pearl Granite.webp";
import gAutumnRose from "@/assets/Autumn Rose.webp";

export const Route = createFileRoute("/granite-colors")({
  head: () => ({
    meta: [
      { title: "Granite Colors for Headstones & Markers | Rumi Stone" },
      {
        name: "description",
        content:
          "Explore premium granite colors for your memorial — Black, Blue Pearl, India Red, Galaxy Black and more. Find the perfect stone with Rumi Stone.",
      },
      { property: "og:title", content: "Granite Colors for Headstones & Markers | Rumi Stone" },
      { property: "og:description", content: "Premium, weather-resistant granite colors that last for generations." },
      { property: "og:url", content: `${SITE_URL}/granite-colors` },
      { property: "og:image", content: `${SITE_URL}${gGalaxy}` },
      { name: "twitter:image", content: `${SITE_URL}${gGalaxy}` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/granite-colors` }],
  }),
  component: GranitePage,
});

const granites = [
  { name: "Absolute Black Granite", img: gGalaxy, desc: "A timeless favorite in California, Absolute Black Granite offers unmatched contrast and clarity for engraving. Its deep, polished finish makes portraits, lettering, and artwork stand out beautifully." },
  { name: "India Red Granite", img: gIndia, desc: "India Red Granite delivers a bold, vibrant memorial with rich red tones that symbolize strength and love. Families choose this color for its striking appearance and long-lasting durability." },
  { name: "Bahama Blue Granite", img: gBahama, desc: "Bahama Blue Granite features elegant blue and lavender waves that create a premium, artistic memorial. This color is ideal for families seeking a unique and visually stunning tribute." },
  { name: "Autumn Rose (Pink) Granite", img: gAutumnRose, desc: "Autumn Rose Granite offers warm pink tones that bring softness and beauty to any headstone or marker. It's a popular choice for flat markers and traditional memorial designs." },
  { name: "Standard Gray Granite", img: gGray, desc: "Gray Granite is the most traditional and widely accepted memorial stone in California cemeteries. Its clean, classic look and excellent durability make it a reliable choice for any style of engraving." },
  { name: "Blue Pearl Granite", img: gBluePearl, desc: "Blue Pearl Granite shines with metallic blue crystals that reflect light beautifully. This premium stone is perfect for upright monuments and modern memorial designs." },
  { name: "Paradiso Granite", img: gParadiso, desc: "Paradiso Granite showcases flowing purple and gray patterns that create a sophisticated, artistic memorial. Its natural movement makes every stone truly one-of-a-kind." },
  { name: "Himalayan Blue Granite", img: gHimalayan, desc: "Himalayan Blue Granite blends blue, brown, and gray tones in a dramatic wave pattern. Families choose this color for its bold character and excellent engraving contrast." },
  { name: "Tropical Green Granite", img: gPicasso, desc: "Tropical Green Granite offers deep green and black textures that create a unique, eye-catching memorial. It's a standout choice for families wanting something different from traditional colors." },
];

function GranitePage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Granite Colors"
        title="Choose Your"
        accent="Granite"
        subtitle="Premium, weather-resistant colors that last for generations."
      />

      <section className="container-px mx-auto max-w-7xl py-16 md:py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {granites.map((g, i) => (
            <article
              key={g.name}
              data-reveal
              data-reveal-delay={i * 50}
              className="reveal surface-card surface-card-hover group overflow-hidden rounded-2xl"
            >
              <div className="img-zoom relative aspect-[4/3]">
                <img src={g.img} alt={`${g.name} sample`} loading="lazy" width={800} height={600} className="h-full w-full object-cover" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-[1.2rem] text-foreground">{g.name}</h2>
                  <span className="shrink-0 rounded-full border border-[color:var(--gold)]/25 bg-[color:var(--gold)]/8 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[color:var(--gold)]">Polished</span>
                </div>
                <p className="mt-2 text-[13px] leading-[1.7] text-muted-foreground">{g.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <QuoteCTA heading="Found One You Love" body="Tell us your color and we'll show you options." />
    </SiteShell>
  );
}

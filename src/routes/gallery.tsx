import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, QuoteCTA, SITE_URL, SiteShell } from "@/components/site/SiteLayout";
import galUpright from "@/assets/gallery-upright.jpg";
import galFlat from "@/assets/gallery-flat.jpg";
import galCompanion from "@/assets/gallery-companion.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Memorial Gallery | Custom Headstones & Monuments | Rumi Stone" },
      {
        name: "description",
        content:
          "Browse real headstones, markers, and monuments crafted by Rumi Stone for California families. See the quality and care in every piece.",
      },
      { property: "og:title", content: "Memorial Gallery | Custom Headstones & Monuments | Rumi Stone" },
      { property: "og:description", content: "Real memorials, crafted with care for real families." },
      { property: "og:url", content: `${SITE_URL}/gallery` },
      { property: "og:image", content: `${SITE_URL}${galUpright}` },
      { name: "twitter:image", content: `${SITE_URL}${galUpright}` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/gallery` }],
  }),
  component: GalleryPage,
});

const gallery = [
  { src: galUpright, cat: "Upright", label: "Arched Upright Monument", span: "row-span-2" },
  { src: galFlat, cat: "Flat", label: "Flat Granite Marker", span: "" },
  { src: galCompanion, cat: "Companion", label: "Companion Headstone", span: "row-span-2" },
];
const cats = ["All", "Upright", "Flat", "Companion"];

function GalleryPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? gallery : gallery.filter((g) => g.cat === active);
  return (
    <SiteShell>
      <PageHero
        eyebrow="Our Work"
        title="Real Memorials,"
        accent="Real Families"
        subtitle="Every piece below was designed alongside the family it honors."
      />

      <section className="container-px mx-auto max-w-7xl py-16 md:py-20">
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full border px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] transition-all duration-300 ${
                active === c
                  ? "border-transparent bg-foreground text-background shadow-[var(--shadow-soft)]"
                  : "border-border bg-white/70 text-foreground/70 hover:-translate-y-0.5 hover:border-foreground/20 hover:bg-white hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid auto-rows-[240px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((g, i) => (
            <figure
              key={g.label}
              data-reveal
              data-reveal-delay={i * 60}
              className={`reveal img-zoom group relative overflow-hidden rounded-2xl ring-1 ring-black/5 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lifted)] transition-shadow duration-500 ${g.span}`}
            >
              <img src={g.src} alt={g.label} loading="lazy" className="h-full w-full object-cover" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[oklch(0.16_0.02_250/0.85)] via-[oklch(0.16_0.02_250/0.15)] to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 p-5 text-white opacity-90 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <div className="text-[10px] uppercase tracking-[0.28em] text-[color:var(--gold)]">{g.cat}</div>
                <div className="font-serif text-xl">{g.label}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <QuoteCTA heading="Imagine Your Loved One's Memorial" body="Tell us your ideas — we'll bring them to life in stone." />
    </SiteShell>
  );
}

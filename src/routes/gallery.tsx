import { createFileRoute } from "@tanstack/react-router";
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

const placeholders = [galUpright, galFlat, galCompanion];

// 30 placeholder slots — replace each src with your own image later.
const gallery = Array.from({ length: 30 }, (_, i) => ({
  src: placeholders[i % placeholders.length],
  label: `Memorial ${i + 1}`,
}));

function GalleryPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Our Work"
        title="Real Memorials,"
        accent="Real Families"
        subtitle="Every piece below was designed alongside the family it honors."
      />

      <section className="container-px mx-auto max-w-7xl py-16 md:py-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((g, i) => (
            <figure
              key={g.label}
              data-reveal
              data-reveal-delay={(i % 6) * 60}
              className="reveal group overflow-hidden rounded-2xl border border-border bg-white p-3 shadow-[var(--shadow-soft)] transition-shadow duration-500 hover:shadow-[var(--shadow-lifted)]"
            >
              <div className="img-zoom flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl bg-white">
                <img
                  src={g.src}
                  alt={g.label}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </figure>
          ))}
        </div>
      </section>

      <QuoteCTA heading="Imagine Your Loved One's Memorial" body="Tell us your ideas — we'll bring them to life in stone." />
    </SiteShell>
  );
}


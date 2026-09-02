import { createFileRoute } from "@tanstack/react-router";
import { PageHero, QuoteCTA, SITE_URL, SiteShell } from "@/components/site/SiteLayout";
import gallery01 from "@/assets/gallerypics/Tombstone (1).avif";
import gallery07 from "@/assets/gallerypics/Tombstone (7).avif";
import gallery08 from "@/assets/gallerypics/Tombstone (8).avif";
import gallery09 from "@/assets/gallerypics/Tombstone (9).avif";
import gallery10 from "@/assets/gallerypics/Tombstone (10).avif";
import gallery11 from "@/assets/gallerypics/Tombstone (11).avif";
import gallery12 from "@/assets/gallerypics/Tombstone (12).avif";
import gallery13 from "@/assets/gallerypics/Tombstone (13).avif";
import gallery14 from "@/assets/gallerypics/Tombstone (14).avif";
import gallery15 from "@/assets/gallerypics/Tombstone (15).avif";
import gallery16 from "@/assets/gallerypics/Tombstone (16).avif";
import gallery17 from "@/assets/gallerypics/Tombstone (17).avif";
import gallery18 from "@/assets/gallerypics/Tombstone (18).avif";
import gallery19 from "@/assets/gallerypics/Tombstone (19).avif";
import gallery20 from "@/assets/gallerypics/Tombstone (20).avif";
import gallery21 from "@/assets/gallerypics/Tombstone (21).avif";
import gallery22 from "@/assets/gallerypics/Tombstone (22).avif";
import gallery23 from "@/assets/gallerypics/Tombstone (23).avif";
import gallery24 from "@/assets/gallerypics/Tombstone (24).avif";
import gallery25 from "@/assets/gallerypics/Tombstone (25).avif";
import gallery26 from "@/assets/gallerypics/Tombstone (26).avif";
import gallery27 from "@/assets/gallerypics/Tombstone (3).avif";
import gallery28 from "@/assets/gallerypics/Tombstone (4).avif";
import gallery29 from "@/assets/gallerypics/Tombstone (29).avif";
import gallery30 from "@/assets/gallerypics/Tombstone (30).avif";
import gallery31 from "@/assets/gallerypics/Tombstone (31).avif";
import gallery32 from "@/assets/gallerypics/Tombstone (32).avif";
import gallery33 from "@/assets/gallerypics/Tombstone (33).avif";
import gallery34 from "@/assets/gallerypics/Tombstone (34).avif";
import gallery35 from "@/assets/gallerypics/Tombstone (35).avif";

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
      { property: "og:image", content: `${SITE_URL}${gallery01}` },
      { name: "twitter:image", content: `${SITE_URL}${gallery01}` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/gallery` }],
  }),
  component: GalleryPage,
});

const gallery = [
  { src: gallery01, label: "Tombstone 1" },
  { src: gallery07, label: "Tombstone 7" },
  { src: gallery08, label: "Tombstone 8" },
  { src: gallery09, label: "Tombstone 9" },
  { src: gallery10, label: "Tombstone 10" },
  { src: gallery11, label: "Tombstone 11" },
  { src: gallery12, label: "Tombstone 12" },
  { src: gallery13, label: "Tombstone 13" },
  { src: gallery14, label: "Tombstone 14" },
  { src: gallery15, label: "Tombstone 15" },
  { src: gallery16, label: "Tombstone 16" },
  { src: gallery17, label: "Tombstone 17" },
  { src: gallery18, label: "Tombstone 18" },
  { src: gallery19, label: "Tombstone 19" },
  { src: gallery20, label: "Tombstone 20" },
  { src: gallery21, label: "Tombstone 21" },
  { src: gallery22, label: "Tombstone 22" },
  { src: gallery23, label: "Tombstone 23" },
  { src: gallery24, label: "Tombstone 24" },
  { src: gallery25, label: "Tombstone 25" },
  { src: gallery26, label: "Tombstone 26" },
  { src: gallery27, label: "Tombstone 27" },
  { src: gallery28, label: "Tombstone 28" },
  { src: gallery29, label: "Tombstone 29" },
  { src: gallery30, label: "Tombstone 30" },
  { src: gallery31, label: "Tombstone 31" },
  { src: gallery32, label: "Tombstone 32" },
  { src: gallery33, label: "Tombstone 33" },
  { src: gallery34, label: "Tombstone 34" },
  { src: gallery35, label: "Tombstone 35" },
];

function GalleryPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Our Work"
        title="Real Memorials,"
        accent="Real Families"
        subtitle="Every piece below was designed alongside the family it honors."
      />

      <section className="container-px mx-auto max-w-[1600px] py-16 md:py-20">
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
                  loading={i < 3 ? "eager" : "lazy"}
                  decoding="async"
                  width={1000}
                  height={750}
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


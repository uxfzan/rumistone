import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone, Mail, MapPin, Check, Star, ArrowRight, ArrowUpRight, Menu, X,
  Gem, Square, Mountain, Armchair, Sparkles,
  MessageSquare, PencilRuler, Hammer, ChevronDown, MessageCircle,

} from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";



import heroImg from "@/assets/hero-memorial.jpg";
import gPicasso from "@/assets/granite-picasso-green.jpg";
import gGalaxy from "@/assets/granite-galaxy-black.jpg";
import gBahama from "@/assets/granite-bahama-blue.jpg";
import gIndia from "@/assets/granite-india-red.jpg";
import gGray from "@/assets/granite-gray.jpg";
import gHimalayan from "@/assets/himalayan-blue.png.asset.json";
import gParadiso from "@/assets/paradiso.png.asset.json";
import gBluePearl from "@/assets/blue-pearl.png.asset.json";
import gAutumnRose from "@/assets/autumn-rose.png.asset.json";
import galUpright from "@/assets/gallery-upright.jpg";
import galFlat from "@/assets/gallery-flat.jpg";
import galCompanion from "@/assets/gallery-companion.jpg";
import aboutImg from "@/assets/about-craftsman.jpg";

const PHONE = "(510) 555-0142";
const PHONE_HREF = "tel:+15105550142";
const WHATSAPP_NUMBER = "15105550142";
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Rumi Stone, I'd like a quote for a memorial.")}`;
const EMAIL = "hello@rumistone.com";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rumi Stone — Custom Memorial Headstones & Monuments in California" },
      { name: "description", content: "Custom granite headstones, grave markers and cemetery monuments. Family-owned, premium quality, 30–40% below traditional cemetery pricing. Serving all of California." },
      { property: "og:title", content: "Rumi Stone — Custom Memorial Headstones & Monuments" },
      { property: "og:description", content: "Personalized, memorable, affordable granite memorials throughout California." },
      { property: "og:image", content: heroImg },
      { property: "og:url", content: "/" },
      { name: "twitter:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Rumi Stone",
          description: "Custom memorial headstones and granite monuments serving all of California.",
          telephone: PHONE,
          email: EMAIL,
          areaServed: "California",
          image: heroImg,
          priceRange: "$$",
        }),
      },
    ],
  }),
  component: Index,
});

function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#top" className={`group flex items-center gap-3 ${className}`}>
      <span className="relative grid h-10 w-10 place-items-center rounded-full bg-[linear-gradient(135deg,oklch(0.55_0.12_240),oklch(0.35_0.09_250))] text-white shadow-[0_8px_24px_-8px_oklch(0.35_0.09_250/0.55)] ring-1 ring-white/30 transition-transform duration-500 group-hover:scale-105">
        <span className="font-serif text-xl leading-none italic tracking-tight">R</span>
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-[15px] font-semibold tracking-tight text-foreground">Rumi Stone</span>
        <span className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">Memorial Atelier</span>
      </span>
    </a>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Services", "#services"],
    ["Granite", "#granite"],
    ["Gallery", "#gallery"],
    ["Process", "#process"],
    ["About", "#about"],
    ["Contact", "#contact"],
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full glass-strong px-4 py-2.5 shadow-[0_10px_40px_-16px_oklch(0.22_0.02_250/0.25)]">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="relative text-[13px] font-medium tracking-wide text-foreground/70 transition-colors hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-[color:var(--gold)] after:transition-transform after:duration-500 hover:after:origin-left hover:after:scale-x-100"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <a href={WHATSAPP_HREF} target="_blank" rel="noopener" aria-label="Chat on WhatsApp" className="btn-whatsapp inline-flex h-10 items-center gap-2 rounded-full px-4 text-[12px] font-semibold tracking-wide">
            <MessageCircle className="h-4 w-4" strokeWidth={2.4} /> WhatsApp
          </a>
          <a href="#contact" className="group inline-flex h-10 items-center gap-1.5 rounded-full bg-foreground px-5 text-[12px] font-semibold tracking-wide text-background shadow-[0_8px_20px_-8px_oklch(0.2_0.02_250/0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_-10px_oklch(0.2_0.02_250/0.55)]">
            Free Quote <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="grid h-10 w-10 place-items-center rounded-full border border-border bg-white text-foreground shadow-[var(--shadow-xs)] lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-3xl glass p-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="rounded-2xl px-3 py-2.5 text-base font-medium text-foreground/85 hover:bg-black/5">
                {label}
              </a>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <a href={WHATSAPP_HREF} target="_blank" rel="noopener" onClick={() => setOpen(false)} className="btn-whatsapp flex items-center justify-center gap-2 rounded-full px-4 py-3 text-xs font-semibold">
                <MessageCircle className="h-4 w-4" strokeWidth={2.4} /> WhatsApp
              </a>
              <a href="#contact" onClick={() => setOpen(false)} className="rounded-full bg-foreground px-5 py-3 text-center text-xs font-semibold text-background shadow-[var(--shadow-soft)]">
                Free Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32 lg:pt-52 lg:pb-40">
      {/* Layered warm gradient mesh */}
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-mesh)" }} />
      {/* Very soft, blurred image wash */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.14]">
        <img src={heroImg} alt="" className="h-full w-full object-cover blur-2xl scale-110" width={1920} height={1280} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      </div>
      {/* Soft comforting orbs */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-[oklch(0.82_0.08_235/0.35)] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-[oklch(0.9_0.05_65/0.35)] blur-3xl" />

      <div className="container-px mx-auto max-w-6xl">
        <div className="mx-auto flex flex-col items-center text-center">
          <div data-reveal className="reveal mb-8 inline-flex items-center gap-2.5 rounded-full glass px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.24em] text-foreground/75 shadow-[var(--shadow-xs)]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--gold)] opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[color:var(--gold)]" />
            </span>
            Family Atelier · Est. California
          </div>

          <h1 data-reveal data-reveal-delay="80" className="reveal max-w-5xl text-balance">
            <span className="text-gradient-light">Memorials,</span>{" "}
            <span className="italic text-gradient-gold">beautifully</span>{" "}
            <span className="text-gradient-light">remembered.</span>
          </h1>

          <p data-reveal data-reveal-delay="180" className="reveal mt-7 max-w-xl text-[17px] leading-[1.7] text-foreground/65 md:text-lg">
            Hand-crafted granite headstones and monuments — designed with you and installed at any cemetery in California.
          </p>

          <div data-reveal data-reveal-delay="260" className="reveal mt-10 flex flex-wrap items-center justify-center gap-3">
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-4 text-[13px] font-semibold tracking-wide text-background shadow-[0_12px_30px_-12px_oklch(0.2_0.02_250/0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-14px_oklch(0.2_0.02_250/0.6)]">
              Get a Free Quote
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a href={WHATSAPP_HREF} target="_blank" rel="noopener" aria-label="Chat on WhatsApp" className="btn-whatsapp hidden md:inline-flex items-center gap-2 rounded-full px-7 py-4 text-[13px] font-semibold tracking-wide">
              <MessageCircle className="h-4 w-4" strokeWidth={2.4} /> Chat on WhatsApp
            </a>
            <a href="#gallery" className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-7 py-4 text-[13px] font-semibold tracking-wide text-foreground/85 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[var(--shadow-soft)]">
              View Gallery
            </a>
          </div>

        </div>

        {/* Trust stats */}
        <div data-reveal data-reveal-delay="440" className="reveal mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-3xl glass-strong shadow-[var(--shadow-elegant)] md:grid-cols-4">
          {[
            ["10+", "Years Crafting"],
            ["1000+", "Memorials Made"],
            ["All", "CA Cemeteries"],
            ["Statewide", "Delivery"],
          ].map(([k, v]) => (
            <div key={v} className="bg-white/60 p-6 text-center transition-colors duration-300 hover:bg-white md:p-8">
              <div className="font-serif text-4xl italic text-gradient-gold md:text-[2.75rem]">{k}</div>
              <div className="mt-1.5 text-[10px] uppercase tracking-[0.28em] text-muted-foreground">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, accent, kicker }: { eyebrow: string; title: string; accent?: string; kicker?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div data-reveal className="reveal mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-3.5 py-1 text-[11px] font-medium uppercase tracking-[0.24em] text-foreground/70 shadow-[var(--shadow-xs)] backdrop-blur">
        <span className="h-1 w-1 rounded-full bg-[color:var(--gold)]" />
        {eyebrow}
      </div>
      <h2 data-reveal data-reveal-delay="80" className="reveal text-balance text-foreground">
        {title}{" "}
        {accent && <span className="italic text-gradient-gold">{accent}</span>}
      </h2>
      {kicker && <p data-reveal data-reveal-delay="160" className="reveal mt-5 text-[15px] leading-[1.7] text-foreground/60 md:text-lg">{kicker}</p>}
    </div>
  );
}


const services = [
  { icon: Square, title: "Flat Grave Markers", body: "Elegant cemetery markers available in a range of granite colors." },
  { icon: Mountain, title: "Upright Monuments", body: "Traditional upright memorials with timeless silhouettes." },
  { icon: Armchair, title: "Memorial Benches", body: "Beautiful, functional granite seating for reflection." },
];

function Services() {
  return (
    <section id="services" className="container-px mx-auto max-w-7xl py-24 md:py-32">
      <SectionHeader eyebrow="Our Services" title="Memorials Crafted For Every Tribute" kicker="From a single flat marker to a family monument — every piece is designed, carved and finished by our own artisans." />
      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map(({ icon: Icon, title, body }, i) => (
          <div
            key={title}
            data-reveal
            data-reveal-delay={i * 60}
            className="reveal surface-card surface-card-hover group relative overflow-hidden rounded-2xl p-8"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[oklch(0.85_0.08_235/0.25)] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
            <div className="mb-6 grid h-12 w-12 place-items-center rounded-xl border border-[color:var(--gold)]/25 bg-[linear-gradient(135deg,oklch(0.95_0.03_235),oklch(0.9_0.05_235))] text-[color:var(--gold)] shadow-[0_6px_16px_-8px_oklch(0.55_0.12_240/0.4)] transition-all duration-500 group-hover:scale-105 group-hover:bg-[color:var(--gold)] group-hover:text-white">
              <Icon className="h-5 w-5" strokeWidth={1.75} />
            </div>
            <h3 className="text-[1.4rem] text-foreground">{title}</h3>
            <p className="mt-3 text-[14.5px] leading-[1.7] text-muted-foreground">{body}</p>
            <div className="mt-6 inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-[color:var(--gold)] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              Learn more <ArrowRight className="h-3 w-3" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const granites = [
  { name: "Absolute Black Granite", img: gGalaxy, desc: "A timeless favorite in California, Absolute Black Granite offers unmatched contrast and clarity for engraving. Its deep, polished finish makes portraits, lettering, and artwork stand out beautifully." },
  { name: "India Red Granite", img: gIndia, desc: "India Red Granite delivers a bold, vibrant memorial with rich red tones that symbolize strength and love. Families choose this color for its striking appearance and long-lasting durability." },
  { name: "Bahama Blue Granite", img: gBahama, desc: "Bahama Blue Granite features elegant blue and lavender waves that create a premium, artistic memorial. This color is ideal for families seeking a unique and visually stunning tribute." },
  { name: "Autumn Rose (Pink) Granite", img: gAutumnRose.url, desc: "Autumn Rose Granite offers warm pink tones that bring softness and beauty to any headstone or marker. It's a popular choice for flat markers and traditional memorial designs." },
  { name: "Standard Gray Granite", img: gGray, desc: "Gray Granite is the most traditional and widely accepted memorial stone in California cemeteries. Its clean, classic look and excellent durability make it a reliable choice for any style of engraving." },
  { name: "Blue Pearl Granite", img: gBluePearl.url, desc: "Blue Pearl Granite shines with metallic blue crystals that reflect light beautifully. This premium stone is perfect for upright monuments and modern memorial designs." },
  { name: "Paradiso Granite", img: gParadiso.url, desc: "Paradiso Granite showcases flowing purple and gray patterns that create a sophisticated, artistic memorial. Its natural movement makes every stone truly one-of-a-kind." },
  { name: "Himalayan Blue Granite", img: gHimalayan.url, desc: "Himalayan Blue Granite blends blue, brown, and gray tones in a dramatic wave pattern. Families choose this color for its bold character and excellent engraving contrast." },
  { name: "Tropical Green Granite", img: gPicasso, desc: "Tropical Green Granite offers deep green and black textures that create a unique, eye-catching memorial. It's a standout choice for families wanting something different from traditional colors." },
];

function Granite() {
  return (
    <section id="granite" className="bg-[color:var(--cream)] py-24 md:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeader eyebrow="Granite Collection" title="Premium Stone, Hand-Selected" kicker="Each slab is reviewed for color depth, grain consistency and structural integrity before it enters our workshop." />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {granites.map((g, i) => (
            <div
              key={g.name}
              data-reveal
              data-reveal-delay={i * 60}
              className="reveal surface-card surface-card-hover group overflow-hidden rounded-2xl"
            >
              <div className="img-zoom relative aspect-[4/3]">
                <img src={g.img} alt={`${g.name} granite sample`} loading="lazy" width={800} height={600} className="h-full w-full object-cover" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-[1.2rem] text-foreground">{g.name}</h3>
                  <span className="shrink-0 rounded-full border border-[color:var(--gold)]/25 bg-[color:var(--gold)]/8 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[color:var(--gold)]">Polished</span>
                </div>
                <p className="mt-2 text-[13px] leading-[1.7] text-muted-foreground">{g.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const reasons = [
  { k: "10+ Years", v: "Of Excellence", body: "Trusted by thousands of California families." },
  { k: "Partners", v: "Cemetery Network", body: "We work directly with cemeteries statewide." },
  { k: "1000+", v: "Memorials Created", body: "Every design original, every detail intentional." },
  { k: "Fast", v: "Turnaround", body: "Efficient production without sacrificing quality." },
];

function WhyUs() {
  return (
    <section className="container-px mx-auto max-w-7xl py-24 md:py-32">
      <SectionHeader eyebrow="Why Rumi Stone" title="The Care Of Family. The Skill Of Master Craftsmen." />
      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {reasons.map((r, i) => (
          <div key={r.v} data-reveal data-reveal-delay={i * 70} className="reveal relative pt-8">
            <span className="absolute left-0 top-0 h-px w-12 bg-[color:var(--gold)]" />
            <span className="absolute left-0 top-0 h-px w-0 bg-foreground/60 transition-all duration-700 group-hover:w-12" />
            <div className="font-serif text-[2.5rem] leading-none tracking-tight text-foreground">{r.k}</div>
            <div className="mt-2 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">{r.v}</div>
            <p className="mt-4 text-[14.5px] leading-[1.7] text-foreground/70">{r.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[linear-gradient(180deg,oklch(0.28_0.045_250),oklch(0.2_0.03_250))] text-primary-foreground py-24 md:py-32">
      <div className="pointer-events-none absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-[oklch(0.55_0.12_240/0.25)] blur-3xl" />
      <div className="container-px mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div data-reveal className="reveal relative img-zoom">
          <img src={aboutImg} alt="Stonemason crafting a memorial in the Rumi Stone workshop" loading="lazy" width={1400} height={1000} className="rounded-2xl object-cover shadow-[var(--shadow-elegant)] ring-1 ring-white/10" />
          <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-white/15 bg-[linear-gradient(180deg,oklch(0.6_0.11_235),oklch(0.5_0.12_245))] p-6 text-white shadow-[0_20px_50px_-20px_oklch(0.2_0.03_250/0.6)] md:block">
            <div className="font-serif text-4xl leading-none">1000+</div>
            <div className="mt-1 text-[11px] uppercase tracking-[0.24em] opacity-90">Memorials</div>
          </div>
        </div>
        <div data-reveal data-reveal-delay="120" className="reveal">
          <div className="mb-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-[color:var(--gold)]">
            <span className="inline-block h-px w-10 bg-[color:var(--gold)]" />
            About Rumi Stone
          </div>
          <h2 className="text-primary-foreground">
            Crafting memories that last <span className="italic text-[color:var(--gold)]">generations</span>.
          </h2>
          <div className="mt-6 space-y-5 text-[15.5px] leading-[1.75] text-white/80">
            <p>
              At Rumi Stone, we understand that a memorial is more than stone — it is a lasting tribute to a loved one's life. Our skilled craftsmen combine traditional monument-making techniques with modern artistry to honor each individual with dignity and grace.
            </p>
            <p>
              As a family-owned business, we work closely with every family we serve. Every monument tells a unique story and preserves cherished memories for generations to come.
            </p>
          </div>
          <a href="#contact" className="group mt-8 inline-flex items-center gap-2 border-b border-[color:var(--gold)] pb-1 text-[12px] font-medium uppercase tracking-[0.2em] text-[color:var(--gold)]">
            Learn more about us <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

const gallery = [
  { src: galUpright, cat: "Upright", label: "Arched Upright Monument", span: "row-span-2" },
  { src: galFlat, cat: "Flat", label: "Flat Granite Marker", span: "" },
  { src: galCompanion, cat: "Companion", label: "Companion Headstone", span: "row-span-2" },
];
const galleryCats = ["All", "Upright", "Flat", "Companion"];

function Gallery() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? gallery : gallery.filter((g) => g.cat === active);
  return (
    <section id="gallery" className="container-px mx-auto max-w-7xl py-24 md:py-32">
      <SectionHeader eyebrow="Memorial Gallery" title="A Selection Of Recent Work" kicker="Each piece below was designed alongside the family it honors." />
      <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
        {galleryCats.map((c) => (
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
      <div className="mt-12 grid auto-rows-[240px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((g, i) => (
          <figure
            key={g.label}
            data-reveal
            data-reveal-delay={i * 60}
            className={`reveal img-zoom group relative overflow-hidden rounded-2xl ring-1 ring-black/5 shadow-[var(--shadow-soft)] transition-shadow duration-500 hover:shadow-[var(--shadow-lifted)] ${g.span}`}
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
  );
}

const testimonials = [
  { name: "Andrea Torres", city: "Hayward, CA", quote: "My family hired Rumi Stone for my father's headstone and the service was exceptional. They answered every question and helped us create a memorial that perfectly honored his life." },
  { name: "Michael Chen", city: "San Jose, CA", quote: "From the first phone call we felt cared for. The design was beautiful and the installation was handled with such respect. Pricing was a fraction of what the cemetery quoted." },
  { name: "Patricia Alvarez", city: "Sacramento, CA", quote: "The craftsmanship is breathtaking. Every detail of the engraving was exactly as we imagined. A true family business that treats you like family." },
];

function Testimonials() {
  return (
    <section className="bg-[color:var(--cream)] py-24 md:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeader eyebrow="Family Stories" title="Trusted By Families Across California" />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              data-reveal
              data-reveal-delay={i * 100}
              className="reveal surface-card surface-card-hover relative flex h-full flex-col rounded-2xl p-8"
            >
              <span className="absolute -top-4 left-8 font-serif text-6xl italic leading-none text-[color:var(--gold)]/40">“</span>
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
      </div>
    </section>
  );
}

const steps = [
  { icon: MessageSquare, title: "Consultation", body: "We discuss your design preferences and cemetery requirements." },
  { icon: PencilRuler, title: "Design Approval", body: "Receive a digital proof and approve every detail." },
  { icon: Hammer, title: "Production", body: "Expert stone crafting, sandblasting and engraving begins." },
];

function Process() {
  return (
    <section id="process" className="container-px mx-auto max-w-7xl py-24 md:py-32">
      <SectionHeader eyebrow="Our Process" title="Three Thoughtful Steps" kicker="A guided experience from your first conversation to the finished memorial." />
      <div className="mt-16 grid gap-9 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
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
  );
}

const cities = ["San Francisco", "Oakland", "San Jose", "Hayward", "Fremont", "Sacramento", "Central Valley", "Los Angeles"];

function Coverage() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,oklch(0.28_0.045_250),oklch(0.2_0.03_250))] text-primary-foreground py-24 md:py-32">
      <div className="pointer-events-none absolute -top-24 right-0 h-[500px] w-[500px] rounded-full bg-[oklch(0.55_0.12_240/0.25)] blur-3xl" />
      <div className="container-px mx-auto max-w-7xl">
        <div data-reveal className="reveal">
          <div className="mb-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-[color:var(--gold)]">
            <span className="inline-block h-px w-10 bg-[color:var(--gold)]" /> Coverage Area
          </div>
          <h2 className="text-primary-foreground">
            We work with <span className="italic text-[color:var(--gold)]">every cemetery</span> in California.
          </h2>
          <p className="mt-5 max-w-lg text-[15.5px] leading-[1.75] text-white/75">
            From the Bay Area to the Central Valley and down to Los Angeles — our team handles permitting, delivery and installation at any California cemetery.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
            {cities.map((c) => (
              <div key={c} className="flex items-center gap-2 text-[14px] text-white/85 transition-colors duration-300 hover:text-white">
                <MapPin className="h-4 w-4 text-[color:var(--gold)]" /> {c}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  { q: "How much does a headstone cost?", a: "Pricing depends on size, granite color and engraving complexity. Most of our custom memorials are priced 30–40% below traditional cemetery quotes. Request a free quote for an exact figure." },
  { q: "How long does production take?", a: "From design approval to installation, most memorials are completed in 4–8 weeks. We can expedite urgent requests when possible." },
  { q: "Do you install at all cemeteries?", a: "Yes. We're approved at every cemetery in California and handle permits, foundation work and final placement." },
  { q: "What granite colors are available?", a: "We carry Picasso Green, Galaxy Black, Bahama Blue, India Red, classic Gray and a range of custom colors sourced on request." },
  { q: "Can photos be engraved?", a: "Absolutely. We offer laser portrait engraving, religious symbols, custom artwork and full inscription design." },
  { q: "Do you offer shipping?", a: "Yes — statewide delivery and installation throughout California is included for most memorials." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="container-px mx-auto max-w-4xl py-24 md:py-32">
      <SectionHeader eyebrow="Questions" title="Frequently Asked" />
      <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)]">
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
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="bg-[color:var(--cream)] py-24 md:py-32">
      <div className="container-px mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr,1.3fr] lg:gap-20">
        <div>
          <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            <span className="gold-divider" /> Get In Touch
          </div>
          <h2 className="font-serif text-3xl text-foreground md:text-5xl">
            Let's design a memorial that honors them.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Share a few details and we'll respond within one business day with pricing and next steps. No pressure — just a conversation.
          </p>
          <div className="mt-10 space-y-3">
            <a href={PHONE_HREF} className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:border-primary/40 hover:shadow-[var(--shadow-elegant)]">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground shadow-sm transition-transform duration-300 group-hover:scale-105"><Phone className="h-5 w-5" strokeWidth={2.2} /></span>
              <span>
                <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/60">Phone</div>
                <div className="mt-0.5 text-[17px] font-semibold text-foreground">{PHONE}</div>
              </span>
            </a>
            <a href={`mailto:${EMAIL}`} className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:border-primary/40 hover:shadow-[var(--shadow-elegant)]">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground shadow-sm transition-transform duration-300 group-hover:scale-105"><Mail className="h-5 w-5" strokeWidth={2.2} /></span>
              <span>
                <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/60">Email</div>
                <div className="mt-0.5 text-[17px] font-semibold text-foreground">{EMAIL}</div>
              </span>
            </a>
            <a href={WHATSAPP_HREF} target="_blank" rel="noopener" className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:border-[color:var(--wa-green,#25D366)]/50 hover:shadow-[var(--shadow-elegant)]">
              <span className="btn-whatsapp grid h-12 w-12 shrink-0 place-items-center rounded-lg shadow-sm transition-transform duration-300 group-hover:scale-105"><MessageCircle className="h-5 w-5" strokeWidth={2.4} /></span>
              <span>
                <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/60">WhatsApp</div>
                <div className="mt-0.5 text-[17px] font-semibold text-foreground">Chat with us instantly</div>
              </span>
            </a>
            <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground shadow-sm"><MapPin className="h-5 w-5" strokeWidth={2.2} /></span>
              <span>
                <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/60">Service Area</div>
                <div className="mt-0.5 text-[17px] font-semibold text-foreground">All of California</div>
              </span>
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="relative rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-elegant)] md:p-10"
        >
          <div className="pointer-events-none absolute -inset-px rounded-2xl bg-[linear-gradient(140deg,oklch(0.55_0.12_240/0.15),transparent_40%)]" />
          {sent ? (
            <div className="grid h-full place-items-center py-12 text-center">
              <div>
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[color:var(--gold)] text-primary">
                  <Check className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-serif text-2xl text-foreground">Thank you</h3>
                <p className="mt-2 text-sm text-muted-foreground">We'll be in touch within one business day.</p>
              </div>
            </div>
          ) : (
            <>
              <h3 className="font-serif text-2xl text-foreground">Request a free quote</h3>
              <p className="mt-1 text-sm text-muted-foreground">All fields help us prepare an accurate estimate.</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Field label="Name" name="name" required />
                <Field label="Phone" name="phone" type="tel" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Cemetery Name" name="cemetery" />
                <div className="sm:col-span-2">
                  <Label>Memorial Type</Label>
                  <select className="mt-1.5 w-full rounded-sm border border-input bg-background px-3 py-2.5 text-sm">
                    <option>Custom Headstone</option>
                    <option>Flat Grave Marker</option>
                    <option>Upright Monument</option>
                    <option>Companion Headstone</option>
                    <option>Memorial Bench</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <Label>Message</Label>
                  <textarea rows={4} className="mt-1.5 w-full rounded-sm border border-input bg-background px-3 py-2.5 text-sm" placeholder="Share any details, inscriptions or design ideas…" />
                </div>
              </div>
              <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-foreground px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-background transition-transform hover:-translate-y-0.5">
                Request Free Quote <ArrowRight className="h-4 w-4" />
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-muted-foreground">{children}</span>;
}
function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <Label>{label}{required && " *"}</Label>
      <input name={name} type={type} required={required} className="mt-1.5 w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm transition-all duration-200 focus:border-[color:var(--gold)] focus:outline-none focus:ring-4 focus:ring-[color:var(--gold)]/15" />
    </label>
  );
}

function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-px mx-auto max-w-7xl py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Logo className="[&_span]:text-primary-foreground" />
            <p className="mt-4 text-sm text-white/70">
              Honoring lives through timeless memorial craftsmanship.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-[color:var(--gold)]">Navigate</div>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li><a href="#services">Services</a></li>
              <li><a href="#granite">Granite</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-[color:var(--gold)]">Service Areas</div>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>San Francisco · Oakland</li>
              <li>San Jose · Hayward</li>
              <li>Fremont · Sacramento</li>
              <li>Central Valley</li>
              <li>Los Angeles · Statewide</li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-[color:var(--gold)]">Contact</div>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li><a href={PHONE_HREF}>{PHONE}</a></li>
              <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/15 pt-6 text-xs text-white/60 sm:flex-row">
          <div>© {new Date().getFullYear()} Rumi Stone. All rights reserved.</div>
          <div className="font-serif italic text-white/75">Honoring Lives Through Timeless Memorial Craftsmanship</div>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener"
      aria-label="Chat on WhatsApp"
      className="btn-whatsapp group fixed bottom-6 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full"
    >
      <MessageCircle className="h-6 w-6" strokeWidth={2.2} />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-foreground px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-background opacity-0 shadow-[var(--shadow-soft)] transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100 lg:block">
        Chat on WhatsApp
      </span>
    </a>
  );
}

function Index() {
  useScrollReveal();
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <Services />
        <Granite />
        <WhyUs />
        <About />
        <Gallery />
        <Testimonials />
        <Process />
        <Coverage />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}


import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone, Mail, MapPin, Check, Star, ArrowRight, ArrowUpRight, Menu, X,
  Gem, Square, Mountain, Users, Armchair, Sparkles,
  MessageSquare, PencilRuler, Hammer, Truck, ChevronDown, MessageCircle,
} from "lucide-react";


import heroImg from "@/assets/hero-memorial.jpg";
import gPicasso from "@/assets/granite-picasso-green.jpg";
import gGalaxy from "@/assets/granite-galaxy-black.jpg";
import gBahama from "@/assets/granite-bahama-blue.jpg";
import gIndia from "@/assets/granite-india-red.jpg";
import gGray from "@/assets/granite-gray.jpg";
import galUpright from "@/assets/gallery-upright.jpg";
import galFlat from "@/assets/gallery-flat.jpg";
import galBench from "@/assets/gallery-bench.jpg";
import galCompanion from "@/assets/gallery-companion.jpg";
import galReligious from "@/assets/gallery-religious.jpg";
import galEngraving from "@/assets/gallery-engraving.jpg";
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
      <span className="relative grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[oklch(0.92_0.1_88)] to-[oklch(0.65_0.16_50)] text-primary shadow-[var(--shadow-glow)]">
        <span className="font-display text-xl leading-none italic">R</span>
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-base font-semibold tracking-tight text-foreground">Rumi Stone</span>
        <span className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Memorial Atelier</span>
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
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full glass px-4 py-2.5 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.5)]">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground">
              {label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <a href={WHATSAPP_HREF} target="_blank" rel="noopener" className="flex h-10 items-center gap-2 rounded-full border border-[oklch(0.72_0.18_150)]/40 bg-[oklch(0.72_0.18_150)]/10 px-4 text-xs font-semibold text-[oklch(0.85_0.18_150)] transition-colors hover:bg-[oklch(0.72_0.18_150)]/20">
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <a href="#contact" className="group flex h-10 items-center gap-1.5 rounded-full bg-foreground px-5 text-xs font-semibold text-background transition-transform hover:-translate-y-0.5">
            Free Quote <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-3xl glass p-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="rounded-2xl px-3 py-2.5 text-base font-medium text-foreground/85 hover:bg-white/5">
                {label}
              </a>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <a href={WHATSAPP_HREF} target="_blank" rel="noopener" onClick={() => setOpen(false)} className="flex items-center justify-center gap-2 rounded-full border border-[oklch(0.72_0.18_150)]/40 bg-[oklch(0.72_0.18_150)]/15 px-4 py-3 text-xs font-semibold text-[oklch(0.85_0.18_150)]">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <a href="#contact" onClick={() => setOpen(false)} className="rounded-full bg-foreground px-5 py-3 text-center text-xs font-semibold text-background">
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
    <section id="top" className="relative isolate overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32 lg:pt-52 lg:pb-44">
      {/* Layered gradient mesh background */}
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-mesh)" }} />
      {/* Subtle stone image, very faded */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.18] mix-blend-luminosity">
        <img src={heroImg} alt="" className="h-full w-full object-cover" width={1920} height={1280} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
      </div>
      {/* Floating glow orbs */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[oklch(0.45_0.18_290)/0.25] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-[oklch(0.78_0.14_80)/0.18] blur-3xl" />

      <div className="container-px mx-auto max-w-6xl">
        <div className="mx-auto flex flex-col items-center text-center">
          <div className="mb-7 inline-flex items-center gap-2.5 rounded-full glass px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-foreground/75">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--gold)] opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[color:var(--gold)]" />
            </span>
            Family Atelier · Est. California
          </div>

          <h1 className="max-w-5xl text-[2.5rem] leading-[1] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            <span className="text-gradient-light">Memorials,</span>
            <br />
            <span className="font-display italic text-gradient-gold">beautifully</span>
            <span className="text-gradient-light"> remembered.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-foreground/65 md:text-lg">
            Hand-crafted granite headstones and monuments — designed with you and installed at any cemetery in California.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5">
              Get a Free Quote
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a href={WHATSAPP_HREF} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.72_0.18_150)]/40 bg-[oklch(0.72_0.18_150)]/10 px-7 py-4 text-sm font-semibold text-[oklch(0.85_0.18_150)] backdrop-blur transition-colors hover:bg-[oklch(0.72_0.18_150)]/20">
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
            <a href="#gallery" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-4 text-sm font-semibold text-foreground/85 backdrop-blur transition-colors hover:bg-white/5">
              View Gallery
            </a>
          </div>

          {/* Pricing pill */}
          <div className="mt-8 inline-flex items-center gap-2 text-xs text-foreground/55">
            <Sparkles className="h-3.5 w-3.5 text-[color:var(--gold)]" />
            <span className="text-gradient-gold font-semibold">30–40% below</span>
            <span>traditional cemetery pricing</span>
          </div>
        </div>

        {/* Trust stats — Apple style horizontal rule */}
        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-3xl glass md:grid-cols-4">
          {[
            ["10+", "Years Crafting"],
            ["1000+", "Memorials Made"],
            ["All", "CA Cemeteries"],
            ["Statewide", "Delivery"],
          ].map(([k, v]) => (
            <div key={v} className="bg-background/40 p-6 text-center md:p-8">
              <div className="font-display text-3xl italic text-gradient-gold md:text-4xl">{k}</div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{v}</div>
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
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-foreground/65">
        <span className="h-1 w-1 rounded-full bg-[color:var(--gold)]" />
        {eyebrow}
      </div>
      <h2 className="text-balance text-3xl tracking-[-0.035em] text-foreground md:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">
        {title}{" "}
        {accent && <span className="font-display italic text-gradient-gold">{accent}</span>}
      </h2>
      {kicker && <p className="mt-5 text-base text-foreground/60 md:text-lg">{kicker}</p>}
    </div>
  );
}


const services = [
  { icon: Gem, title: "Custom Headstones", body: "Personalized granite memorials crafted with care and precision." },
  { icon: Square, title: "Flat Grave Markers", body: "Elegant cemetery markers available in a range of granite colors." },
  { icon: Mountain, title: "Upright Monuments", body: "Traditional upright memorials with timeless silhouettes." },
  { icon: Users, title: "Companion Headstones", body: "Memorials thoughtfully designed for couples and families." },
  { icon: Armchair, title: "Memorial Benches", body: "Beautiful, functional granite seating for reflection." },
  { icon: PencilRuler, title: "Custom Engraving", body: "Photos, artwork, religious symbols and meaningful inscriptions." },
];

function Services() {
  return (
    <section id="services" className="container-px mx-auto max-w-7xl py-24 md:py-32">
      <SectionHeader eyebrow="Our Services" title="Memorials Crafted For Every Tribute" kicker="From a single flat marker to a family monument — every piece is designed, carved and finished by our own artisans." />
      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map(({ icon: Icon, title, body }) => (
          <div key={title} className="group rounded-lg border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]">
            <div className="mb-5 grid h-12 w-12 place-items-center rounded-sm border border-[color:var(--gold)]/30 bg-[color:var(--gold)]/10 text-[color:var(--gold)] transition-colors group-hover:bg-[color:var(--gold)] group-hover:text-primary">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="font-serif text-2xl text-foreground">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const granites = [
  { name: "Picasso Green", img: gPicasso, desc: "Deep emerald with mineral movement" },
  { name: "Galaxy Black", img: gGalaxy, desc: "Jet black with silver flecks" },
  { name: "Bahama Blue", img: gBahama, desc: "Cool blue with crystalline grain" },
  { name: "India Red", img: gIndia, desc: "Rich red with black inclusions" },
  { name: "Gray Granite", img: gGray, desc: "Classic speckled neutral" },
  { name: "Custom Colors", img: null, desc: "Sourced to match your vision" },
];

function Granite() {
  return (
    <section id="granite" className="bg-[color:var(--cream)] py-24 md:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeader eyebrow="Granite Collection" title="Premium Stone, Hand-Selected" kicker="Each slab is reviewed for color depth, grain consistency and structural integrity before it enters our workshop." />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {granites.map((g) => (
            <div key={g.name} className="group overflow-hidden rounded-lg bg-card shadow-[var(--shadow-soft)]">
              <div className="relative aspect-[4/3] overflow-hidden">
                {g.img ? (
                  <img src={g.img} alt={`${g.name} granite sample`} loading="lazy" width={800} height={600} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                ) : (
                  <div className="grid h-full w-full place-items-center bg-primary text-primary-foreground">
                    <Gem className="h-10 w-10 text-[color:var(--gold)]" />
                  </div>
                )}
              </div>
              <div className="flex items-center justify-between gap-3 p-5">
                <div>
                  <h3 className="font-serif text-xl text-foreground">{g.name}</h3>
                  <p className="text-xs text-muted-foreground">{g.desc}</p>
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[color:var(--gold)]">Polished</span>
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
        {reasons.map((r) => (
          <div key={r.v} className="border-t border-[color:var(--gold)] pt-6">
            <div className="font-serif text-4xl text-foreground">{r.k}</div>
            <div className="mt-1 text-sm uppercase tracking-[0.2em] text-muted-foreground">{r.v}</div>
            <p className="mt-4 text-sm leading-relaxed text-foreground/70">{r.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-primary text-primary-foreground py-24 md:py-32">
      <div className="container-px mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="relative">
          <img src={aboutImg} alt="Stonemason crafting a memorial in the Rumi Stone workshop" loading="lazy" width={1400} height={1000} className="rounded-lg object-cover shadow-[var(--shadow-elegant)]" />
          <div className="absolute -bottom-6 -right-6 hidden rounded-lg bg-[color:var(--gold)] p-6 text-primary md:block">
            <div className="font-serif text-4xl leading-none">1000+</div>
            <div className="mt-1 text-xs uppercase tracking-[0.2em]">Memorials</div>
          </div>
        </div>
        <div>
          <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">
            <span className="inline-block h-px w-10 bg-[color:var(--gold)]" />
            About Rumi Stone
          </div>
          <h2 className="font-serif text-3xl leading-tight md:text-5xl">
            Crafting memories that last <span className="italic text-[color:var(--gold)]">generations</span>.
          </h2>
          <div className="mt-6 space-y-5 text-white/80">
            <p>
              At Rumi Stone, we understand that a memorial is more than stone — it is a lasting tribute to a loved one's life. Our skilled craftsmen combine traditional monument-making techniques with modern artistry to honor each individual with dignity and grace.
            </p>
            <p>
              As a family-owned business, we work closely with every family we serve. Every monument tells a unique story and preserves cherished memories for generations to come.
            </p>
          </div>
          <a href="#contact" className="mt-8 inline-flex items-center gap-2 border-b border-[color:var(--gold)] pb-1 text-sm font-medium uppercase tracking-wider text-[color:var(--gold)]">
            Learn more about us <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

const gallery = [
  { src: galUpright, cat: "Upright", label: "Arched Upright Monument", span: "row-span-2" },
  { src: galFlat, cat: "Flat", label: "Flat Granite Marker", span: "" },
  { src: galCompanion, cat: "Companion", label: "Companion Headstone", span: "" },
  { src: galReligious, cat: "Religious", label: "Cross-Carved Memorial", span: "row-span-2" },
  { src: galEngraving, cat: "Engraving", label: "Hand Engraving Detail", span: "" },
  { src: galBench, cat: "Bench", label: "Granite Memorial Bench", span: "" },
];
const galleryCats = ["All", "Upright", "Flat", "Companion", "Religious", "Bench", "Engraving"];

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
            className={`rounded-full border px-4 py-1.5 text-xs uppercase tracking-wider transition-colors ${
              active === c
                ? "border-[color:var(--gold)] bg-[color:var(--gold)] text-primary"
                : "border-border text-foreground/70 hover:border-primary/40"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="mt-10 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((g) => (
          <figure key={g.label} className={`group relative overflow-hidden rounded-lg ${g.span}`}>
            <img src={g.src} alt={g.label} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/85 via-primary/30 to-transparent p-4 text-primary-foreground">
              <div className="text-[10px] uppercase tracking-[0.25em] text-[color:var(--gold)]">{g.cat}</div>
              <div className="font-serif text-lg">{g.label}</div>
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
          {testimonials.map((t) => (
            <figure key={t.name} className="flex h-full flex-col rounded-lg border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
              <div className="flex gap-1 text-[color:var(--gold)]">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <blockquote className="mt-5 flex-1 font-serif text-lg italic leading-relaxed text-foreground/85">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <div className="font-medium text-foreground">{t.name}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{t.city}</div>
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
  { icon: Truck, title: "Installation", body: "Professional delivery and on-site installation at the cemetery." },
];

function Process() {
  return (
    <section id="process" className="container-px mx-auto max-w-7xl py-24 md:py-32">
      <SectionHeader eyebrow="Our Process" title="Four Thoughtful Steps" kicker="A guided experience from your first conversation to the moment the memorial is set in place." />
      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map(({ icon: Icon, title, body }, i) => (
          <div key={title} className="relative rounded-lg border border-border bg-card p-8">
            <div className="absolute -top-5 left-8 grid h-10 w-10 place-items-center rounded-full bg-[color:var(--gold)] font-serif text-lg text-primary">
              {i + 1}
            </div>
            <Icon className="mt-2 h-7 w-7 text-[color:var(--gold)]" />
            <h3 className="mt-4 font-serif text-xl text-foreground">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const cities = ["San Francisco", "Oakland", "San Jose", "Hayward", "Fremont", "Sacramento", "Central Valley", "Los Angeles"];

function Coverage() {
  return (
    <section className="bg-primary text-primary-foreground py-24 md:py-32">
      <div className="container-px mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr,1fr]">
        <div>
          <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">
            <span className="inline-block h-px w-10 bg-[color:var(--gold)]" /> Coverage Area
          </div>
          <h2 className="font-serif text-3xl leading-tight md:text-5xl">
            We work with <span className="italic text-[color:var(--gold)]">every cemetery</span> in California.
          </h2>
          <p className="mt-5 max-w-lg text-white/75">
            From the Bay Area to the Central Valley and down to Los Angeles — our team handles permitting, delivery and installation at any California cemetery.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
            {cities.map((c) => (
              <div key={c} className="flex items-center gap-2 text-sm text-white/85">
                <MapPin className="h-4 w-4 text-[color:var(--gold)]" /> {c}
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] rounded-lg border border-white/15 bg-white/[0.04] p-6 backdrop-blur">
            <svg viewBox="0 0 200 320" className="h-full w-full" xmlns="http://www.w3.org/2000/svg" aria-label="Stylized map of California">
              <path
                d="M55 10 L72 8 L80 22 L92 30 L100 50 L96 72 L108 90 L120 110 L128 134 L140 160 L156 188 L168 220 L172 248 L160 274 L138 296 L112 308 L88 304 L78 282 L70 256 L58 230 L46 200 L40 170 L36 138 L42 108 L48 78 L50 48 Z"
                fill="oklch(0.32 0.06 260)"
                stroke="var(--gold)"
                strokeWidth="1"
              />
              {[
                [70, 70], [78, 100], [90, 140], [100, 175], [120, 200],
                [135, 230], [150, 260], [115, 290],
              ].map(([x, y], i) => (
                <g key={i}>
                  <circle cx={x} cy={y} r="3" fill="var(--gold)" />
                  <circle cx={x} cy={y} r="8" fill="var(--gold)" opacity="0.15" />
                </g>
              ))}
            </svg>
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
      <div className="mt-12 divide-y divide-border border-y border-border">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="font-serif text-lg text-foreground md:text-xl">{f.q}</span>
                <ChevronDown className={`h-5 w-5 shrink-0 text-[color:var(--gold)] transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </button>
              {isOpen && (
                <div className="pb-6 pr-10 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {f.a}
                </div>
              )}
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
          <div className="mt-10 space-y-5">
            <a href={PHONE_HREF} className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-sm bg-[color:var(--gold)] text-primary"><Phone className="h-4 w-4" /></span>
              <span>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Phone</div>
                <div className="font-serif text-lg text-primary-foreground">{PHONE}</div>
              </span>
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-sm bg-[color:var(--gold)] text-primary"><Mail className="h-4 w-4" /></span>
              <span>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                <div className="font-serif text-lg text-primary-foreground">{EMAIL}</div>
              </span>
            </a>
            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-sm bg-[color:var(--gold)] text-primary"><MapPin className="h-4 w-4" /></span>

              <span>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Service Area</div>
                <div className="font-serif text-lg text-primary-foreground">All of California</div>
              </span>
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="rounded-lg border border-border bg-card p-7 shadow-[var(--shadow-elegant)] md:p-10"
        >
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
              <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-[color:var(--gold)] px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary transition-transform hover:-translate-y-0.5">
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
  return <span className="text-xs uppercase tracking-wider text-muted-foreground">{children}</span>;
}
function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <Label>{label}{required && " *"}</Label>
      <input name={name} type={type} required={required} className="mt-1.5 w-full rounded-sm border border-input bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none" />
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

function StickyMobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 px-4 pb-4 lg:hidden">
      <div className="grid grid-cols-3 gap-2 rounded-full glass p-1.5 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]">
        <a href={PHONE_HREF} className="flex items-center justify-center gap-2 rounded-full py-3 text-xs font-semibold text-foreground/85">
          <Phone className="h-4 w-4" /> Call
        </a>
        <a href={WHATSAPP_HREF} target="_blank" rel="noopener" className="flex items-center justify-center gap-2 rounded-full bg-[oklch(0.72_0.18_150)]/15 py-3 text-xs font-semibold text-[oklch(0.85_0.18_150)]">
          <MessageCircle className="h-4 w-4" /> Chat
        </a>
        <a href="#contact" className="flex items-center justify-center gap-1 rounded-full bg-foreground py-3 text-xs font-semibold text-background">
          Quote <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}

function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-24 right-5 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-[oklch(0.72_0.18_150)] text-white shadow-[0_10px_40px_-10px_oklch(0.72_0.18_150)] transition-transform hover:scale-110 lg:flex lg:bottom-6"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute right-full mr-3 hidden whitespace-nowrap rounded-full glass px-3 py-1.5 text-xs font-medium text-foreground group-hover:block">
        Chat on WhatsApp
      </span>
    </a>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background pb-24 lg:pb-0">
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
      <StickyMobileBar />
      <WhatsAppFloat />
    </div>
  );
}


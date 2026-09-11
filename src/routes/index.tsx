import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Square, Mountain, Sparkles, Heart, DollarSign } from "lucide-react";
import {
  EMAIL,
  PHONE,
  PHONE_HREF,
  SITE_URL,
  SectionHeader,
  SiteShell,
} from "@/components/site/SiteLayout";
import heroImg from "@/assets/hero-memorial.jpg";
import heroGardenImg from "@/assets/hero-memorial-garden-right.jpg";
import heroFlowersImg from "@/assets/hero-flowers.png";
import gGalaxy from "@/assets/granite-galaxy-black.jpg";
import gBahama from "@/assets/granite-bahama-blue.jpg";
import gIndia from "@/assets/granite-india-red.jpg";
import gGray from "@/assets/granite-gray.jpg";
import gBluePearl from "@/assets/Blue Pearl Granite.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Affordable Headstones & Grave Markers | Bay Area | Rumi Stone" },
      {
        name: "description",
        content:
          "Beautiful, personalized headstones and grave markers in the Bay Area and across California. Custom designs, caring service, honest pricing. Get a free quote today.",
      },
      { property: "og:title", content: "Affordable Headstones & Grave Markers | Bay Area | Rumi Stone" },
      { property: "og:description", content: "Beautiful, personalized memorials — crafted with care, priced with kindness. Serving all of California." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:image", content: `${SITE_URL}${heroImg}` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `${SITE_URL}${heroImg}` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
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
          url: SITE_URL,
          areaServed: "California",
          image: `${SITE_URL}${heroImg}`,
          priceRange: "$$",
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteShell>
      <Hero />
      <WhyUs />
      <ProductsPreview />
      <GranitePreview />
      <ClosingCTA />
    </SiteShell>
  );
}

const heroStats = [
  ["10+", "Years Crafting", "Over a decade of meaningful memorial craftsmanship."],
  ["1000+", "Memorials Made", "Thousands of families served with care."],
  ["Family-Owned", "Personal Service", "Built around personal service and care."],
  ["Bay Area", "Local Craft", "Local craftsmanship, personal service."],
];

function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Cinematic background */}
      <div className="absolute inset-0 -z-20">
        <img
          src={heroGardenImg}
          alt="Sunlit memorial garden with a crafted granite headstone surrounded by flowers"
          width={1920}
          height={1088}
          fetchPriority="high"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,oklch(0.17_0.025_250/0.9)_0%,oklch(0.18_0.025_250/0.76)_34%,oklch(0.2_0.025_250/0.3)_55%,transparent_76%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-[linear-gradient(180deg,transparent,oklch(0.17_0.025_250/0.58))]" />

      {/* Flowers — gentle breeze on hover */}
      <img
        src={heroFlowersImg}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={1024}
        height={768}
        className="hero-flowers pointer-events-auto absolute -bottom-8 right-[3%] -z-10 hidden w-[210px] select-none opacity-90 mix-blend-multiply drop-shadow-[0_18px_28px_oklch(0.2_0.03_250/0.25)] md:block lg:w-[280px]"
      />

      <div className="container-px relative mx-auto max-w-[1600px] pt-16 pb-16 md:pt-24 md:pb-24">
        <div className="max-w-[43rem]">
          <div className="hero-in mb-6 inline-flex max-w-full items-start gap-2.5 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-white/85 backdrop-blur-md sm:items-center sm:py-1.5 sm:text-[12px] sm:tracking-[0.24em]" style={{ animationDelay: "80ms" }}>
            <span className="relative mt-[5px] flex h-1.5 w-1.5 shrink-0 sm:mt-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--gold)] opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[color:var(--gold)]" />
            </span>
            <span className="text-left">Family-Owned • Serving Bay Area Families</span>
          </div>

          <h1
            className="hero-in text-balance font-bold text-white drop-shadow-[0_2px_18px_oklch(0.18_0.03_250/0.6)]"
            style={{ fontSize: "clamp(2.65rem, 5.7vw, 5rem)", animationDelay: "220ms" }}
          >
            Memorials Made With <span className="italic text-[color:var(--gold)]">Care.</span>
          </h1>

          <p className="hero-in mt-6 max-w-2xl text-[17px] leading-[1.8] text-white/90 md:text-[19px]" style={{ animationDelay: "400ms" }}>
            Custom headstones and grave markers for Bay Area families — thoughtfully designed,
            beautifully crafted, and priced with compassion.
          </p>

          <div className="hero-in mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center" style={{ animationDelay: "580ms" }}>
            <Link
              to="/quote"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-[14px] font-semibold tracking-wide text-foreground shadow-[0_14px_34px_-14px_oklch(0.18_0.03_250/0.7)] transition-all duration-300 hover:-translate-y-0.5 sm:w-auto"
            >
              Get a Free Quote
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <a
              href={PHONE_HREF}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/35 bg-white/10 px-7 py-4 text-[14px] font-semibold tracking-wide text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20 sm:w-auto"
            >
              Call {PHONE}
            </a>
          </div>
        </div>

        {/* Trust panel */}
        <div className="hero-in mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/25 bg-white/20 shadow-[var(--shadow-elegant)] backdrop-blur-md sm:grid-cols-2 lg:grid-cols-4" style={{ animationDelay: "760ms" }}>
          {heroStats.map(([k, label, body]) => (
            <div key={label} className="min-w-0 bg-white/80 p-6 text-center transition-colors duration-300 hover:bg-white">
              <div className="font-serif text-[1.75rem] italic text-gradient-gold sm:text-3xl">{k}</div>
              <div className="mt-1.5 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">{label}</div>
              <p className="mt-2 text-[13px] leading-[1.6] text-foreground/70">{body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

const whyItems = [
  { icon: DollarSign, title: "Honest Pricing", body: "Significant savings compared to traditional retailers — no showroom overhead, no pressure." },
  { icon: Sparkles, title: "Fully Custom", body: "Your design, your words, your stone. We craft it exactly as you imagine." },
  { icon: Heart, title: "Caring Guidance", body: "We walk with you gently through every step of the process." },
];

function WhyUs() {
  return (
    <section className="container-px mx-auto max-w-[1600px] py-24 md:py-32">
      <SectionHeader eyebrow="Why Rumi Stone" title="Memorials Made" accent="Personal" />
      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {whyItems.map(({ icon: Icon, title, body }, i) => (
          <div
            key={title}
            data-reveal
            data-reveal-delay={i * 70}
            className="reveal surface-card surface-card-hover group relative overflow-hidden rounded-2xl p-8"
          >
            <div className="mb-6 grid h-12 w-12 place-items-center rounded-xl border border-[color:var(--gold)]/25 bg-[linear-gradient(135deg,oklch(0.95_0.03_235),oklch(0.9_0.05_235))] text-[color:var(--gold)] shadow-[0_6px_16px_-8px_oklch(0.55_0.12_240/0.4)] transition-all duration-500 group-hover:scale-105 group-hover:bg-[color:var(--gold)] group-hover:text-white">
              <Icon className="h-5 w-5" strokeWidth={1.75} />
            </div>
            <h3 className="text-[1.4rem] text-foreground">{title}</h3>
            <p className="mt-3 text-[14.5px] leading-[1.7] text-muted-foreground">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProductsPreview() {
  const products = [
    {
      icon: Square,
      title: "Flat Markers",
      body: "Elegant, ground-level memorials in premium granite. A timeless, understated tribute.",
    },
    {
      icon: Mountain,
      title: "Upright Monuments",
      body: "Timeless standing headstones, fully personalized. Made to be remembered.",
    },
  ];
  return (
    <section className="bg-[color:var(--cream)] py-24 md:py-32">
      <div className="container-px mx-auto max-w-[1600px]">
        <SectionHeader eyebrow="What We Create" title="Two Beautiful Ways to" accent="Remember" />
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {products.map(({ icon: Icon, title, body }, i) => (
            <div
              key={title}
              data-reveal
              data-reveal-delay={i * 100}
              className="reveal surface-card surface-card-hover group relative overflow-hidden rounded-2xl p-10"
            >
              <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl border border-[color:var(--gold)]/25 bg-white text-[color:var(--gold)] shadow-[0_6px_16px_-8px_oklch(0.55_0.12_240/0.4)]">
                <Icon className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <h3 className="text-[1.65rem] text-foreground">{title}</h3>
              <p className="mt-3 text-[15px] leading-[1.7] text-muted-foreground">{body}</p>
              <Link
                to="/headstones-markers"
                className="mt-6 inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.22em] text-[color:var(--gold)]"
              >
                View {title} <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GranitePreview() {
  const previews = [
    { img: gGalaxy, name: "Absolute Black" },
    { img: gGray, name: "Standard Gray" },
    { img: gIndia, name: "India Red" },
    { img: gBahama, name: "Bahama Blue" },
    { img: gBluePearl, name: "Blue Pearl" },
  ];
  return (
    <section className="container-px mx-auto max-w-[1600px] py-24 md:py-32">
      <SectionHeader eyebrow="Granite Collection" title="Choose Your" accent="Granite" kicker="Explore rich, lasting colors — from classic Black to striking Blue Pearl." />
      <div className="mt-14 grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {previews.map((g, i) => (
          <div key={g.name} data-reveal data-reveal-delay={i * 50} className="reveal img-zoom group overflow-hidden rounded-2xl ring-1 ring-black/5 shadow-[var(--shadow-soft)]">
            <div className="aspect-square">
              <img src={g.img} alt={`${g.name} granite`} loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="bg-white p-3 text-center text-[12px] font-medium tracking-tight text-foreground">{g.name}</div>
          </div>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Link to="/granite-colors" className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-foreground/85 hover:bg-foreground hover:text-background">
          See All Colors <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </section>
  );
}

function ClosingCTA() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,oklch(0.28_0.045_250),oklch(0.2_0.03_250))] py-24 md:py-32 text-primary-foreground">
      <div className="pointer-events-none absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-[oklch(0.55_0.12_240/0.25)] blur-3xl" />
      <div className="container-px mx-auto max-w-3xl text-center">
        <div className="mb-4 flex items-center justify-center gap-3 text-[11px] uppercase tracking-[0.32em] text-[color:var(--gold)]">
          <span className="inline-block h-px w-10 bg-[color:var(--gold)]" /> Ready When You Are
        </div>
        <h2 className="text-primary-foreground">
          Let's create something <span className="italic text-[color:var(--gold)]">beautiful together</span>.
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-[15.5px] leading-[1.75] text-white/75">
          Tell us about your loved one. We'll handle the rest — with care.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/quote" className="group inline-flex items-center gap-2 rounded-full bg-[color:var(--gold)] px-7 py-4 text-[13px] font-semibold tracking-wide text-white shadow-[0_12px_30px_-12px_oklch(0.55_0.12_240/0.55)] transition-all duration-300 hover:-translate-y-0.5">
            Get a Free Quote <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
          <a href={PHONE_HREF} className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-4 text-[13px] font-semibold tracking-wide text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15">
            Call {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}

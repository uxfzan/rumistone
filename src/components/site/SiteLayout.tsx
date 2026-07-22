import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Menu, X, MessageCircle, ArrowUpRight, ArrowRight, MapPin, ChevronDown } from "lucide-react";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const PHONE = "(510) 555-0142";
export const PHONE_HREF = "tel:+15105550142";
export const WHATSAPP_NUMBER = "15105550142";
export const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi Rumi Stone, I'd like a quote for a memorial.",
)}`;
export const EMAIL = "hello@rumistone.com";
export const SITE_URL = "https://rumistone.lovable.app";

export const NAV_LINKS: Array<[string, string]> = [
  ["Home", "/"],
  ["About", "/about"],
  ["Headstones & Markers", "/headstones-markers"],
  ["Granite Colors", "/granite-colors"],
  ["Gallery", "/gallery"],
  ["How It Works", "/how-it-works"],
  ["Reviews", "/reviews"],
  ["FAQ", "/faq"],
];

type NavItem =
  | { kind: "link"; label: string; to: string; exact?: boolean }
  | { kind: "menu"; label: string; items: Array<{ label: string; to: string; description?: string }> };

const PRIMARY_NAV: NavItem[] = [
  { kind: "link", label: "Home", to: "/", exact: true },
  {
    kind: "menu",
    label: "Memorials",
    items: [
      { label: "Headstones & Markers", to: "/headstones-markers", description: "Flat markers & upright monuments" },
      { label: "Granite Colors", to: "/granite-colors", description: "Explore our 9 premium stones" },
    ],
  },
  {
    kind: "menu",
    label: "Resources",
    items: [
      { label: "About", to: "/about", description: "Our story & craftsmanship" },
      { label: "How It Works", to: "/how-it-works", description: "Our 3-step process" },
      { label: "Reviews", to: "/reviews", description: "What families say" },
      { label: "FAQ", to: "/faq", description: "Common questions answered" },
    ],
  },
  { kind: "link", label: "Gallery", to: "/gallery" },
];


export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`group flex items-center gap-3 ${className}`}>
      <span className="relative grid h-10 w-10 place-items-center rounded-full bg-[linear-gradient(135deg,oklch(0.55_0.12_240),oklch(0.35_0.09_250))] text-white shadow-[0_8px_24px_-8px_oklch(0.35_0.09_250/0.55)] ring-1 ring-white/30 transition-transform duration-500 group-hover:scale-105">
        <span className="font-serif text-xl leading-none italic tracking-tight">R</span>
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-[15px] font-semibold tracking-tight text-foreground">Rumi Stone</span>
        <span className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">Memorial Atelier</span>
      </span>
    </Link>
  );
}

function DesktopMenu({ label, items }: { label: string; items: Array<{ label: string; to: string; description?: string }> }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  useEffect(() => () => cancelClose(), []);

  const isActive = items.some((i) => typeof window !== "undefined" && window.location.pathname === i.to);

  return (
    <div className="relative" onMouseEnter={() => { cancelClose(); setOpen(true); }} onMouseLeave={scheduleClose}>
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        onFocus={() => { cancelClose(); setOpen(true); }}
        className={`relative inline-flex items-center gap-1 text-[15px] font-medium tracking-wide transition-colors hover:text-foreground ${isActive ? "text-foreground" : "text-foreground/70"}`}
      >
        {label}
        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <div
        role="menu"
        className={`absolute left-1/2 top-full z-50 mt-3 w-80 -translate-x-1/2 rounded-2xl border border-border/60 bg-white p-2 shadow-[0_24px_60px_-20px_oklch(0.22_0.02_250/0.35)] transition-all duration-200 ${open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0"}`}
      >
        {items.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            role="menuitem"
            onClick={() => setOpen(false)}
            className="group flex flex-col rounded-xl px-3.5 py-3 transition-colors hover:bg-black/5 data-[status=active]:bg-black/5"
          >
            <span className="text-[15px] font-semibold text-foreground">{item.label}</span>
            {item.description && (
              <span className="mt-1 text-[13px] leading-snug text-foreground/70">{item.description}</span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full glass-strong px-4 py-2.5 shadow-[0_10px_40px_-16px_oklch(0.22_0.02_250/0.25)]">
        <Logo />
        <nav className="hidden items-center gap-6 xl:flex">
          {PRIMARY_NAV.map((item) =>
            item.kind === "link" ? (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: !!item.exact }}
                className="relative text-[13px] font-medium tracking-wide text-foreground/70 transition-colors hover:text-foreground data-[status=active]:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-[color:var(--gold)] after:transition-transform after:duration-500 hover:after:origin-left hover:after:scale-x-100 data-[status=active]:after:origin-left data-[status=active]:after:scale-x-100"
              >
                {item.label}
              </Link>
            ) : (
              <DesktopMenu key={item.label} label={item.label} items={item.items} />
            ),
          )}
        </nav>
        <div className="hidden items-center gap-2 xl:flex">
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener"
            aria-label="Chat on WhatsApp"
            className="btn-whatsapp inline-flex h-10 items-center gap-2 rounded-full px-4 text-[12px] font-semibold tracking-wide"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={2.4} /> WhatsApp
          </a>
          <Link
            to="/quote"
            className="group inline-flex h-10 items-center gap-1.5 rounded-full bg-foreground px-5 text-[12px] font-semibold tracking-wide text-background shadow-[0_8px_20px_-8px_oklch(0.2_0.02_250/0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_-10px_oklch(0.2_0.02_250/0.55)]"
          >
            Free Quote <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="grid h-10 w-10 place-items-center rounded-full border border-border bg-white text-foreground shadow-[var(--shadow-xs)] xl:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="mx-auto mt-2 max-w-7xl rounded-3xl glass p-4 xl:hidden">
          <div className="flex flex-col gap-1">
            {PRIMARY_NAV.map((item) =>
              item.kind === "link" ? (
                <Link
                  key={item.to}
                  to={item.to}
                  activeOptions={{ exact: !!item.exact }}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-3 py-2.5 text-base font-medium text-foreground/85 hover:bg-black/5 data-[status=active]:bg-black/5 data-[status=active]:text-foreground"
                >
                  {item.label}
                </Link>
              ) : (
                <div key={item.label} className="rounded-2xl">
                  <button
                    type="button"
                    onClick={() => setOpenGroup((g) => (g === item.label ? null : item.label))}
                    aria-expanded={openGroup === item.label}
                    className="flex w-full items-center justify-between rounded-2xl px-3 py-2.5 text-base font-medium text-foreground/85 hover:bg-black/5"
                  >
                    {item.label}
                    <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${openGroup === item.label ? "rotate-180" : ""}`} />
                  </button>
                  {openGroup === item.label && (
                    <div className="mt-1 ml-2 flex flex-col gap-0.5 border-l border-border/60 pl-3">
                      {item.items.map((sub) => (
                        <Link
                          key={sub.to}
                          to={sub.to}
                          onClick={() => { setOpen(false); setOpenGroup(null); }}
                          className="rounded-xl px-3 py-2 text-[15px] font-medium text-foreground/80 hover:bg-black/5 data-[status=active]:bg-black/5 data-[status=active]:text-foreground"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ),
            )}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener"
                onClick={() => setOpen(false)}
                className="btn-whatsapp flex items-center justify-center gap-2 rounded-full px-4 py-3 text-xs font-semibold"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={2.4} /> WhatsApp
              </a>
              <Link
                to="/quote"
                onClick={() => setOpen(false)}
                className="rounded-full bg-foreground px-5 py-3 text-center text-xs font-semibold text-background shadow-[var(--shadow-soft)]"
              >
                Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}


export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-px mx-auto max-w-7xl py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Logo className="[&_span]:text-primary-foreground" />
            <p className="mt-4 text-sm text-white/70">
              Affordable, personalized headstones and markers crafted with care for California families.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-[color:var(--gold)]">Quick Links</div>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              {NAV_LINKS.map(([label, to]) => (
                <li key={to}>
                  <Link to={to} className="hover:text-white">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-[color:var(--gold)]">Service Areas</div>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>San Francisco Bay Area</li>
              <li>San Jose · Hayward · Fremont</li>
              <li>Sacramento · Central Valley</li>
              <li>Los Angeles</li>
              <li>Statewide California</li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-[color:var(--gold)]">Contact</div>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li><a href={PHONE_HREF} className="hover:text-white">{PHONE}</a></li>
              <li><a href={`mailto:${EMAIL}`} className="hover:text-white">{EMAIL}</a></li>
              <li className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-[color:var(--gold)]" /> All of California</li>
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

export function WhatsAppFloat() {
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

export function SectionHeader({
  eyebrow,
  title,
  accent,
  kicker,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  kicker?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div data-reveal className="reveal mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-3.5 py-1 text-[11px] font-medium uppercase tracking-[0.24em] text-foreground/70 shadow-[var(--shadow-xs)] backdrop-blur">
        <span className="h-1 w-1 rounded-full bg-[color:var(--gold)]" />
        {eyebrow}
      </div>
      <h2 data-reveal data-reveal-delay="80" className="reveal text-balance text-foreground">
        {title} {accent && <span className="italic text-gradient-gold">{accent}</span>}
      </h2>
      {kicker && (
        <p data-reveal data-reveal-delay="160" className="reveal mt-5 text-[15px] leading-[1.7] text-foreground/60 md:text-lg">
          {kicker}
        </p>
      )}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  accent,
  subtitle,
  cta,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  subtitle: string;
  cta?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-mesh)" }} />
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[oklch(0.82_0.08_235/0.3)] blur-3xl" />
      <div className="container-px mx-auto max-w-4xl text-center">
        <div data-reveal className="reveal mb-6 inline-flex items-center gap-2.5 rounded-full glass px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.24em] text-foreground/75 shadow-[var(--shadow-xs)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold)]" />
          {eyebrow}
        </div>
        <h1 data-reveal data-reveal-delay="80" className="reveal text-balance">
          <span className="text-gradient-light">{title}</span>{" "}
          {accent && <span className="italic text-gradient-gold">{accent}</span>}
        </h1>
        <p data-reveal data-reveal-delay="180" className="reveal mx-auto mt-6 max-w-2xl text-[16px] leading-[1.7] text-foreground/65 md:text-lg">
          {subtitle}
        </p>
        {cta && <div data-reveal data-reveal-delay="260" className="reveal mt-9 flex flex-wrap items-center justify-center gap-3">{cta}</div>}
      </div>
    </section>
  );
}

export function QuoteCTA({
  heading = "Let's Create Something Beautiful Together",
  body = "Tell us about your loved one. We'll handle the rest — with care.",
}: {
  heading?: string;
  body?: string;
}) {
  return (
    <section className="bg-[color:var(--cream)] py-20 md:py-28">
      <div className="container-px mx-auto max-w-3xl text-center">
        <h2 data-reveal className="reveal text-foreground">
          {heading.split(" ").slice(0, -2).join(" ")}{" "}
          <span className="italic text-gradient-gold">{heading.split(" ").slice(-2).join(" ")}</span>
        </h2>
        <p data-reveal data-reveal-delay="80" className="reveal mx-auto mt-5 max-w-xl text-[15px] leading-[1.7] text-foreground/65 md:text-[16px]">
          {body}
        </p>
        <div data-reveal data-reveal-delay="160" className="reveal mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/quote"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-4 text-[13px] font-semibold tracking-wide text-background shadow-[0_12px_30px_-12px_oklch(0.2_0.02_250/0.55)] transition-all duration-300 hover:-translate-y-0.5"
          >
            Get a Free Quote
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-7 py-4 text-[13px] font-semibold tracking-wide text-foreground/85 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[var(--shadow-soft)]"
          >
            Call {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  useScrollReveal();
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>{children}</main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

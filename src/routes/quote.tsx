import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Phone, Mail, MapPin, MessageCircle, ArrowRight } from "lucide-react";
import { EMAIL, PHONE, PHONE_HREF, SITE_URL, SiteShell, WHATSAPP_HREF } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: "Get a Free Quote | Headstones & Markers | Rumi Stone" },
      {
        name: "description",
        content:
          "Request your free, no-pressure quote for a custom headstone or marker. Call or fill out our quick form. Serving all of California.",
      },
      { property: "og:title", content: "Get a Free Quote | Headstones & Markers | Rumi Stone" },
      { property: "og:description", content: "No pressure, no obligation — just honest guidance." },
      { property: "og:url", content: `${SITE_URL}/quote` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/quote` }],
  }),
  component: QuotePage,
});

function QuotePage() {
  const navigate = useNavigate();
  return (
    <SiteShell>
      <section className="relative isolate overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-mesh)" }} />
        <div className="container-px mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full glass px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.24em] text-foreground/75 shadow-[var(--shadow-xs)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold)]" />
            Free Quote
          </div>
          <h1 className="text-balance">
            <span className="text-gradient-light">Get Your</span>{" "}
            <span className="italic text-gradient-gold">Free Quote</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-[1.7] text-foreground/65 md:text-lg">
            No pressure, no obligation — just honest guidance.
          </p>
        </div>
      </section>

      <section className="bg-[color:var(--cream)] py-16 md:py-24">
        <div className="container-px mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr,1.3fr] lg:gap-16">
          <div>
            <h2 className="font-serif text-3xl text-foreground md:text-4xl">Contact details</h2>
            <p className="mt-4 text-muted-foreground">Prefer to talk directly? Reach us any way you like.</p>
            <div className="mt-8 space-y-3">
              <ContactRow icon={<Phone className="h-5 w-5" strokeWidth={2.2} />} href={PHONE_HREF} label="Phone" value={PHONE} />
              <ContactRow icon={<Mail className="h-5 w-5" strokeWidth={2.2} />} href={`mailto:${EMAIL}`} label="Email" value={EMAIL} />
              <ContactRow
                icon={<MessageCircle className="h-5 w-5" strokeWidth={2.4} />}
                href={WHATSAPP_HREF}
                label="WhatsApp"
                value="Chat with us instantly"
                iconClass="btn-whatsapp"
                external
              />
              <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground shadow-sm"><MapPin className="h-5 w-5" strokeWidth={2.2} /></span>
                <span>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/60">Service Area</div>
                  <div className="mt-0.5 text-[17px] font-semibold text-foreground">Bay Area + Statewide California</div>
                </span>
              </div>
            </div>
          </div>

          <form
  name="quote"
  method="POST"
  data-netlify="true"
  onSubmit={(e) => {
    e.preventDefault();
    navigate({ to: "/thank-you" });
  }}
  className="relative rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-elegant)] md:p-10"
>
            <div className="pointer-events-none absolute -inset-px rounded-2xl bg-[linear-gradient(140deg,oklch(0.55_0.12_240/0.15),transparent_40%)]" />
            <h2 className="font-serif text-2xl text-foreground">Request My Free Quote</h2>
            <p className="mt-1 text-sm text-muted-foreground">All fields help us prepare an accurate estimate.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" required />
              <Field label="Phone" name="phone" type="tel" required />
              <Field label="Email" name="email" type="email" required />
              <div>
                <Label>Memorial Type</Label>
                <select name="type" className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm">
                  <option>Flat Marker</option>
                  <option>Upright Monument</option>
                  <option>Not sure yet</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <Label>Message</Label>
                <textarea name="message" rows={4} className="mt-1.5 w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm" placeholder="Share any details, inscriptions or design ideas…" />
              </div>
            </div>
            <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-background transition-transform hover:-translate-y-0.5">
              Request My Free Quote <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>
    </SiteShell>
  );
}

function ContactRow({
  icon,
  href,
  label,
  value,
  iconClass,
  external,
}: {
  icon: ReactNode;
  href: string;
  label: string;
  value: string;
  iconClass?: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener" : undefined}
      className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:border-primary/40 hover:shadow-[var(--shadow-elegant)]"
    >
      <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-lg text-primary-foreground shadow-sm transition-transform duration-300 group-hover:scale-105 ${iconClass ?? "bg-primary"}`}>{icon}</span>
      <span>
        <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/60">{label}</div>
        <div className="mt-0.5 text-[17px] font-semibold text-foreground">{value}</div>
      </span>
    </a>
  );
}

function Label({ children }: { children: ReactNode }) {
  return <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-muted-foreground">{children}</span>;
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <Label>
        {label}
        {required && " *"}
      </Label>
      <input name={name} type={type} required={required} className="mt-1.5 w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm transition-all duration-200 focus:border-[color:var(--gold)] focus:outline-none focus:ring-4 focus:ring-[color:var(--gold)]/15" />
    </label>
  );
}

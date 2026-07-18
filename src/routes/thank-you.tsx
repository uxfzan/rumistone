import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PHONE, PHONE_HREF, SITE_URL, SiteShell } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title: "Thank You | Rumi Stone" },
      { name: "description", content: "Thank you for reaching out to Rumi Stone. We'll be in touch shortly." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:url", content: `${SITE_URL}/thank-you` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/thank-you` }],
  }),
  component: ThankYouPage,
});

function ThankYouPage() {
  return (
    <SiteShell>
      <section className="relative isolate overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
        <div className="container-px mx-auto max-w-2xl text-center">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[color:var(--gold)] text-white shadow-[0_12px_30px_-10px_oklch(0.55_0.12_240/0.6)]">
            <Check className="h-8 w-8" strokeWidth={2.5} />
          </div>
          <h1 className="mt-8 text-balance">
            <span className="text-gradient-light">Thank You —</span>{" "}
            <span className="italic text-gradient-gold">We've Got Your Request</span>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-[16px] leading-[1.7] text-foreground/65 md:text-lg">
            We'll be in touch within one business day. For anything urgent, please call us directly.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-4 text-[13px] font-semibold tracking-wide text-background transition-all duration-300 hover:-translate-y-0.5"
            >
              Return Home
            </Link>
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-7 py-4 text-[13px] font-semibold tracking-wide text-foreground/85 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white">
              Call {PHONE}
            </a>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

import { useState } from "react";
import {
  Phone,
  Truck,
  ShieldCheck,
  Repeat,
  HeartHandshake,
  ClipboardList,
  Package,
  HomeIcon,
  ArrowRight,
  Check,
  Mail,
  MapPin,
} from "lucide-react";

// Hero image lives in public/ (copied verbatim from the source's src/assets).
const heroImage = "/hero-bedroom.jpg";

const PHONE_DISPLAY = "(831) 555-0100";
const PHONE_HREF = "tel:+18315550100";

export default function LandingPage() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <TrustBar />
        <ThreePaths />
        <MedicareTeaser />
        <HowItWorks />
        <QuoteForm />
      </main>
      <SiteFooter />
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-border/70 bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a href="/" className="flex items-center gap-2" aria-label="CaringBeds home">
          <span
            aria-hidden="true"
            className="grid size-9 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground"
          >
            <HeartHandshake className="size-5" />
          </span>
          <span className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            CaringBeds
          </span>
        </a>
        <a
          href={PHONE_HREF}
          className="inline-flex min-h-11 items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground transition hover:bg-accent sm:text-base"
          aria-label={`Call CaringBeds at ${PHONE_DISPLAY}`}
        >
          <Phone className="size-4 shrink-0" aria-hidden="true" />
          <span className="hidden sm:inline">Call </span>
          <span>{PHONE_DISPLAY}</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">
            <ShieldCheck className="size-4" aria-hidden="true" />
            Trusted home care support
          </span>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Hospital Bed Rentals &amp; Sales for Home Care
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground sm:text-xl">
            Compassionate help finding the right bed for your loved one — rent, buy, or just get
            answers. We&rsquo;ll walk you through every step.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#quote"
              className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-cta px-7 py-3 text-base font-semibold text-cta-foreground shadow-sm transition hover:bg-cta-hover"
            >
              Get a Free Quote
              <ArrowRight className="size-5" aria-hidden="true" />
            </a>
            <a
              href="#paths"
              className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border-2 border-border bg-background px-7 py-3 text-base font-semibold text-foreground transition hover:border-primary/40 hover:bg-secondary"
            >
              Browse Beds
            </a>

          </div>
          <p className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
            <Check className="size-4 text-cta" aria-hidden="true" />
            No obligation. Talk to a real person, not a call center.
          </p>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-4xl bg-accent/50 blur-2xl" aria-hidden="true" />
          <img
            src={heroImage}
            alt="A comfortable adjustable home care bed in a warm, sunlit bedroom with soft linens"
            width={1536}
            height={1024}
            className="w-full rounded-3xl border border-border object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

const trustItems = [
  { icon: Truck, label: "Free delivery & setup" },
  { icon: ShieldCheck, label: "Medicare guidance" },
  { icon: Repeat, label: "Rent or buy" },
  { icon: HeartHandshake, label: "Local, caring service" },
];

function TrustBar() {
  return (
    <section aria-label="Why families choose CaringBeds" className="border-y border-border bg-secondary/60">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-8 sm:px-6 md:grid-cols-4">
        {trustItems.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3">
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-background text-primary">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <span className="text-sm font-semibold text-foreground sm:text-base">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

const paths = [
  {
    icon: Package,
    title: "Rent a Bed",
    body: "Short-term recovery or a changing situation? Flexible weekly and monthly rentals with free delivery.",
    href: "/rent",
    cta: "See rental options",
  },
  {
    icon: HomeIcon,
    title: "Buy a Bed",
    body: "Long-term care at home. We’ll help you choose a bed that fits your loved one and your space.",
    href: "/buy",
    cta: "Explore beds to buy",
  },

  {
    icon: ClipboardList,
    title: "Get Guidance",
    body: "Not sure what you need? Ask us about Medicare, sizing, mattresses, or safety rails.",
    href: "/guides",
    cta: "Read our guides",
  },
] as const;

function ThreePaths() {
  return (
    <section id="paths" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Three ways we can help today
        </h2>
        <p className="mt-3 text-lg text-muted-foreground">
          Every family&rsquo;s situation is different. Start wherever feels right — we&rsquo;ll take
          it from there.
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {paths.map(({ icon: Icon, title, body, href, cta }) => (
          <article
            key={title}
            className="flex flex-col rounded-3xl border border-border bg-card p-7 shadow-sm transition hover:border-primary/30 hover:shadow-md"
          >
            <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-accent text-primary">
              <Icon className="size-6" aria-hidden="true" />
            </span>
            <h3 className="mt-5 text-2xl font-bold text-foreground">{title}</h3>
            <p className="mt-3 flex-1 text-base text-muted-foreground">{body}</p>

            <a
              href={href}
              className="mt-6 inline-flex min-h-11 items-center gap-2 text-base font-semibold text-primary hover:underline"
            >
              {cta}
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function MedicareTeaser() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 md:pb-20">
      <div className="grid gap-6 rounded-3xl bg-warm p-8 sm:p-10 md:grid-cols-[auto_1fr_auto] md:items-center">
        <span
          aria-hidden="true"
          className="grid size-14 shrink-0 place-items-center rounded-2xl bg-background text-primary shadow-sm"
        >
          <ShieldCheck className="size-7" />
        </span>
        <div className="min-w-0">
          <h2 className="text-2xl font-bold text-warm-foreground sm:text-3xl">
            &ldquo;Does Medicare cover it?&rdquo;
          </h2>
          <p className="mt-2 text-base text-warm-foreground/85 sm:text-lg">
            It&rsquo;s the first thing most families ask. In many cases, yes — with a doctor&rsquo;s
            order. We&rsquo;ll walk you through what qualifies, in plain language.
          </p>
        </div>
        <a
          href="/guides"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition hover:bg-primary/90 md:justify-self-end"
        >
          Read the guide
          <ArrowRight className="size-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

const steps = [
  {
    n: "1",
    title: "Tell us your needs",
    body: "A quick call or form — no medical jargon, no pressure.",
  },
  {
    n: "2",
    title: "We match the right bed",
    body: "We recommend a bed and mattress that fits your loved one and your home.",
  },
  {
    n: "3",
    title: "We deliver & set it up",
    body: "Free local delivery and setup. We show you how everything works before we leave.",
  },
];

function HowItWorks() {
  return (
    <section className="bg-secondary/60 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            How it works
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Simple, unhurried, and human — from your first question to a bed set up at home.
          </p>
        </div>
        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <li
              key={s.n}
              className="relative rounded-3xl border border-border bg-card p-7 shadow-sm"
            >
              <span
                aria-hidden="true"
                className="grid size-10 place-items-center rounded-full bg-primary text-lg font-bold text-primary-foreground"
              >
                {s.n}
              </span>
              <h3 className="mt-4 text-xl font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-base text-muted-foreground">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    zip: "",
    need: "",
  });

  const update = (k: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setValues((v) => ({ ...v, [k]: e.target.value }));

  const handleSubmit = () => {
    // Placeholder submit — replace with backend when ready.
    setSubmitted(true);
  };

  return (
    <section id="quote" className="mx-auto max-w-4xl px-4 py-16 sm:px-6 md:py-24">
      <div className="rounded-4xl border border-border bg-card p-6 shadow-sm sm:p-10">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Request your free quote
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Tell us a little about your situation. No obligation — we&rsquo;ll call you back within
            one business day.
          </p>
        </div>

        {submitted ? (
          <div
            role="status"
            className="mt-8 flex items-start gap-4 rounded-2xl bg-accent p-6 text-accent-foreground"
          >
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-cta text-cta-foreground">
              <Check className="size-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-lg font-semibold">Thank you, {values.name || "friend"}.</p>
              <p className="mt-1 text-base">
                We&rsquo;ve received your request and will reach out within one business day at{" "}
                {values.phone || "the number you shared"}.
              </p>
            </div>
          </div>
        ) : (
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <Field id="name" label="Your name" value={values.name} onChange={update("name")} autoComplete="name" />
            <Field
              id="phone"
              label="Phone number"
              type="tel"
              value={values.phone}
              onChange={update("phone")}
              autoComplete="tel"
            />
            <Field
              id="email"
              label="Email"
              type="email"
              value={values.email}
              onChange={update("email")}
              autoComplete="email"
            />
            <Field
              id="zip"
              label="ZIP code"
              value={values.zip}
              onChange={update("zip")}
              autoComplete="postal-code"
              inputMode="numeric"
            />
            <div className="sm:col-span-2">
              <label htmlFor="need" className="block text-base font-semibold text-foreground">
                What do you need?
              </label>
              <select
                id="need"
                value={values.need}
                onChange={update("need")}
                className="mt-2 block h-13 w-full rounded-2xl border border-input bg-background px-4 text-base text-foreground shadow-sm focus:border-primary focus:outline-none"
              >
                <option value="">Choose one…</option>
                <option value="rent">Rent a bed</option>
                <option value="buy">Buy a bed</option>
                <option value="unsure">Not sure — I&rsquo;d like guidance</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <button
                type="button"
                onClick={handleSubmit}
                className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-cta px-8 py-4 text-lg font-semibold text-cta-foreground shadow-sm transition hover:bg-cta-hover"
              >
                Request My Free Quote
                <ArrowRight className="size-5" aria-hidden="true" />
              </button>
              <p className="mt-4 text-center text-sm text-muted-foreground">
                No obligation. We&rsquo;ll call within one business day.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  autoComplete,
  inputMode,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  autoComplete?: string;
  inputMode?: "numeric" | "text" | "tel" | "email";
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-base font-semibold text-foreground">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        inputMode={inputMode}
        className="mt-2 block h-13 w-full rounded-2xl border border-input bg-background px-4 text-base text-foreground shadow-sm focus:border-primary focus:outline-none"
      />
    </div>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/70">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="grid size-8 place-items-center rounded-full bg-primary text-primary-foreground"
              >
                <HeartHandshake className="size-4" />
              </span>
              <span className="text-lg font-bold text-foreground">CaringBeds</span>
            </div>
            <p className="mt-3 flex items-start gap-2 text-base text-muted-foreground">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <span>
                Proudly serving Salinas, Monterey &amp; the Central Coast.
                <br />
                <span className="text-sm">
                  Resources and guides for families nationwide.
                </span>
              </span>
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Contact
            </h2>
            <ul className="mt-3 space-y-2 text-base">
              <li>
                <a
                  href={PHONE_HREF}
                  className="inline-flex min-h-11 items-center gap-2 font-semibold text-foreground hover:text-primary"
                >
                  <Phone className="size-4" aria-hidden="true" />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@caringbeds.example"
                  className="inline-flex min-h-11 items-center gap-2 text-foreground hover:text-primary"
                >
                  <Mail className="size-4" aria-hidden="true" />
                  hello@caringbeds.example
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Explore
            </h2>
            <ul className="mt-3 grid grid-cols-2 gap-2 text-base">
              <li><a href="/about" className="inline-block min-h-11 py-2 text-foreground hover:text-primary">About</a></li>
              <li><a href="/guides" className="inline-block min-h-11 py-2 text-foreground hover:text-primary">Guides</a></li>
              <li><a href="/contact" className="inline-block min-h-11 py-2 text-foreground hover:text-primary">Contact</a></li>
              <li><a href="/privacy" className="inline-block min-h-11 py-2 text-foreground hover:text-primary">Privacy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} CaringBeds. All rights reserved.</p>
          <p>Made with care for families supporting loved ones at home.</p>
        </div>
      </div>
    </footer>
  );
}

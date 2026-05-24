"use client";

import type { SVGProps } from "react";

const socials = [
  { name: "TikTok", href: "#", Icon: TikTokIcon },
  { name: "Instagram", href: "#", Icon: InstagramIcon },
  { name: "Spotify", href: "#", Icon: SpotifyIcon },
  { name: "Deezer", href: "#", Icon: DeezerIcon },
  { name: "Facebook", href: "#", Icon: FacebookIcon },
];

const marqueeWords = [
  "storkful",
  "✦",
  "a gamified life",
  "✦",
  "delivery soon",
  "✦",
  "get in line",
  "✦",
];

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col overflow-hidden">
      {/* Background field */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 20%, #ff5ea8 0, transparent 38%), radial-gradient(circle at 82% 14%, #c6ff3d 0, transparent 36%), radial-gradient(circle at 50% 90%, #b9a6ff 0, transparent 42%), radial-gradient(circle at 90% 80%, #ff7a3d 0, transparent 30%)",
        }}
      />
      <div className="grain -z-10" aria-hidden />

      {/* Floating shapes */}
      <Blob className="absolute -left-24 top-24 size-72 bg-bubblegum/70 animate-blob" />
      <Blob
        className="absolute right-[-4rem] top-[28rem] size-80 bg-electric/60 animate-blob"
        style={{ animationDelay: "-6s" }}
      />
      <Blob
        className="absolute left-1/3 bottom-32 size-56 bg-acid/70 animate-blob"
        style={{ animationDelay: "-3s" }}
      />

      {/* Nav */}
      <header className="relative z-10 flex items-center justify-between px-6 py-5 sm:px-10">
        <div className="flex items-center gap-2 font-display text-2xl font-black tracking-tight">
          <span className="inline-block size-3 rounded-full bg-tangerine animate-pulse" />
          storkful
        </div>
        <a
          href="#waitlist"
          className="rounded-full border-2 border-ink bg-cream px-4 py-2 text-xs font-bold uppercase tracking-widest shadow-[3px_3px_0_0_var(--color-ink)] transition-transform hover:-translate-y-0.5"
        >
          join the line
        </a>
      </header>

      {/* Hero */}
      <main className="relative z-10 flex flex-1 flex-col items-center px-6 pb-12 pt-8 sm:px-10">
        <section className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-ink/20 bg-ink/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] backdrop-blur">
            <span className="size-1.5 rounded-full bg-bubblegum" />
            a gamified life
          </span>

          <h1 className="font-display text-[clamp(3rem,11vw,9rem)] font-black leading-[0.85] tracking-tighter">
            <span className="block">whose baby</span>
            <span className="relative inline-block">
              <span className="relative z-10">will you</span>
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-2 -z-0 h-4 bg-acid sm:h-6"
              />
            </span>{" "}
            <span className="inline-block animate-wiggle text-bubblegum">have?</span>
          </h1>

          <p className="mt-10 max-w-xl font-display text-3xl font-light italic text-ink/80 sm:text-4xl">
            Storkful Times are Coming.
          </p>
          <p className="mt-4 text-base text-ink/70 sm:text-lg">
            Delivery is soon, get in line below.
          </p>

          {/* Waitlist form */}
          <form
            id="waitlist"
            className="mt-10 flex w-full max-w-md flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <label className="sr-only" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="you@inbox.com"
              className="flex-1 rounded-full border-2 border-ink bg-cream px-5 py-3.5 text-base font-medium placeholder:text-ink/40 focus:outline-none focus:ring-4 focus:ring-bubblegum/50"
            />
            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink bg-ink px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-cream shadow-[4px_4px_0_0_var(--color-bubblegum)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_0_var(--color-bubblegum)]"
            >
              Continue
              <span aria-hidden className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </form>

          <p className="mt-3 text-xs text-ink/50">no spam, just storks ✦</p>
        </section>

        {/* Agency card */}
        <section className="relative mx-auto mt-24 w-full max-w-3xl">
          <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-bubblegum via-tangerine to-electric blur-md opacity-60" />
          <div className="relative rounded-[2rem] border-2 border-ink bg-cream p-8 sm:p-12">
            <div className="flex items-start gap-4">
              <div className="hidden size-12 shrink-0 place-items-center rounded-2xl bg-acid border-2 border-ink font-display text-2xl font-black sm:grid">
                ★
              </div>
              <div>
                <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-ink/60">
                  for the industry
                </p>
                <h2 className="mt-2 font-display text-2xl font-black leading-tight sm:text-3xl">
                  Are you a talent management agency?
                </h2>
                <p className="mt-3 text-base text-ink/75 sm:text-lg">
                  Get in touch about celebrity parents, earn on every Storkful
                  baby.
                </p>
                <a
                  href="mailto:hello@storkful.com"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-bold uppercase tracking-widest text-cream transition-transform hover:-translate-y-0.5"
                >
                  Get in touch →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Socials */}
        <section className="mt-20 flex flex-col items-center gap-5">
          <p className="font-display text-sm font-bold uppercase tracking-[0.4em] text-ink/60">
            follow the flock
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-3">
            {socials.map(({ name, href, Icon }) => (
              <li key={name}>
                <a
                  href={href}
                  aria-label={name}
                  className="group grid size-12 place-items-center rounded-full border-2 border-ink bg-cream transition-all hover:-translate-y-1 hover:bg-ink hover:text-cream"
                >
                  <Icon className="size-5" />
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>

      {/* Marquee */}
      <div className="relative z-10 mt-16 overflow-hidden border-y-2 border-ink bg-ink py-4 text-cream">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap font-display text-2xl font-black uppercase tracking-tight sm:text-3xl">
          {[...marqueeWords, ...marqueeWords, ...marqueeWords, ...marqueeWords].map(
            (w, i) => (
              <span key={i} className={i % 4 === 0 ? "text-acid" : undefined}>
                {w}
              </span>
            )
          )}
        </div>
      </div>

      <footer className="relative z-10 flex flex-col items-center gap-1 px-6 py-8 text-center text-xs text-ink/60">
        <p>Thanks!</p>
        <p>© {new Date().getFullYear()} Storkful — a gamified life</p>
      </footer>
    </div>
  );
}

function Blob({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute -z-10 blur-3xl opacity-70 ${className ?? ""}`}
      style={style}
    />
  );
}

function TikTokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19.6 6.8a5.7 5.7 0 0 1-3.4-1.1 5.7 5.7 0 0 1-2.2-3.7H10.3v12.6a2.7 2.7 0 1 1-2.7-2.7c.3 0 .5 0 .8.1V8.4a6.4 6.4 0 0 0-.8-.1 6.3 6.3 0 1 0 6.3 6.3V8.9a8.9 8.9 0 0 0 5.7 2v-3.6c-.1-.5 0-.5 0-.5Z" />
    </svg>
  );
}
function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}
function SpotifyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm4.6 14.4a.7.7 0 0 1-1 .2c-2.6-1.6-5.9-2-9.8-1.1a.7.7 0 1 1-.3-1.3c4.2-1 7.9-.6 10.8 1.2.3.2.4.6.3 1Zm1.2-2.7a.9.9 0 0 1-1.2.3c-3-1.9-7.6-2.4-11.2-1.3a.9.9 0 1 1-.5-1.7c4.1-1.2 9.2-.7 12.6 1.4.4.3.6.9.3 1.3Zm.1-2.8c-3.6-2.1-9.5-2.3-12.9-1.3a1.1 1.1 0 1 1-.6-2.1c4-1.2 10.5-1 14.6 1.5a1.1 1.1 0 1 1-1.1 1.9Z" />
    </svg>
  );
}
function DeezerIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <rect x="15" y="4" width="6" height="3" />
      <rect x="15" y="9" width="6" height="3" />
      <rect x="8" y="9" width="6" height="3" />
      <rect x="15" y="14" width="6" height="3" />
      <rect x="8" y="14" width="6" height="3" />
      <rect x="1" y="14" width="6" height="3" />
      <rect x="15" y="19" width="6" height="3" />
      <rect x="8" y="19" width="6" height="3" />
      <rect x="1" y="19" width="6" height="3" />
    </svg>
  );
}
function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.7c0-.9.3-1.6 1.6-1.6h1.6V4.2c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1v2.6H7.6V14h2.7v8h3.2Z" />
    </svg>
  );
}

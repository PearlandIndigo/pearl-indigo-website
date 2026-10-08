import { useState } from "react";
import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";
import { TESTIMONIALS } from "../lib/site";
import { submitLead } from "../lib/lead";

const PROMISES = [
  "The lighting trick that instantly makes selfies look professional",
  "The distance rule most people get backwards (and why it matters for AI)",
  "The one facial feature the AI needs to see clearly — and how to show it",
  "How to capture 5–10 perfect photos in about 10 minutes",
  "The clothing trick that keeps portraits looking timeless, not dated",
  "The #1 mistake that makes AI portraits look fake — and how to avoid it",
  "The exact checklist our team uses before generating your portraits",
];

export default function SelfieSecret() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", consent: false });
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const set = (k: string, v: string | boolean) => setForm((f) => ({ ...f, [k]: v }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.firstName || !form.email || !form.consent) {
      setError("Please add your first name, email, and tick the consent box.");
      return;
    }
    setError("");
    const res = await submitLead({ form: "selfie-secret", ...form });
    setDone(res.ok);
    if (!res.ok) setError("Something went wrong submitting — please try again or email us directly.");
  }

  return (
    <>
      <PageMeta
        title="Free Guide: The 7 Selfie Secrets That Make Your AI Portraits Stunning — Pearl & Indigo"
        description="Free guide: 7 simple tricks that make your AI portraits stunning. Learn the 10-minute selfie method behind jaw-dropping AI headshots, fantasy and pet portraits."
      />

      {/* HERO */}
      <section className="bg-indigo-deep text-pearl">
        <div className="max-w-4xl mx-auto px-4 py-20 md:py-24 text-center">
          <p className="text-gold text-sm tracking-[0.25em] font-bold mb-4">FREE GUIDE</p>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            The Selfie Secret: 7 Simple Tricks That Make Your AI Portraits Stunning
          </h1>
          <p className="mt-6 text-xl text-pearl/85 italic">It's not the AI. It's the selfies.</p>
        </div>
      </section>

      {/* PROMISES + FORM */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-20 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-indigo-deep">Inside the guide:</h2>
          <ul className="mt-6 space-y-3">
            {PROMISES.map((p) => (
              <li key={p} className="flex gap-3 text-charcoal/90">
                <span className="text-gold-deep text-xl leading-none">✓</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 bg-pearl-dim border border-gold/30 rounded-2xl p-6">
            <h3 className="font-display text-xl font-semibold text-indigo-deep">What you get</h3>
            <ul className="mt-3 space-y-2 text-sm text-charcoal/85">
              <li>✓ Instant downloadable guide</li>
              <li>✓ "The Truth About Amazing AI Portraits" bonus section</li>
              <li>✓ Exclusive discount code for your first portrait package</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gold/25 p-8 h-fit">
          {!done ? (
            <>
              <h2 className="text-2xl font-semibold text-indigo-deep text-center">
                Get the Selfie Secret Guide
              </h2>
              <p className="text-center text-sm text-charcoal/70 mt-2">
                Free instant download. No spam, ever.
              </p>
              <form onSubmit={onSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    className="border border-charcoal/20 rounded-lg px-4 py-3 text-sm w-full"
                    placeholder="First Name*"
                    value={form.firstName}
                    onChange={(e) => set("firstName", e.target.value)}
                  />
                  <input
                    className="border border-charcoal/20 rounded-lg px-4 py-3 text-sm w-full"
                    placeholder="Last Name"
                    value={form.lastName}
                    onChange={(e) => set("lastName", e.target.value)}
                  />
                </div>
                <input
                  type="email"
                  className="border border-charcoal/20 rounded-lg px-4 py-3 text-sm w-full"
                  placeholder="Email*"
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                />
                <input
                  type="tel"
                  className="border border-charcoal/20 rounded-lg px-4 py-3 text-sm w-full"
                  placeholder="Phone (optional)"
                  value={form.phone}
                  onChange={(e) => set("phone", e.target.value)}
                />
                <label className="flex gap-2 text-xs text-charcoal/70 items-start">
                  <input
                    type="checkbox"
                    checked={form.consent}
                    onChange={(e) => set("consent", e.target.checked)}
                    className="mt-0.5"
                  />
                  <span>
                    I agree to receive emails from Pearl &amp; Indigo. See our{" "}
                    <Link to="/privacy" className="underline">Privacy Policy</Link>.
                  </span>
                </label>
                {error && <p className="text-sm text-red-700">{error}</p>}
                <button
                  type="submit"
                  className="w-full bg-gold text-indigo-deep font-bold px-8 py-3.5 rounded-full hover:bg-gold-deep hover:text-white transition-colors"
                >
                  Yes, Send Me the Selfie Secret Guide
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <p className="text-5xl">✉️</p>
              <h2 className="text-2xl font-semibold text-indigo-deep mt-4">You're in!</h2>
              <p className="mt-3 text-charcoal/80">
                Your guide is on its way to <strong>{form.email}</strong>. Check your inbox (and spam
                folder, just in case).
              </p>
              <p className="mt-4 text-sm text-charcoal/70">
                While you wait — ready to transform your photos?{" "}
                <Link to="/ai-portraits-studio" className="text-teal-pop font-bold underline">
                  View portrait packages
                </Link>
              </p>
            </div>
          )}
        </div>
      </section>

      {/* PRODUCT CARDS */}
      <section className="bg-pearl-dim">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-semibold text-indigo-deep text-center">
            Ready to Transform Your Photos?
          </h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { t: "Professional Headshots", p: "from $49", d: "LinkedIn-ready portraits that look like the top 1%." },
              { t: "Fantasy & Travel", p: "from $39", d: "Place yourself anywhere in the world — or beyond it." },
              { t: "Pet Portraits", p: "from $39", d: "Frame-worthy art of the ones you love most." },
            ].map((c) => (
              <div key={c.t} className="bg-white rounded-2xl p-7 text-center border border-gold/25">
                <h3 className="font-display text-xl font-semibold text-indigo-deep">{c.t}</h3>
                <p className="text-gold-deep font-bold mt-1">{c.p}</p>
                <p className="text-sm text-charcoal/75 mt-2">{c.d}</p>
                <Link
                  to="/ai-portraits-studio"
                  className="inline-block mt-4 text-teal-pop font-bold text-sm hover:text-blue-med"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 STEPS */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-semibold text-indigo-deep">Three Steps. Zero Stress.</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6 text-left">
          {[
            { t: "Get the guide", d: "Learn the 10-minute selfie method." },
            { t: "Upload your selfies", d: "5–15 everyday photos from your phone." },
            { t: "Receive your portraits", d: "Stunning, human-reviewed portraits in 24–72 hours." },
          ].map((s, i) => (
            <div key={s.t} className="flex gap-3">
              <span className="font-display text-3xl text-gold-deep font-bold">{i + 1}</span>
              <div>
                <p className="font-bold text-indigo-deep">{s.t}</p>
                <p className="text-sm text-charcoal/75">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-pearl-dim">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="bg-white rounded-2xl p-7 border border-gold/25">
                <blockquote className="text-charcoal/90 italic text-[15px]">“{t.quote}”</blockquote>
                <figcaption className="mt-3 text-sm">
                  <span className="font-bold text-indigo-deep">{t.name}</span> · {t.detail}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

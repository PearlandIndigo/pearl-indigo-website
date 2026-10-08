import { useState } from "react";
import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";
import { submitLead } from "../lib/lead";

const NEEDS = ["New Website", "Website Redesign", "App or Booking Tool", "Authority Builder Package", "AI Portraits", "Not Sure Yet"];
const ADDONS = ["Professional Email Setup", "Domain Registration Help", "Google Business Profile Setup", "Monthly Hosting & Maintenance"];

export default function Quote() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", need: "",
    domain: "", addons: [] as string[], message: "",
  });
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));
  const toggleAddon = (a: string) =>
    setForm((f) => ({
      ...f,
      addons: f.addons.includes(a) ? f.addons.filter((x) => x !== a) : [...f.addons, a],
    }));

  function next(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.need) {
      setError("Please add your name, email, and what you need help with.");
      return;
    }
    setError("");
    setStep(2);
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    const res = await submitLead({ form: "free-quote", ...form });
    setDone(res.ok);
    if (!res.ok) setError("Something went wrong — please try again or email us directly.");
  }

  const input = "border border-charcoal/20 rounded-lg px-4 py-3 text-sm w-full bg-white";

  return (
    <>
      <PageMeta
        title="Get a Free Quote | Pearl & Indigo"
        description="Get a free, no-pressure quote for AI portraits or a custom website. Tell us what you need — we'll respond within one business day."
      />

      <section className="bg-indigo-deep text-pearl">
        <div className="max-w-3xl mx-auto px-4 py-16 md:py-20 text-center">
          <p className="text-gold text-sm tracking-[0.25em] font-bold mb-4">FREE QUOTE</p>
          <h1 className="text-4xl md:text-5xl font-semibold">Get Your Free Quote</h1>
          <p className="mt-4 text-pearl/85 text-lg">
            Two quick steps. No pressure, no obligation — we'll respond within one business day.
          </p>
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-4 py-14">
        {!done ? (
          <div className="bg-white rounded-2xl border border-gold/25 shadow-sm p-8">
            {/* progress */}
            <div className="flex items-center gap-2 mb-8">
              {[1, 2].map((n) => (
                <div key={n} className="flex items-center gap-2 flex-1">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      step >= n ? "bg-gold text-indigo-deep" : "bg-pearl-dim text-charcoal/50"
                    }`}
                  >
                    {n}
                  </div>
                  <div className={`flex-1 h-1 rounded ${step > n ? "bg-gold" : "bg-pearl-dim"}`} />
                </div>
              ))}
            </div>

            {step === 1 ? (
              <form onSubmit={next} className="space-y-4">
                <h2 className="font-display text-2xl font-semibold text-indigo-deep">
                  Step 1 — What do you need?
                </h2>
                <input className={input} placeholder="Full Name*" value={form.name} onChange={(e) => set("name", e.target.value)} />
                <div className="grid md:grid-cols-2 gap-4">
                  <input type="email" className={input} placeholder="Email*" value={form.email} onChange={(e) => set("email", e.target.value)} />
                  <input type="tel" className={input} placeholder="Phone" value={form.phone} onChange={(e) => set("phone", e.target.value)} />
                </div>
                <div>
                  <label className="text-sm font-bold text-indigo-deep">What do you need help with?*</label>
                  <select className={`${input} mt-2`} value={form.need} onChange={(e) => set("need", e.target.value)}>
                    <option value="">Select one…</option>
                    {NEEDS.map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                </div>
                {error && <p className="text-sm text-red-700">{error}</p>}
                <button type="submit" className="w-full bg-teal-pop text-white font-bold px-8 py-3.5 rounded-full hover:bg-blue-med transition-colors">
                  Continue →
                </button>
              </form>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <h2 className="font-display text-2xl font-semibold text-indigo-deep">
                  Step 2 — A few details
                </h2>
                <div>
                  <label className="text-sm font-bold text-indigo-deep">Do you currently own a domain name?</label>
                  <div className="flex gap-4 mt-2">
                    {["Yes", "No", "Not sure"].map((o) => (
                      <label key={o} className="flex items-center gap-2 text-sm">
                        <input type="radio" name="domain" checked={form.domain === o} onChange={() => set("domain", o)} />
                        {o}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-bold text-indigo-deep">Interested in any add-ons?</label>
                  <div className="grid md:grid-cols-2 gap-2 mt-2">
                    {ADDONS.map((a) => (
                      <label key={a} className="flex items-center gap-2 text-sm">
                        <input type="checkbox" checked={form.addons.includes(a)} onChange={() => toggleAddon(a)} />
                        {a}
                      </label>
                    ))}
                  </div>
                </div>
                <textarea
                  className={`${input} h-28`}
                  placeholder="Anything else we should know? (optional)"
                  value={form.message}
                  onChange={(e) => set("message", e.target.value)}
                />
                {error && <p className="text-sm text-red-700">{error}</p>}
                <div className="flex gap-3">
                  <button type="button" onClick={() => setStep(1)} className="px-6 py-3.5 rounded-full border border-charcoal/25 text-sm font-bold">
                    ← Back
                  </button>
                  <button type="submit" className="flex-1 bg-gold text-indigo-deep font-bold px-8 py-3.5 rounded-full hover:bg-gold-deep hover:text-white transition-colors">
                    Get My Free Quote
                  </button>
                </div>
                <p className="text-xs text-charcoal/60 text-center">
                  By submitting, you agree to our <Link to="/privacy" className="underline">Privacy Policy</Link>.
                </p>
              </form>
            )}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-gold/25 shadow-sm p-10 text-center">
            <p className="text-5xl">🎉</p>
            <h2 className="font-display text-3xl font-semibold text-indigo-deep mt-4">Quote request received!</h2>
            <p className="mt-4 text-charcoal/80">
              Thanks, {form.name.split(" ")[0] || "there"} — we'll review your request and respond within
              one business day at <strong>{form.email}</strong>.
            </p>
            <p className="mt-4 text-sm text-charcoal/70">
              Want portraits while you wait?{" "}
              <Link to="/the-selfie-secret" className="text-teal-pop font-bold underline">
                Grab the free Selfie Secret guide
              </Link>
            </p>
          </div>
        )}
      </section>
    </>
  );
}

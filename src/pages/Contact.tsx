import { useState } from "react";
import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";
import { BRAND } from "../lib/site";
import { submitLead } from "../lib/lead";

export default function Contact() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", message: "", consent: false });
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const set = (k: string, v: string | boolean) => setForm((f) => ({ ...f, [k]: v }));
  const input = "border border-charcoal/20 rounded-lg px-4 py-3 text-sm w-full bg-white";

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.firstName || !form.email || !form.message || !form.consent) {
      setError("Please complete your name, email, message, and the consent box.");
      return;
    }
    setError("");
    const res = await submitLead({ form: "contact", ...form });
    setDone(res.ok);
    if (!res.ok) setError("Something went wrong — please try again or email us directly.");
  }

  return (
    <>
      <PageMeta
        title="Contact Us | Pearl & Indigo"
        description="Contact Pearl & Indigo — AI portraits and custom websites for small business owners. We respond within 24 hours."
      />

      <section className="bg-indigo-deep text-pearl">
        <div className="max-w-3xl mx-auto px-4 py-16 md:py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold">Contact Us</h1>
          <p className="mt-4 text-xl text-pearl/85 italic">Let's Create Something Beautiful Together!</p>
          <p className="mt-2 text-pearl/75">We respond within 24 hours.</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="font-display text-2xl font-semibold text-indigo-deep">Other Ways to Reach Us</h2>
          <ul className="mt-5 space-y-3 text-charcoal/85">
            <li><strong>Email (Studio):</strong> {BRAND.emailStudio}</li>
            <li><strong>Email (Digital):</strong> {BRAND.emailDigital}</li>
            <li><strong>Phone:</strong> {BRAND.phone}</li>
            <li><strong>Instagram:</strong> @pearl.and.indigo</li>
            <li><strong>Visit:</strong> {BRAND.address}</li>
            <li><strong>Hours:</strong> {BRAND.hours}</li>
          </ul>
          <div className="mt-8 bg-pearl-dim border border-gold/30 rounded-2xl p-6">
            <p className="text-gold-deep text-xs tracking-[0.25em] font-bold">FREE GUIDE</p>
            <h3 className="font-display text-xl font-semibold text-indigo-deep mt-1">
              Prefer to browse first?
            </h3>
            <p className="text-sm text-charcoal/80 mt-2">
              Get our complimentary Selfie Secret guide — 7 tricks for stunning AI portraits.
            </p>
            <Link to="/the-selfie-secret" className="inline-block mt-4 text-teal-pop font-bold text-sm hover:text-blue-med">
              Get the Free Guide →
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gold/25 shadow-sm p-8">
          {!done ? (
            <form onSubmit={onSubmit} className="space-y-4">
              <h2 className="font-display text-2xl font-semibold text-indigo-deep">Get In Touch</h2>
              <div className="grid grid-cols-2 gap-4">
                <input className={input} placeholder="First Name*" value={form.firstName} onChange={(e) => set("firstName", e.target.value)} />
                <input className={input} placeholder="Last Name" value={form.lastName} onChange={(e) => set("lastName", e.target.value)} />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <input type="email" className={input} placeholder="Email*" value={form.email} onChange={(e) => set("email", e.target.value)} />
                <input type="tel" className={input} placeholder="Phone" value={form.phone} onChange={(e) => set("phone", e.target.value)} />
              </div>
              <textarea className={`${input} h-32`} placeholder="Please write your message below*" value={form.message} onChange={(e) => set("message", e.target.value)} />
              <label className="flex gap-2 text-xs text-charcoal/70 items-start">
                <input type="checkbox" checked={form.consent} onChange={(e) => set("consent", e.target.checked)} className="mt-0.5" />
                <span>I agree to be contacted about my inquiry. See our <Link to="/privacy" className="underline">Privacy Policy</Link>.</span>
              </label>
              {error && <p className="text-sm text-red-700">{error}</p>}
              <button type="submit" className="w-full bg-teal-pop text-white font-bold px-8 py-3.5 rounded-full hover:bg-blue-med transition-colors">
                Send Message
              </button>
            </form>
          ) : (
            <div className="text-center py-10">
              <p className="text-5xl">💌</p>
              <h2 className="font-display text-2xl font-semibold text-indigo-deep mt-4">Message sent!</h2>
              <p className="mt-3 text-charcoal/80">Thanks for reaching out — we'll get back to you within 24 hours.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

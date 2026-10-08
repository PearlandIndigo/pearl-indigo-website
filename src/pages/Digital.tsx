import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";
import Faq from "../components/Faq";
import { DIGITAL_PACKAGES } from "../lib/site";

const DIGITAL_FAQS = [
  {
    q: "How much does a small business website cost?",
    a: "Our packages start at $497 for a one-page site, $997 for up to 5 pages, and $1,997 for up to 10 pages with booking integration and full copywriting. Every package is a one-time build fee — no surprises.",
  },
  {
    q: "How long does it take to build my website?",
    a: "Delivery depends on the package: Bronze (1-page) in 3–5 business days, Silver (up to 5 pages) in 5–7 business days, Gold (up to 10 pages) in 7–10 business days. Timelines begin once we receive your content and deposit.",
  },
  {
    q: "Do I really own my website?",
    a: "Yes — 100%. Once your final payment is made, you own your domain, your site, and your content outright. Our contract states this in writing. No hostage tactics, no separation fees, ever.",
  },
  {
    q: "Do I have to sign up for the monthly maintenance plan?",
    a: "Not at all — it's 100% optional. The monthly plan ($75–$349 depending on tier) covers hosting, security, backups, and included content updates for owners who want total peace of mind. Cancel anytime and keep everything.",
  },
  {
    q: "What if I don't have content or photos ready?",
    a: "That's exactly why clients hire us. Our packages include copywriting assistance, and we use a guided questionnaire to extract your expertise. If headshots are a blocker, we can bundle a professional AI portrait suite.",
  },
  {
    q: "I've been burned by a web designer before. How are you different?",
    a: "We build in the open with milestone approvals — you approve each stage before we move forward, with dedicated revision rounds in writing. You pay 50% to start and 50% at launch, never 100% upfront into the void. And every project carries a 30-day post-launch warranty.",
  },
];

const SAMPLE_WORK = [
  {
    name: "Boutique Fitness Studio App",
    detail: "Class booking, client check-ins, and push reminders — sample concept",
  },
  {
    name: "Local Coffee Roaster Website",
    detail: "Menu, online ordering, and local SEO — sample concept",
  },
  {
    name: "Legal Consulting Portal",
    detail: "Consultation booking and secure intake forms — sample concept",
  },
];

export default function Digital() {
  return (
    <>
      <PageMeta
        title="Website & App Design for Small Businesses | Barrie, Ontario — Pearl & Indigo Digital"
        description="Pearl & Indigo Digital builds affordable, high-converting websites for small businesses — from $497, delivered in days not months. You own everything. Free quote."
      />

      {/* HERO */}
      <section className="bg-indigo-deep text-pearl">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28 text-center">
          <p className="text-gold text-sm tracking-[0.25em] font-bold mb-4">
            PEARL &amp; INDIGO DIGITAL · BARRIE, ONTARIO
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight max-w-3xl mx-auto">
            Affordable Website Design for Small Businesses
          </h1>
          <p className="mt-6 text-lg text-pearl/85 max-w-2xl mx-auto">
            Mobile-friendly websites and simple business apps that turn visitors into calls, bookings,
            and customers — live in days, not months. And you own everything.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/free-quote"
              className="bg-gold text-indigo-deep font-bold px-8 py-3.5 rounded-full hover:bg-gold-deep hover:text-white transition-colors"
            >
              Get My Free Quote
            </Link>
            <Link
              to="/contact"
              className="border-2 border-pearl/60 text-pearl font-bold px-8 py-3.5 rounded-full hover:bg-pearl hover:text-indigo-deep transition-colors"
            >
              Talk to Us First
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-20">
        <p className="text-gold-deep text-xs tracking-[0.25em] font-bold text-center">CORE SERVICES</p>
        <h2 className="text-3xl md:text-4xl font-semibold text-indigo-deep text-center mt-2">
          What We Build for You
        </h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            {
              t: "Small Business Website Design",
              d: "Custom, mobile-friendly websites designed to do one job: turn a stranger's search into a phone call, booking, or form fill.",
            },
            {
              t: "Custom Apps & Online Booking",
              d: "Simple tools that make you easier to work with — booking flows, intake forms, quote request tools, and client resource hubs.",
            },
            {
              t: "Local SEO & Google Setup",
              d: "Get found when customers search. Google Business Profile setup, local SEO foundations, and review-system guidance included.",
            },
          ].map((s) => (
            <div key={s.t} className="bg-white rounded-2xl p-8 shadow-sm border border-gold/25">
              <h3 className="text-xl font-semibold text-indigo-deep">{s.t}</h3>
              <p className="mt-3 text-charcoal/85 text-[15px] leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SAMPLE WORK */}
      <section className="bg-pearl-dim">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-indigo-deep text-center">
            Sample Work
          </h2>
          <p className="text-center mt-3 text-charcoal/75 max-w-2xl mx-auto">
            Concept builds showing what's possible. Your site is designed around your business, not a
            template.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {SAMPLE_WORK.map((p) => (
              <div key={p.name} className="bg-white rounded-2xl p-8 shadow-sm border border-gold/25">
                <div className="h-36 rounded-xl bg-indigo-deep/10 border border-indigo-deep/15 flex items-center justify-center">
                  <span className="font-display text-indigo-deep/50 text-lg italic">Preview</span>
                </div>
                <h3 className="text-lg font-semibold text-indigo-deep mt-4">{p.name}</h3>
                <p className="text-sm text-charcoal/75 mt-1">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROMISE */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-20">
        <h2 className="text-3xl md:text-4xl font-semibold text-indigo-deep text-center">
          Our Promise — Why Business Owners Choose Us
        </h2>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { t: "Live in days, not months", d: "Bronze in 3–5 business days, Silver in 5–7, Gold in 7–10. Your timeline is in writing before we start." },
            { t: "Transparent pricing", d: "Fixed packages from $497. The price we quote is the price you pay — change orders are always in writing first." },
            { t: "Built to convert", d: "Mobile-friendly, SEO-ready, with clear calls to action. We don't build digital brochures — we build lead machines." },
            { t: "You own everything", d: "Domain, site, and content are 100% yours after final payment. Stated in the contract. No hostage tactics." },
            { t: "Milestone approvals", d: "You approve each stage before we proceed, with dedicated revision rounds. No surprises at launch." },
            { t: "30-day warranty", d: "Anything not working perfectly in the first 30 days after launch, we fix free. In writing." },
          ].map((p) => (
            <div key={p.t} className="flex gap-4">
              <span className="text-gold-deep text-2xl leading-none">✓</span>
              <div>
                <h3 className="font-bold text-indigo-deep">{p.t}</h3>
                <p className="text-sm text-charcoal/80 mt-1">{p.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PACKAGES */}
      <section className="bg-indigo-deep text-pearl">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-center">Simple, Transparent Packages</h2>
          <p className="text-center mt-3 text-pearl/75">
            One-time build fee. Optional monthly hosting &amp; care plan. Prices in CAD, +HST.
          </p>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DIGITAL_PACKAGES.map((pkg) => (
              <div key={pkg.name} className="bg-pearl text-charcoal rounded-2xl p-7 flex flex-col">
                <h3 className="font-display text-xl font-semibold text-indigo-deep">{pkg.name}</h3>
                <p className="mt-2">
                  <span className="text-3xl font-black text-indigo-deep">{pkg.price}</span>
                  <span className="text-sm text-charcoal/70"> {pkg.unit}</span>
                </p>
                <p className="text-xs text-charcoal/70 mt-1">
                  {pkg.delivery} · {pkg.revisions}
                </p>
                <ul className="mt-4 space-y-2 text-sm flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="text-gold-deep">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-charcoal/70 border-t border-gold/25 pt-3">
                  Optional care plan: <strong>{pkg.hosting}/mo</strong> — {pkg.hostingDetail}
                </p>
                <Link
                  to="/free-quote"
                  className="mt-5 text-center bg-teal-pop text-white font-bold px-5 py-2.5 rounded-full hover:bg-blue-med transition-colors text-sm"
                >
                  Get My Free Quote
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-pearl/70 text-sm max-w-2xl mx-auto">
            Monthly care plans are 100% optional and cancellable anytime — you keep your domain and
            site no matter what. Additional content updates beyond your plan: $49 (Bronze) / $99
            (Silver) / $149 (Gold) each.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 py-16 md:py-20">
        <h2 className="text-3xl md:text-4xl font-semibold text-indigo-deep text-center mb-10">
          We've Got Answers
        </h2>
        <Faq items={DIGITAL_FAQS} />
        <div className="text-center mt-10">
          <Link
            to="/free-quote"
            className="inline-block bg-gold text-indigo-deep font-bold px-8 py-3.5 rounded-full hover:bg-gold-deep hover:text-white transition-colors"
          >
            Get My Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}

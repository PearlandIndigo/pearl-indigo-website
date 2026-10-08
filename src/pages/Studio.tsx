import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";
import Faq from "../components/Faq";
import { STUDIO_PACKAGES, TESTIMONIALS } from "../lib/site";

const STUDIO_FAQS = [
  {
    q: "Are AI headshots professional enough for my business website and LinkedIn?",
    a: "Yes. Our Studio uses advanced AI generation combined with expert human review to deliver hyper-realistic, professional headshots. They're optimized for LinkedIn, company websites, speaker bios, and marketing materials — at a fraction of the cost and time of a traditional photographer.",
  },
  {
    q: "How many selfies do I need to upload?",
    a: "Between 5 and 15 everyday selfies. Good lighting, no sunglasses, a mix of angles. Our free Selfie Secret guide walks you through the 10-minute method that produces the best results.",
  },
  {
    q: "How fast will I receive my portraits?",
    a: "Most packages are delivered within 24–72 hours of uploading your selfies, depending on the package tier you choose.",
  },
  {
    q: "What if I don't like how they turn out?",
    a: "Every package includes revision rounds, and our make-it-right promise means if a portrait doesn't capture your likeness, we regenerate it. You don't pay for portraits that don't look like you.",
  },
  {
    q: "Do you do team headshots?",
    a: "Yes. Teams of 3 or more save 15–20% and get consistent, on-brand headshots for everyone — ideal for brokerages, agencies, and professional teams.",
  },
  {
    q: "Can I get fantasy or travel portraits too?",
    a: "Absolutely. Many clients order headshots for business and a fantasy or travel set for fun — Santorini sunsets, Paris streets, or entirely imagined worlds. Same upload, endless possibilities.",
  },
];

export default function Studio() {
  return (
    <>
      <PageMeta
        title="AI Portrait Studio | Professional Headshots, Fantasy & Pet Portraits — Pearl & Indigo"
        description="Pearl & Indigo Studio creates hyper-realistic AI portraits: professional headshots from $49, fantasy & travel portraits from $39, pet portraits from $39. Human-reviewed, delivered in 24–72 hours."
      />

      {/* HERO */}
      <section className="bg-indigo-deep text-pearl">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28 text-center">
          <p className="text-gold text-sm tracking-[0.25em] font-bold mb-4">PEARL &amp; INDIGO STUDIO</p>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight max-w-3xl mx-auto">
            The AI Portrait Studio
          </h1>
          <p className="mt-6 text-lg text-pearl/85 max-w-2xl mx-auto">
            Stunning, hyper-realistic portraits generated from your everyday selfies — reviewed by a
            real human before delivery. Look like the top 1% in your field, without the awkward
            photoshoot.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/free-quote"
              className="bg-gold text-indigo-deep font-bold px-8 py-3.5 rounded-full hover:bg-gold-deep hover:text-white transition-colors"
            >
              Start My Portraits
            </Link>
            <Link
              to="/the-selfie-secret"
              className="border-2 border-pearl/60 text-pearl font-bold px-8 py-3.5 rounded-full hover:bg-pearl hover:text-indigo-deep transition-colors"
            >
              Get the Free Selfie Guide
            </Link>
          </div>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-20">
        <h2 className="text-3xl md:text-4xl font-semibold text-indigo-deep text-center">
          Three Collections
        </h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {STUDIO_PACKAGES.map((pkg) => (
            <div key={pkg.name} className="bg-white rounded-2xl p-8 shadow-sm border border-gold/25 flex flex-col">
              <h3 className="text-2xl font-semibold text-indigo-deep">{pkg.name}</h3>
              <p className="text-gold-deep font-bold mt-1 text-lg">{pkg.price}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {pkg.tiers.map((t) => (
                  <span key={t} className="text-xs bg-pearl-dim border border-gold/30 rounded-full px-3 py-1 text-charcoal/80">
                    {t}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-charcoal/85 text-[15px] leading-relaxed flex-1">{pkg.blurb}</p>
              <Link
                to="/free-quote"
                className="inline-block mt-5 text-teal-pop font-bold hover:text-blue-med"
              >
                Get a Quote →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-pearl-dim">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-indigo-deep text-center">
            How It Works
          </h2>
          <div className="mt-10 grid md:grid-cols-3 gap-8 text-center">
            {[
              { n: "1", t: "Choose Your Collection", d: "Headshots for business, fantasy & travel for fun, pet portraits for the ones you love." },
              { n: "2", t: "Upload Your Selfies", d: "5–15 everyday photos from your phone. Our free guide makes it foolproof in 10 minutes." },
              { n: "3", t: "Receive & Refine", d: "Portraits delivered in 24–72 hours, human-reviewed — with revision rounds included." },
            ].map((s) => (
              <div key={s.n}>
                <div className="w-14 h-14 mx-auto rounded-full bg-indigo-deep text-pearl font-display text-2xl font-bold flex items-center justify-center">
                  {s.n}
                </div>
                <h3 className="text-xl font-semibold mt-4 text-indigo-deep">{s.t}</h3>
                <p className="mt-2 text-charcoal/80 text-[15px]">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-20">
        <h2 className="text-3xl md:text-4xl font-semibold text-indigo-deep text-center">
          Client Stories
        </h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="bg-white rounded-2xl p-8 shadow-sm border border-gold/25">
              <blockquote className="text-charcoal/90 italic leading-relaxed">“{t.quote}”</blockquote>
              <figcaption className="mt-4">
                <p className="font-bold text-indigo-deep">{t.name}</p>
                <p className="text-sm text-charcoal/70">{t.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-pearl-dim">
        <div className="max-w-4xl mx-auto px-4 py-16 md:py-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-indigo-deep text-center mb-10">
            Studio FAQs
          </h2>
          <Faq items={STUDIO_FAQS} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-deep text-pearl">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Your Best Photos Are Already on Your Phone
          </h2>
          <p className="mt-4 text-pearl/85 text-lg">
            Let's turn them into portraits you'll love. Tell us what you need — we'll take it from there.
          </p>
          <Link
            to="/free-quote"
            className="inline-block mt-8 bg-gold text-indigo-deep font-bold px-8 py-3.5 rounded-full hover:bg-gold-deep hover:text-white transition-colors"
          >
            Get My Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}

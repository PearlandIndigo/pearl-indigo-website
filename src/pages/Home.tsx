import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";
import Faq from "../components/Faq";
import { TESTIMONIALS, BRAND, STUDIO_PACKAGES } from "../lib/site";

const HOME_FAQS = [
  {
    q: "How do AI portraits actually work?",
    a: "You upload 5–15 everyday selfies. Our AI studies your facial features and generates hyper-realistic portraits in the style you choose — headshots, fantasy scenes, travel destinations, or pet portraits. Every image is human-reviewed before delivery so it actually looks like you.",
  },
  {
    q: "Will the portraits really look like me?",
    a: "Yes — likeness is our obsession. The AI trains on your real facial features, and our team reviews every portrait for accuracy before you receive it. If a portrait doesn't look like you, our make-it-right promise means we'll regenerate it.",
  },
  {
    q: "How long does it take?",
    a: "Most portrait packages are delivered within 24–72 hours of uploading your selfies, depending on the package you choose.",
  },
  {
    q: "What kind of selfies should I upload?",
    a: "Everyday photos work best — good lighting, no sunglasses, a mix of angles. Our free Selfie Secret guide shows you exactly how to take the 5–10 photos that produce stunning results in about 10 minutes.",
  },
  {
    q: "How many revision rounds do I get?",
    a: "Every package includes revision rounds (2–3 depending on package, 5 on premium). If something isn't right, we fix it — that's the make-it-right promise.",
  },
  {
    q: "Can I use these commercially, like on my company website?",
    a: "Yes. You receive high-resolution files with full personal and commercial usage rights for the portraits we create for you.",
  },
  {
    q: "What happens to my selfies after my portraits are made?",
    a: "Your uploaded photos are used only to generate your portraits. We never sell your images or use them for any other purpose. See our Privacy Policy for full details.",
  },
  {
    q: "Do you offer team or group packages?",
    a: "Yes — teams of 3 or more save 15–20% with consistent, on-brand headshots for everyone. Perfect for brokerages, agencies, and small teams.",
  },
  {
    q: "What's the difference between Studio and Digital?",
    a: "Pearl & Indigo has two divisions. Studio creates your visual identity — AI portraits and branding. Digital builds your business engine — custom websites and apps. Many clients use both: portraits for the face of the business, a website for its foundation.",
  },
  {
    q: "Where are you located?",
    a: `We're based in Barrie, Ontario, Canada — and we serve clients worldwide. Everything is delivered digitally: ${BRAND.emailStudio}.`,
  },
];

export default function Home() {
  return (
    <>
      <PageMeta
        title="Pearl & Indigo | AI Portraits & Websites for Small Business"
        description="Pearl & Indigo creates stunning AI portraits and custom websites for small business owners. Look premium, build trust, get chosen — from Barrie, Ontario to worldwide."
      />

      {/* HERO */}
      <section className="bg-indigo-deep text-pearl">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28 text-center">
          <p className="text-gold text-sm tracking-[0.25em] font-bold mb-4">PEARL &amp; INDIGO STUDIO</p>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight max-w-3xl mx-auto">
            You Deserve a Headshot That Actually Represents You
          </h1>
          <p className="mt-6 text-lg text-pearl/85 max-w-2xl mx-auto">
            Hyper-realistic AI portraits generated from your everyday selfies — professional headshots,
            fantasy scenes, travel destinations, and pet portraits. Delivered in 24–72 hours.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/ai-portraits-studio"
              className="bg-gold text-indigo-deep font-bold px-8 py-3.5 rounded-full hover:bg-gold-deep hover:text-white transition-colors"
            >
              View Portrait Packages
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

      {/* PAIN */}
      <section className="max-w-4xl mx-auto px-4 py-16 md:py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-indigo-deep">
          Traditional Photography Is Expensive, Awkward, and Slow
        </h2>
        <p className="mt-5 text-lg text-charcoal/85 leading-relaxed">
          A professional photoshoot means $500+ for a photographer, weeks of scheduling, an awkward day
          in front of the camera — and photos that still might not capture you. There is a better way.
          Upload a few selfies, and receive portraits that look like a high-end shoot, without leaving
          your home.
        </p>
      </section>

      {/* FORK IN THE ROAD */}
      <section className="bg-pearl-dim">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-indigo-deep text-center">
            Two Divisions. One Complete Digital Foundation.
          </h2>
          <p className="text-center mt-4 text-charcoal/80 max-w-2xl mx-auto">
            Pearl &amp; Indigo helps small business owners look premium online — from the face of your
            brand to the technology behind it.
          </p>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gold/25">
              <p className="text-gold-deep text-xs tracking-[0.25em] font-bold">STUDIO</p>
              <h3 className="text-2xl font-semibold text-indigo-deep mt-2">Elevate Your Visual Identity</h3>
              <p className="mt-3 text-charcoal/85">
                High-end AI portraits and visual branding. Look polished and professional without the
                time, cost, or stress of a traditional photoshoot.
              </p>
              <Link
                to="/ai-portraits-studio"
                className="inline-block mt-5 text-teal-pop font-bold hover:text-blue-med"
              >
                Explore Studio Services →
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gold/25">
              <p className="text-gold-deep text-xs tracking-[0.25em] font-bold">DIGITAL</p>
              <h3 className="text-2xl font-semibold text-indigo-deep mt-2">Build Your Business Engine</h3>
              <p className="mt-3 text-charcoal/85">
                Custom, high-converting websites and simple business apps — designed to turn visitors
                into calls, bookings, and customers.
              </p>
              <Link to="/digital" className="inline-block mt-5 text-teal-pop font-bold hover:text-blue-med">
                Explore Digital Services →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE'RE DIFFERENT */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-20">
        <h2 className="text-3xl md:text-4xl font-semibold text-indigo-deep text-center">
          Here's How We're Different
        </h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {STUDIO_PACKAGES.map((pkg) => (
            <div key={pkg.name} className="bg-white rounded-2xl p-8 shadow-sm border border-gold/25">
              <h3 className="text-2xl font-semibold text-indigo-deep">{pkg.name}</h3>
              <p className="text-gold-deep font-bold mt-1">{pkg.price}</p>
              <p className="mt-3 text-charcoal/85 text-[15px] leading-relaxed">{pkg.blurb}</p>
            </div>
          ))}
        </div>
        <p className="text-center mt-8 text-charcoal/80">
          Every portrait is <strong>human-reviewed</strong> before delivery — AI generation plus a real
          person's eye for likeness and quality.
        </p>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-indigo-deep text-pearl">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-center">How It Works — 3 Simple Steps</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-8 text-center">
            {[
              { n: "1", t: "Choose Your Style", d: "Pick headshots, fantasy & travel, or pet portraits — and the package that fits." },
              { n: "2", t: "Upload 5–15 Selfies", d: "Everyday photos from your phone. Our free guide shows you the 10-minute method." },
              { n: "3", t: "Receive Your Portraits", d: "High-resolution portraits delivered in 24–72 hours, human-reviewed for likeness." },
            ].map((s) => (
              <div key={s.n}>
                <div className="w-14 h-14 mx-auto rounded-full bg-gold text-indigo-deep font-display text-2xl font-bold flex items-center justify-center">
                  {s.n}
                </div>
                <h3 className="text-xl font-semibold mt-4">{s.t}</h3>
                <p className="mt-2 text-pearl/80 text-[15px]">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROMISE */}
      <section className="max-w-4xl mx-auto px-4 py-16 md:py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-indigo-deep">
          Ready to See Yourself in a Whole New Light?
        </h2>
        <p className="mt-5 text-lg text-charcoal/85">
          Revision rounds included with every package. High-resolution files with full usage rights.
          And our make-it-right promise: if a portrait doesn't look like you, we regenerate it.
        </p>
        <Link
          to="/ai-portraits-studio"
          className="inline-block mt-8 bg-teal-pop text-white font-bold px-8 py-3.5 rounded-full hover:bg-blue-med transition-colors"
        >
          View Portrait Packages
        </Link>
      </section>

      {/* SELFIE SECRET PROMO */}
      <section className="bg-pearl-dim">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <p className="text-gold-deep text-xs tracking-[0.25em] font-bold">FREE GUIDE</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-indigo-deep mt-2">
            The Selfie Secret: 7 Simple Tricks That Make Your AI Portraits Stunning
          </h2>
          <p className="mt-4 text-charcoal/85 text-lg">
            It's not the AI. It's the selfies. Learn the 10-minute method behind jaw-dropping portraits.
          </p>
          <Link
            to="/the-selfie-secret"
            className="inline-block mt-6 bg-gold text-indigo-deep font-bold px-8 py-3.5 rounded-full hover:bg-gold-deep hover:text-white transition-colors"
          >
            Get My Complimentary Copy
          </Link>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-20">
        <h2 className="text-3xl md:text-4xl font-semibold text-indigo-deep text-center">Testimonials</h2>
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
          <h2 className="text-3xl md:text-4xl font-semibold text-indigo-deep text-center mb-10">FAQs</h2>
          <Faq items={HOME_FAQS} />
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-semibold text-indigo-deep">Get In Touch</h2>
        <p className="mt-4 text-charcoal/85">
          {BRAND.emailStudio}
          <br />
          {BRAND.phone} · {BRAND.hours}
          <br />
          {BRAND.address}
        </p>
        <Link
          to="/contact"
          className="inline-block mt-6 bg-indigo-deep text-pearl font-bold px-8 py-3.5 rounded-full hover:bg-indigo-ink transition-colors"
        >
          Contact Us
        </Link>
      </section>
    </>
  );
}

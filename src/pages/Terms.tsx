import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";
import { BRAND } from "../lib/site";

export default function Terms() {
  return (
    <>
      <PageMeta
        title="Terms of Service | Pearl & Indigo"
        description="Pearl & Indigo Terms of Service — the terms governing use of our website and services."
      />
      <section className="bg-indigo-deep text-pearl">
        <div className="max-w-3xl mx-auto px-4 py-14 text-center">
          <h1 className="text-4xl font-semibold">Terms of Service</h1>
          <p className="mt-3 text-pearl/75 text-sm">Last updated: October 2026</p>
        </div>
      </section>
      <section className="max-w-3xl mx-auto px-4 py-12 space-y-8 text-[15px] leading-relaxed text-charcoal/90">
        <div>
          <h2 className="font-display text-2xl font-semibold text-indigo-deep mb-3">1. Services</h2>
          <p>
            Pearl &amp; Indigo provides AI portrait generation (Studio) and website/app development
            (Digital). Specific deliverables, timelines, and fees for paid projects are governed by a
            signed Service Agreement and Package Selection Form, which take precedence over these
            general terms in case of conflict.
          </p>
        </div>
        <div>
          <h2 className="font-display text-2xl font-semibold text-indigo-deep mb-3">2. Quotes &amp; Payments</h2>
          <p>
            Quotes provided through this website are estimates based on the information you supply.
            Website projects require a 50% deposit before work begins and the remaining 50% before
            launch. All prices are in Canadian dollars and subject to HST where applicable.
          </p>
        </div>
        <div>
          <h2 className="font-display text-2xl font-semibold text-indigo-deep mb-3">3. AI Portraits</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>You receive high-resolution files with personal and commercial usage rights.</li>
            <li>Revision rounds are included per your package; additional revisions may incur fees.</li>
            <li>While we human-review every portrait for likeness, AI generation is interpretive — our make-it-right promise covers portraits that don't capture your likeness.</li>
            <li>You confirm you have the rights to any photos you upload (including photos of others or pets).</li>
          </ul>
        </div>
        <div>
          <h2 className="font-display text-2xl font-semibold text-indigo-deep mb-3">4. Website Projects</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Delivery timelines begin once we receive your content and deposit.</li>
            <li>You own your domain, website, and content in full once final payment is received.</li>
            <li>Monthly hosting &amp; maintenance plans are optional, billed monthly, and cancellable anytime.</li>
            <li>A 30-day post-launch warranty covers bugs or errors in our work.</li>
          </ul>
        </div>
        <div>
          <h2 className="font-display text-2xl font-semibold text-indigo-deep mb-3">5. Intellectual Property</h2>
          <p>
            Content on this website (copy, design, branding) belongs to Pearl &amp; Indigo and may not
            be reproduced without permission. For client projects, IP terms are defined in the signed
            Service Agreement: you own the final deliverables created for you; we retain our
            pre-existing tools, templates, and processes.
          </p>
        </div>
        <div>
          <h2 className="font-display text-2xl font-semibold text-indigo-deep mb-3">6. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Pearl &amp; Indigo is not liable for indirect,
            incidental, or consequential damages arising from use of this website or our services.
            Our total liability for any claim is limited to the amount you paid for the service in
            question.
          </p>
        </div>
        <div>
          <h2 className="font-display text-2xl font-semibold text-indigo-deep mb-3">7. Governing Law</h2>
          <p>
            These terms are governed by the laws of the Province of Ontario, Canada.
          </p>
        </div>
        <p className="text-sm text-charcoal/70">
          Questions? Email {BRAND.emailStudio}. See also our <Link to="/privacy" className="underline text-teal-pop">Privacy Policy</Link>.
        </p>
      </section>
    </>
  );
}

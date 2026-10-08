import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";
import { BRAND } from "../lib/site";

export default function Privacy() {
  return (
    <>
      <PageMeta
        title="Privacy Policy | Pearl & Indigo"
        description="Pearl & Indigo Privacy Policy — how we collect, use, and protect your personal information."
      />
      <section className="bg-indigo-deep text-pearl">
        <div className="max-w-3xl mx-auto px-4 py-14 text-center">
          <h1 className="text-4xl font-semibold">Privacy Policy</h1>
          <p className="mt-3 text-pearl/75 text-sm">Last updated: October 2026</p>
        </div>
      </section>
      <section className="max-w-3xl mx-auto px-4 py-12 space-y-8 text-[15px] leading-relaxed text-charcoal/90">
        <div>
          <h2 className="font-display text-2xl font-semibold text-indigo-deep mb-3">1. Who We Are</h2>
          <p>
            Pearl &amp; Indigo ("we", "us") is a sole proprietorship based in Barrie, Ontario, Canada.
            We provide AI portrait services (Studio) and website/app development services (Digital).
            Contact: {BRAND.emailStudio}.
          </p>
        </div>
        <div>
          <h2 className="font-display text-2xl font-semibold text-indigo-deep mb-3">2. What We Collect</h2>
          <p>We collect only what we need to serve you:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Contact details you provide via forms (name, email, phone, message).</li>
            <li>Selfies you upload for AI portrait generation.</li>
            <li>Project content you provide for website builds (text, images, business info).</li>
            <li>Basic website analytics (pages visited, device type) to improve our site.</li>
          </ul>
        </div>
        <div>
          <h2 className="font-display text-2xl font-semibold text-indigo-deep mb-3">3. How We Use It</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>To respond to inquiries and deliver the services you request.</li>
            <li>To generate the AI portraits you order.</li>
            <li>To send the resources you request (e.g., the Selfie Secret guide) and occasional updates you opt into.</li>
            <li>To improve our website and services.</li>
          </ul>
          <p className="mt-2">
            We do <strong>not</strong> sell your personal information. We do not use your uploaded
            selfies for any purpose other than generating your portraits.
          </p>
        </div>
        <div>
          <h2 className="font-display text-2xl font-semibold text-indigo-deep mb-3">4. Consent &amp; Marketing</h2>
          <p>
            Where our forms include a consent checkbox, we only send marketing emails if you tick it.
            You can unsubscribe at any time via the link in any email or by contacting us.
          </p>
        </div>
        <div>
          <h2 className="font-display text-2xl font-semibold text-indigo-deep mb-3">5. Data Retention</h2>
          <p>
            Inquiry data is kept while your request is active and for a reasonable period afterward.
            Final portrait deliveries are stored for 12 months so we can re-send files if needed, then
            removed on request at any time.
          </p>
        </div>
        <div>
          <h2 className="font-display text-2xl font-semibold text-indigo-deep mb-3">6. Your Rights</h2>
          <p>
            Under Canada's PIPEDA and applicable privacy laws, you may request access to, correction
            of, or deletion of your personal information at any time by emailing {BRAND.emailStudio}.
          </p>
        </div>
        <div>
          <h2 className="font-display text-2xl font-semibold text-indigo-deep mb-3">7. Third-Party Services</h2>
          <p>
            We use reputable third-party tools (e.g., website hosting, AI generation platforms, email
            delivery) that process data on our behalf under their own privacy commitments. We do not
            grant them rights to use your data beyond providing these services.
          </p>
        </div>
        <div>
          <h2 className="font-display text-2xl font-semibold text-indigo-deep mb-3">8. Changes</h2>
          <p>
            We may update this policy from time to time. The "last updated" date above reflects the
            current version. Continued use of the site after changes means you accept the updated policy.
          </p>
        </div>
        <p className="text-sm text-charcoal/70">
          Questions? Email {BRAND.emailStudio}. See also our <Link to="/terms" className="underline text-teal-pop">Terms of Service</Link>.
        </p>
      </section>
    </>
  );
}

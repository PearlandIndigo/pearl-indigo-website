import { Link } from "react-router-dom";
import { NAV, SOCIALS, BRAND } from "../lib/site";

export default function Footer() {
  return (
    <footer className="bg-indigo-deep text-pearl">
      <div className="max-w-6xl mx-auto px-4 py-12 grid gap-10 md:grid-cols-4">
        <div>
          <p className="font-display text-2xl font-semibold">
            Pearl <span className="text-gold">&amp;</span> Indigo
          </p>
          <p className="text-sm mt-2 text-pearl/80 italic">{BRAND.tagline}</p>
          <p className="text-sm mt-4 text-pearl/70">
            AI portraits and custom websites for small business owners. Look premium, build trust, get
            chosen.
          </p>
        </div>
        <div>
          <p className="font-bold text-gold text-sm tracking-widest mb-3">EXPLORE</p>
          <ul className="space-y-2 text-sm">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-pearl/80 hover:text-gold transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-bold text-gold text-sm tracking-widest mb-3">CONTACT</p>
          <ul className="space-y-2 text-sm text-pearl/80">
            <li>{BRAND.emailStudio}</li>
            <li>{BRAND.emailDigital}</li>
            <li>{BRAND.phone}</li>
            <li>{BRAND.address}</li>
            <li>{BRAND.hours}</li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-gold text-sm tracking-widest mb-3">FOLLOW</p>
          <ul className="space-y-2 text-sm">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pearl/80 hover:text-gold transition-colors"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-pearl/15">
        <div className="max-w-6xl mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-pearl/60">
          <p>© {new Date().getFullYear()} Pearl &amp; Indigo. All rights reserved.</p>
          <p className="flex gap-4">
            <Link to="/privacy" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-gold transition-colors">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

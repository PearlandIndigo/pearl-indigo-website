import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { NAV, BRAND } from "../lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-pearl/95 backdrop-blur border-b border-gold/30">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="font-display text-xl md:text-2xl font-semibold text-indigo-deep">
          Pearl <span className="text-gold-deep">&amp;</span> Indigo
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm tracking-wide transition-colors ${
                  isActive ? "text-gold-deep font-bold" : "text-charcoal hover:text-indigo-deep"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/free-quote"
            className="bg-teal-pop text-white text-sm font-bold px-5 py-2.5 rounded-full hover:bg-blue-med transition-colors"
          >
            Get My Free Quote
          </Link>
        </nav>
        <button
          className="md:hidden text-indigo-deep text-2xl px-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
      {open && (
        <nav className="md:hidden border-t border-gold/30 bg-pearl px-4 py-3 flex flex-col gap-1">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `py-2 text-sm ${isActive ? "text-gold-deep font-bold" : "text-charcoal"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/free-quote"
            onClick={() => setOpen(false)}
            className="bg-teal-pop text-white text-sm font-bold px-5 py-2.5 rounded-full text-center mt-2"
          >
            Get My Free Quote
          </Link>
        </nav>
      )}
      <div className="sr-only">{BRAND.tagline}</div>
    </header>
  );
}

import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";

export default function NotFound() {
  return (
    <>
      <PageMeta
        title="Page Not Found | Pearl & Indigo"
        description="The page you're looking for doesn't exist."
      />
      <section className="max-w-2xl mx-auto px-4 py-24 text-center">
        <h1 className="text-5xl font-semibold text-indigo-deep">Page not found</h1>
        <p className="mt-4 text-charcoal/80">
          The page you're looking for moved or doesn't exist. Let's get you back on track.
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <Link to="/" className="bg-indigo-deep text-pearl font-bold px-8 py-3 rounded-full">
            Home
          </Link>
          <Link to="/free-quote" className="bg-gold text-indigo-deep font-bold px-8 py-3 rounded-full">
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Studio from "./pages/Studio";
import Digital from "./pages/Digital";
import SelfieSecret from "./pages/SelfieSecret";
import Quote from "./pages/Quote";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-pearl text-charcoal">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/ai-portraits-studio" element={<Studio />} />
            <Route path="/digital" element={<Digital />} />
            <Route path="/the-selfie-secret" element={<SelfieSecret />} />
            <Route path="/free-quote" element={<Quote />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact-us-8716" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

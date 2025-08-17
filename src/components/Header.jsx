import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-colors duration-300 ${scrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <Link
          to="/"
          className={`text-2xl font-bold ${scrolled ? "text-black" : "text-white"
            }`}
        >
          <img src="/EmbraceLogo.png" alt="" className="w-20" />
        </Link>

        {/* Desktop Menu */}
        <nav
          className={`hidden md:flex items-center space-x-6 ${scrolled ? "text-black" : "text-white"
            }`}
        >
          <Link to="/about" className="hover:text-[#C0A062]">
            About Us
          </Link>
          <Link to="/services" className="hover:text-[#C0A062]">
            Services
          </Link>
          <Link to="/blog" className="hover:text-[#C0A062]">
            Blog
          </Link>
          <Link to="/testimonials" className="hover:text-[#C0A062]">
            Testimonials
          </Link>
        </nav>

        <Link
          to="/contact"
          className={`px-4 py-2 rounded md:flex hidden transition-colors duration-300 ${scrolled
            ? "bg-transparent border border-1 border-[var(--brown-yellow-bg)] text-white hover:bg-[#C0A062] hover:text-black"
            : "bg-[#C0A062] text-black hover:bg-black hover:text-white"
            }`}
        >
          Get in Touch
        </Link>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden text-2xl ${scrolled ? "text-black" : "text-white"
            }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg px-4 pb-4">
          <Link
            to="/about"
            className="block py-2 border-b hover:text-[#C0A062]"
            onClick={() => setMobileMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/services"
            className="block py-2 border-b hover:text-[#C0A062]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/blog"
            className="block py-2 border-b hover:text-[#C0A062]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            to="/testimonials"
            className="block py-2 border-b hover:text-[#C0A062]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Testimonials
          </Link>
          <Link
            to="/contact"
            className="block mt-2 bg-transparent text-white px-4 py-2 rounded hover:bg-[#C0A062] hover:text-black text-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get in Touch
          </Link>
        </nav>
      )}
    </header>
  );
}

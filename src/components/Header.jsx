import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const navigate = useNavigate();

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle Services default redirect
  const handleServicesClick = (e) => {
    e.preventDefault();
    navigate("/services"); // Default redirect
    setServiceDropdownOpen(false);
  };

  // Common function for active/inactive classes
  const linkClasses = ({ isActive }) =>
    isActive
      ? "py-2 px-4 rounded-sm text-[#C0A062] font-semibold"
      : "py-2 px-4 rounded-sm text-[var(--brown-red)] hover:bg-[var(--brown-red)] hover:text-[var(--brown-yellow-bg)]";

  return (
    <header className="fixed w-full z-50 transition-colors duration-300 bg-[var(--brown-yellow-bg)]">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold text-white">
          <img src="/EmbraceLogo.png" alt="" className="w-20 p-2" />
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink to="/" className={linkClasses}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClasses}>
            About Us
          </NavLink>

          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => setServiceDropdownOpen(!serviceDropdownOpen)}
              className="flex items-center gap-1 py-2 px-4 rounded-sm text-[var(--brown-red)] hover:bg-[var(--brown-red)] hover:text-[var(--brown-yellow-bg)]"
            >
              Services
              <FiChevronDown
                className={`transition-transform duration-300 ${serviceDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
              />
            </button>

            {serviceDropdownOpen && (
              <div className="absolute left-0 mt-2 w-56 bg-white text-[var(--brown-red)] shadow-lg rounded-md z-50">
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive
                      ? "block px-4 py-2 text-[#C0A062] font-semibold"
                      : "block px-4 py-2 hover:bg-[var(--brown-red)] hover:text-[var(--brown-yellow-bg)]"
                  }
                  onClick={handleServicesClick}
                >
                  Services
                </NavLink>
                <NavLink
                  to="/bodyTransformation"
                  className={({ isActive }) =>
                    isActive
                      ? "block px-4 py-2 text-[#C0A062] font-semibold"
                      : "block px-4 py-2 hover:bg-[var(--brown-red)] hover:text-[var(--brown-yellow-bg)]"
                  }
                  onClick={() => setServiceDropdownOpen(false)}
                >
                  Body Transformation
                </NavLink>
                <NavLink
                  to="/cancerRehabilitation"
                  className={({ isActive }) =>
                    isActive
                      ? "block px-4 py-2 text-[#C0A062] font-semibold"
                      : "block px-4 py-2 hover:bg-[var(--brown-red)] hover:text-[var(--brown-yellow-bg)]"
                  }
                  onClick={() => setServiceDropdownOpen(false)}
                >
                  Cancer Rehabilitation
                </NavLink>
                <NavLink
                  to="/menopauseWellness"
                  className={({ isActive }) =>
                    isActive
                      ? "block px-4 py-2 text-[#C0A062] font-semibold"
                      : "block px-4 py-2 hover:bg-[var(--brown-red)] hover:text-[var(--brown-yellow-bg)]"
                  }
                  onClick={() => setServiceDropdownOpen(false)}
                >
                  Menopause Wellness
                </NavLink>
                <NavLink
                  to="/pregnancyCare"
                  className={({ isActive }) =>
                    isActive
                      ? "block px-4 py-2 text-[#C0A062] font-semibold"
                      : "block px-4 py-2 hover:bg-[var(--brown-red)] hover:text-[var(--brown-yellow-bg)]"
                  }
                  onClick={() => setServiceDropdownOpen(false)}
                >
                  Pregnancy Care
                </NavLink>
              </div>
            )}
          </div>

          <NavLink to="/blog" className={linkClasses}>
            Blog
          </NavLink>
          <NavLink to="/testimonials" className={linkClasses}>
            Testimonials
          </NavLink>
        </nav>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "hidden md:block border-2px bg-[#C0A062] text-black py-2 px-4 rounded-sm font-semibold"
              : "hidden md:block border-2px bg-[var(--brown-red)] text-[var(--brown-yellow-bg)] hover:bg-white py-2 px-4 rounded-sm hover:text-[var(--brown-yellow-bg)]"
          }
        >
          Get in Touch
        </NavLink>

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
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "block py-2 border-b text-[#C0A062] font-semibold"
                : "block py-2 border-b text-[var(--brown-red)] hover:text-[var(--brown-yellow-bg)]"
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "block py-2 border-b text-[#C0A062] font-semibold"
                : "block py-2 border-b text-[var(--brown-red)] hover:text-[var(--brown-yellow-bg)]"
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            About Us
          </NavLink>

          {/* Mobile Dropdown for Services */}
          <div className="border-b">
            <button
              onClick={() => setServiceDropdownOpen(!serviceDropdownOpen)}
              className="w-full text-left py-2 flex items-center gap-1 text-[var(--brown-red)] hover:text-[var(--brown-yellow-bg)]"
            >
              Services
              <FiChevronDown
                className={`transition-transform duration-300 ${serviceDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
              />
            </button>

            {serviceDropdownOpen && (
              <div className="pl-4">
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 border-b text-[#C0A062] font-semibold"
                      : "block py-2 border-b text-[var(--brown-red)] hover:text-[var(--brown-yellow-bg)]"
                  }
                  onClick={handleServicesClick}
                >
                  Services
                </NavLink>
                <NavLink
                  to="/bodyTransformation"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 border-b text-[#C0A062] font-semibold"
                      : "block py-2 border-b text-[var(--brown-red)] hover:text-[var(--brown-yellow-bg)]"
                  }
                  onClick={() => setServiceDropdownOpen(false)}
                >
                  Body Transformation
                </NavLink>
                <NavLink
                  to="/cancerRehabilitation"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 border-b text-[#C0A062] font-semibold"
                      : "block py-2 border-b text-[var(--brown-red)] hover:text-[var(--brown-yellow-bg)]"
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Cancer Rehabilitation
                </NavLink>
                <NavLink
                  to="/menopauseWellness"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 border-b text-[#C0A062] font-semibold"
                      : "block py-2 border-b text-[var(--brown-red)] hover:text-[var(--brown-yellow-bg)]"
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Menopause Wellness
                </NavLink>
                <NavLink
                  to="/pregnancyCare"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 border-b text-[#C0A062] font-semibold"
                      : "block py-2 border-b text-[var(--brown-red)] hover:text-[var(--brown-yellow-bg)]"
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pregnancy Care
                </NavLink>
              </div>
            )}
          </div>

          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive
                ? "block py-2 border-b text-[#C0A062] font-semibold"
                : "block py-2 border-b text-[var(--brown-red)] hover:text-[var(--brown-yellow-bg)]"
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            Blog
          </NavLink>
          <NavLink
            to="/testimonials"
            className={({ isActive }) =>
              isActive
                ? "block py-2 border-b text-[#C0A062] font-semibold"
                : "block py-2 border-b text-[var(--brown-red)] hover:text-[var(--brown-yellow-bg)]"
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            Testimonials
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "block mt-2 bg-[#C0A062] text-black px-4 py-2 rounded font-semibold"
                : "block mt-2 bg-[var(--brown-red)] text-[var(--brown-yellow-bg)] px-4 py-2 rounded hover:bg-[var(--brown-yellow-bg)] hover:text-[var(--brown-red)] text-center"
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            Get in Touch
          </NavLink>
        </nav>
      )}
    </header>
  );
}

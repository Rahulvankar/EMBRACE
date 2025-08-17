import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[var(--brown-red)] text-white pt-20 pb-14 px-6 md:px-14 font-sans text-base">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo & Tagline */}
        <div className="flex flex-col gap-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG87Zz7W9h3wCf-P7ppB5SXb-OJsos-kKsNA&s"
            alt="Embrace Logo"
            className="w-24 h-24 object-contain rounded-full border-4 border-[var(--brown-yellow-bg)] shadow-lg"
          />
          <p className="text-[15px] text-gray-100 leading-relaxed max-w-xs">
            Embrace your journey to holistic living — with care, transformation, and authenticity.
          </p>
        </div>

        {/* Quick Links - now second */}
        <div>
          <h4 className="text-xl font-semibold text-[var(--brown-yellow-bg)] mb-4 uppercase">Quick Links</h4>
          <ul className="space-y-3 text-[16px] text-gray-200">
            <li><Link to="#" className="hover:text-[var(--brown-yellow-bg)] transition">Home</Link></li>
            <li><Link to="#" className="hover:text-[var(--brown-yellow-bg)] transition">Programs</Link></li>
            <li><Link to="#" className="hover:text-[var(--brown-yellow-bg)] transition">About Us</Link></li>
            <li><Link to="#" className="hover:text-[var(--brown-yellow-bg)] transition">Client Stories</Link></li>
            <li><Link to="#" className="hover:text-[var(--brown-yellow-bg)] transition">Book Consultation</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-semibold text-[var(--brown-yellow-bg)] mb-4 uppercase">Contact Us</h4>
          <p className="text-[15px] text-gray-200 mb-2">Email: contact@embracewellness.com</p>
          <p className="text-[15px] text-gray-200 mb-2">Phone: +91 9876543210</p>
          <p className="text-[15px] text-gray-200">Location: Mumbai, India</p>
        </div>

        {/* Stay Connected */}
        <div>
          <h4 className="text-xl font-semibold text-[var(--brown-yellow-bg)] mb-4 uppercase">Stay Connected</h4>
          <p className="text-[15px] text-gray-200 mb-3">
            Join our community of 10,000+ and receive weekly insights and holistic wellness tips.
          </p>
          <div className="flex gap-4 mt-2">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 bg-white text-[var(--brown-red)] flex items-center justify-center rounded-full hover:bg-[var(--brown-yellow-bg)] hover:text-white transition">
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[var(--brown-soft-bg)] mt-12 pt-6 text-sm flex flex-col md:flex-row items-center justify-between gap-4 text-gray-200">
        <p className="text-[14px]">© 2025 <strong className="text-[var(--brown-yellow-bg)]">embrace.feel.alive</strong>. All rights reserved.</p>
        <div className="flex gap-4 text-[14px]">
          <Link to="#" className="hover:text-[var(--brown-yellow-bg)] transition">Privacy Policy</Link>
          <Link to="#" className="hover:text-[var(--brown-yellow-bg)] transition">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

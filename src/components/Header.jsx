import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        "WELLNESS PROGRAMS",
        "OUR TREATMENTS",
        "ABOUT US",
        "GIFT CARDS",
        "YOUR CONCERNS",
        "JOIN OUR TEAM",
        "CONTACT US",
        "PRIVACY POLICY",
    ];

    return (
        <header
            className={`fixed w-full top-0 left-0 z-50 transition-colors duration-300 ${scrolled
                ? "bg-[#fff] sm:text-[#000]"
                : "sm:bg-transparent text-[#fff]"
                }`}
        >
            <div className="container mx-auto flex items-center justify-between px-4 py-4">
                <button onClick={() => setIsOpen(true)} className="md:hidden text-2xl">
                    <FiMenu />
                </button>

                <h1 className="text-xl font-bold tracking-wide">
                    EMBRACE
                </h1>

                {/* Desktop Navigation - Show All Links */}
                <nav className="hidden md:flex gap-6 items-center text-sm uppercase">
                    {navLinks.map((link, idx) => (
                        <a key={idx} href="#" className="hover:text-[#b88672]">
                            {link}
                        </a>
                    ))}
                </nav>

                <a href="#" className="hidden md:block border px-4 py-2 rounded text-sm hover:bg-[#b88672] hover:text-white transition uppercase">
                    BOOK A CONSULTATION
                </a>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="fixed top-0 left-0 w-full h-full z-50 p-6 bg-white text-[#222]"
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-2xl mb-6"
                        >
                            <FiX />
                        </button>

                        <ul className="flex flex-col gap-4 text-lg">
                            {navLinks.map((link, idx) => (
                                <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="border-b border-gray-200 pb-2"
                                >
                                    <a href="#">{link}</a>
                                </motion.li>
                            ))}
                        </ul>

                        <div className="mt-8 flex flex-col gap-3">
                            <button className="bg-[#f8f4f0] shadow px-4 py-2 rounded text-center">
                                WhatsApp Us - Anytime
                            </button>
                            <button className="bg-[#f8f4f0] shadow px-4 py-2 rounded text-center">
                                Call Us - 10AM to 9PM
                            </button>
                            <button className="bg-[#f8f4f0] shadow px-4 py-2 rounded text-center">
                                Book a Consultation
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;

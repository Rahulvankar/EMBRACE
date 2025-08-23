import React from 'react'
import { motion } from "framer-motion";
import { MdEmail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Consultation = () => {
    return (
        <div>
            <section className="relative bg-[var(--brown-soft-bg)] py-20 overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="w-full h-full bg-[radial-gradient(#dab370_1px,transparent_1px)] [background-size:25px_25px] opacity-20 animate-pulse"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    {/* Headline */}
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-6 text-[#41110a] leading-snug"
                    >
                        Your story matters — and your next chapter can be your
                        <span className="text-[var(--brown-yellow-bg)]"> strongest yet.</span>
                    </motion.h2>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-lg md:text-xl font-medium mb-10 text-[var(--brown-red)]"
                    >
                        Book Your Consultation Today
                    </motion.p>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10 text-[var(--brown-red)] font-semibold"
                    >
                        <p className="flex items-center gap-2">
                            <FaPhoneAlt className="w-4 mt-1" /> Call: <span className="text-[var(--brown-yellow-bg)]">+91 93138 64058</span>
                        </p>
                        <p className="flex items-center gap-2">
                            <MdEmail className="w-4 mt-1" />  Email: <span className="text-[var(--brown-yellow-bg)]">mt.embrace.wellness@gmail.com</span>
                        </p>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="flex flex-col sm:flex-row justify-center gap-4"
                    >
                        <Link
                            to="/contact"
                            className="bg-[var(--brown-yellow-bg)] text-white border border-[var(--brown-red-border)] px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-transform"
                        >
                            Book Consultation
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default Consultation

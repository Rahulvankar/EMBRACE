import React from 'react';
import { motion } from 'framer-motion';
import { FaBroadcastTower } from 'react-icons/fa';
import { MdSpa } from 'react-icons/md';
import { Link } from 'react-router-dom';

const SecondSection = () => {
    return (
        <section className="relative py-20 px-4 bg-[var(--brown-soft-bg)] text-primary overflow-hidden font-serif">
            {/* Sparkle Background Pattern */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="w-full h-full bg-[radial-gradient(#decaa3_1px,transparent_1px)] [background-size:24px_24px] opacity-20 animate-pulse"></div>
            </div>

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-16 relative z-10">
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative w-full flex justify-center items-center"
                >
                    <motion.div
                        className="relative w-[320px] md:w-[400px] h-[360px] md:h-[420px] cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Gold Shadow Box */}
                        <div className="absolute top-1 left-4 w-full h-full bg-[var(--brown-yellow-bg)] rounded-xl shadow-2xl z-0" />

                        {/* Badge */}
                        <div className="absolute -top-4 -left-4 bg-[var(--brown-red)] text-white text-xs px-5 py-1 rounded-full z-20 shadow-md tracking-widest">
                            FEATURED
                        </div>

                        {/* Front Box */}
                        <div className="relative w-full h-full bg-white rounded-xl border-2 border-[var(--brown-red)] overflow-hidden shadow-xl z-10 flex flex-col justify-center items-center text-center px-6 py-8">
                            <div className="text-[#9d2b1f] text-3xl mb-4 flex gap-1">
                                <MdSpa />
                                <MdSpa />
                                <MdSpa />
                            </div>

                            <img
                                src="https://t4.ftcdn.net/jpg/02/20/90/19/360_F_220901940_V26RzCNGgJrZBNBScQEWdTe6ix6f52vQ.jpg"
                                alt="Founder"
                                className="w-full h-48 object-cover rounded-md mb-4"
                            />

                            <p className="text-[#9d2b1f] font-semibold text-sm italic mb-2">
                                “Healing starts within — tune into your journey.”
                            </p>

                            <div className="w-12 h-1 bg-[#E2B63B] my-2 rounded-full" />

                            <p className="text-xs text-gray-600">
                                Wellness is not an escape. It's a lifestyle.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-center md:text-left"
                >
                    <p className="text-lg tracking-widest uppercase text-[var(--brown-secondary)] border-b-2 inline-block border-[var(--brown-red)] mb-4">
                        About Us
                    </p>

                    <h2 className="text-[34px] md:text-[42px] leading-tight font-serif italic text-[var(--brown-red)] mb-6">
                        About Embrace (Intro)
                    </h2>

                    <p className="text-[var(--brown-red)] text-[16px] md:text-[18px] leading-relaxed mb-6">
                        <p>
                            At <span className='text-[var(--brown-secondary)] font-bold'>Embrace</span>, we believe that wellness is more than the absence
                            of illness — it’s the art of living vibrantly.
                        </p>
                        <p>Our multidisciplinary team of doctors, physiotherapists,
                            nutritionists, and lifestyle coaches crafts personalised programs
                            that address not just the physical body, but also the emotional
                            and mental wellbeing of every woman who walks through our
                            doors.</p>
                        <p>From the delicate care of pregnancy to the empowering journey
                            of post-cancer recovery, we’re here to guide, support, and
                            inspire you every step of the way.</p>
                    </p>

                    <button className="inline-flex items-center gap-2 px-6 py-2 rounded-full border-2 border-[var(--brown-secondary)] bg-transparent text-[var(--brown-secondary)] hover:bg-[#9d2b1f] hover:text-white transition-all duration-300 text-sm font-semibold shadow-md">
                        <Link to="/about"> More About </Link>
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default SecondSection;

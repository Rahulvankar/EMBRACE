import React from 'react';
import { motion } from 'framer-motion';
import { FaBroadcastTower } from 'react-icons/fa';
import { MdSpa } from 'react-icons/md';

const SecondSection = () => {
    return (
        <section className="relative py-20 px-4 bg-[#FFFDF7]">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-16 relative z-10">

                {/* Left Side - Layered Boxes with Enhancements */}
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
                        {/* Big Bottom Box */}
                        <div className="absolute top-1 left-4 w-full h-full bg-[#E2B63B] rounded-xl shadow-xl z-0" />

                        {/* Extra Golden Badge Box */}
                        <div className="absolute -top-3 -left-3 bg-[#9d2b1f] text-white text-xs px-4 py-1 rounded-full z-20 shadow-md tracking-widest">
                            FEATURED
                        </div>

                        {/* Centered Content Box */}
                        <div className="relative w-full h-full bg-white rounded-xl border-2 border-[#9d2b1f] overflow-hidden shadow-2xl z-10 flex flex-col justify-center items-center text-center px-6 py-8">
                            <div className="text-[#9d2b1f] text-3xl mb-4  flex">
                                <MdSpa />
                                <MdSpa />
                                <MdSpa />
                            </div>
                            <img
                                src="https://t4.ftcdn.net/jpg/02/20/90/19/360_F_220901940_V26RzCNGgJrZBNBScQEWdTe6ix6f52vQ.jpg"
                                alt="Founder"
                                className="w-full h-50 object-cover rounded-md mb-4"
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

                {/* Right Side - Text Content */}
                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-center md:text-left"
                >
                    <p className="text-lg tracking-widest uppercase text-[#9d2b1f] border-b-2 inline-block border-[#9d2b1f] mb-4">
                        About Us
                    </p>

                    <h2 className="text-[34px] md:text-[42px] leading-tight font-serif italic text-[#5E3D1F] mb-6">
                        Pioneering In-City Wellness
                    </h2>

                    <p className="text-gray-800 text-[16px] md:text-[18px] leading-relaxed mb-6">
                        <span className="text-[#9d2b1f] font-medium">
                            Dhun is where traditional wisdom meets modern convenience
                        </span>{' '}
                        — a sanctuary offering a touch-led holistic approach to healing. Unlike
                        fleeting retreats, Dhun brings balance into your everyday life. It’s more than
                        a spa — it’s your space to harmonise, heal and reconnect.
                    </p>

                    <button className="inline-flex items-center gap-2 px-6 py-2 rounded-full border-2 border-[#9d2b1f] bg-transparent text-[#9d2b1f] hover:bg-[#9d2b1f] hover:text-white transition-all duration-300 text-sm font-semibold">
                        <FaBroadcastTower className="text-base" />
                        Tap to Tune In
                    </button>
                </motion.div>
            </div>

            {/* Light Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/soft-wallpaper.png')] opacity-10 z-0 pointer-events-none" />
        </section>
    );
};

export default SecondSection;

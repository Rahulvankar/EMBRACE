import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { MdEmail, MdOutlineStarBorderPurple500 } from "react-icons/md";
import { FaPhoneAlt, FaUsers } from "react-icons/fa";
import AboutHero from "../components/AboutHero";
import { Link } from "react-router-dom";
import PhotoGallery from "../components/photoGallery";

const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.3,
        },
    },
};

const smoothFadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const smoothSlideLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: "easeOut" },
    },
};

const smoothSlideRight = {
    hidden: { opacity: 0, x: 40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: "easeOut" },
    },
};

const smoothScaleHover = {
    whileHover: { scale: 1.03, transition: { duration: 0.3, ease: "easeOut" } },
    whileTap: { scale: 0.97 },
};

const About = () => {
    return (
        <>
            <AboutHero />
            <div className="font-serif bg-[var(--brown-soft-bg)] text-gray-800">


                {/* Philosophy & Mission */}
                <motion.section
                    className="relative py-16 md:py-24 px-6 md:px-20 bg-[var(--brown-soft-bg)] overflow-hidden font-serif text-[var(--brown-red)]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={container}
                >
                    {/* Dot Background */}
                    <div className="absolute inset-0 z-0 pointer-events-none">
                        <div className="w-full h-full bg-[radial-gradient(#dab370_1px,transparent_1px)] [background-size:25px_25px] opacity-20 animate-pulse"></div>
                    </div>

                    <motion.div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center relative z-10">
                        {/* Images */}
                        <motion.div className="relative flex-1 flex justify-center" variants={smoothSlideLeft}>
                            <motion.div
                                className="relative w-[90%] md:w-[75%] rounded-3xl overflow-hidden shadow-2xl border-8 border-white cursor-pointer"
                                variants={smoothFadeUp}
                                {...smoothScaleHover}
                            >
                                <img
                                    src="/image/inst2.jpg"
                                    alt="Luxury Room"
                                    className="w-full h-auto object-cover"
                                />
                            </motion.div>

                            <motion.div
                                className="absolute -top-10 hidden md:block right-4 md:right-0 w-44 h-44 md:w-64 md:h-52 rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white cursor-pointer"
                                variants={smoothFadeUp}
                                {...smoothScaleHover}
                            >
                                <img
                                    src="/image/inst1.jpg"
                                    alt="Hotel Room"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>

                            <motion.div
                                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-xl px-6 py-3 flex justify-center items-center gap-3 border border-yellow-400 cursor-default"
                                variants={smoothFadeUp}
                            >
                                <span className="bg-[var(--brown-yellow-bg)] text-white p-2 rounded-full text-xl">
                                    <FaUsers />
                                </span>
                                <div>
                                    <p className="text-lg font-bold">50+</p>
                                    <p className="text-sm text-gray-500">Experienced Staff</p>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Text Content */}
                        <motion.div className="flex-1 text-center lg:text-left px-5" variants={smoothSlideRight}>
                            <motion.h4
                                className="uppercase tracking-wider text-[var(--brown-red)] font-semibold mb-3 border-b-2 border-[var(--brown-yellow-bg)] inline-block"
                                variants={smoothFadeUp}
                            >
                                Our Story
                            </motion.h4>
                            <motion.h2
                                className="text-3xl md:text-6xl font-extrabold italic mb-6 leading-snug text-[var(--brown-red)]"
                                variants={smoothFadeUp}
                                transition={{ delay: 0.15 }}
                            >
                                Welcome to Embrace
                            </motion.h2>
                            <motion.p
                                className="text-lg text-[var(--brown-red)] leading-relaxed"
                                variants={smoothFadeUp}
                                transition={{ delay: 0.3 }}
                            >
                                Embrace began with a vision — to create a space where women could find complete, compassionate care for their unique health journeys.
                            </motion.p>
                            <motion.p
                                className="text-lg text-[var(--brown-red)] leading-relaxed"
                                variants={smoothFadeUp}
                                transition={{ delay: 0.3 }}
                            >
                                Founded by a passionate team of healthcare specialists, we recognised a gap in women’s wellness: programs that not only treat, but also empower, educate, and uplift.
                            </motion.p>
                            <motion.p
                                className="text-lg text-[var(--brown-red)] leading-relaxed"
                                variants={smoothFadeUp}
                                transition={{ delay: 0.3 }}
                            >
                                From helping a new mother recover her strength, to guiding a cancer survivor back to mobility, to supporting a woman embracing her post-menopause life <span className="font-bold text-[var(--brown-red)]"> — we are more than a clinic; we are a partner in transformation.</span>
                            </motion.p>
                        </motion.div>
                    </motion.div>
                </motion.section>

                {/* Founder’s Note */}
                <motion.section
                    className="pt-20 bg-gradient-to-b bg-[var(--brown-yellow-bg)]"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="max-w-6xl mx-auto px-6 pb-20">
                        <motion.h2
                            className="text-4xl font-bold text-center text-white mb-14 drop-shadow-lg"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                        >
                            Our Mission & Vision
                        </motion.h2>

                        <motion.div
                            className="bg-white rounded-3xl shadow-xl p-10 text-center relative cursor-default"
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <motion.div
                                className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-4 shadow-lg cursor-pointer"
                                initial={{ scale: 0, rotate: 45, opacity: 0 }}
                                whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                viewport={{ once: true }}
                                whileHover={{
                                    y: -10,           // lift up
                                    rotate: 360,      // spin 360 deg on hover
                                    transition: { duration: 1, ease: "easeInOut" },
                                }}
                            >
                                <span className="text-[var(--brown-yellow-bg)] text-3xl">
                                    <MdOutlineStarBorderPurple500 />
                                </span>
                            </motion.div>


                            <motion.p
                                className="text-lg italic text-gray-700 max-w-3xl mx-auto"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true }}
                            >
                                <p className="mb-4">  <span className="font-bold text-[var(--brown-red)]">Mission</span> :To empower women to achieve optimal health at every stage of life through personalised, evidence-based programs that address the body, mind, and spirit.</p>
                                <p><span className="font-bold text-[var(--brown-red)]">Vision</span> :A world where every woman feels strong, confident, and supported — no matter the challenges she faces.</p>
                            </motion.p>
                        </motion.div>
                    </div>
                    <PhotoGallery />
                    {/* Meet Our Team */}
                </motion.section>
                <motion.section
                    className="relative py-20 px-6 md:px-20 bg-gradient-to-b bg-[var(--brown-red)] rounded-t-2xl overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={container}
                    >
                        <motion.h2
                            className="relative z-10 text-4xl pb-5 font-extrabold text-center text-white  tracking-wide"
                            variants={smoothFadeUp}
                        >
                            Meet Our Team
                        </motion.h2>
                        <motion.p
                            className="relative z-10  font-extrabold mb-10  pb-10 text-center text-white  tracking-wide"
                            variants={smoothFadeUp}
                        >
                            At Embrace, your care is guided by a multidisciplinary team including :
                        </motion.p>

                        <motion.div
                            className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto"
                            variants={container}
                        >
                            {[
                                {
                                    name: "Medical Doctors",
                                    role: "offering expert clinical oversight and safety.",
                                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG87Zz7W9h3wCf-P7ppB5SXb-OJsos-kKsNA&s",
                                },
                                {
                                    name: "Physiotherapists",
                                    role: "restoring mobility, strength, and function.",
                                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG87Zz7W9h3wCf-P7ppB5SXb-OJsos-kKsNA&s",
                                },
                                {
                                    name: "Nutritionists & Dietitians ",
                                    role: "crafting personalised nutrition strategies.",
                                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG87Zz7W9h3wCf-P7ppB5SXb-OJsos-kKsNA&s",
                                },
                                {
                                    name: "Lifestyle Coaches",
                                    role: "guiding sustainable habits and emotional resilience.",
                                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG87Zz7W9h3wCf-P7ppB5SXb-OJsos-kKsNA&s",
                                },
                            ].map((member, i) => (
                                <motion.div
                                    key={i}
                                    className="relative bg-white rounded-3xl pt-20 pb-8 px-8 text-center shadow-lg border border-[var(--brown-yellow-bg)] transition-all duration-500 min-h-[340px] cursor-pointer hover:shadow-xl hover:border-yellow-400 z-10"
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: {
                                            opacity: 1,
                                            y: 0,
                                            transition: { duration: 0.6, ease: "easeOut", delay: i * 0.2 },
                                        },
                                    }}
                                    whileHover={{ scale: 1.04 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full border-4 border-[var(--brown-yellow-bg)] overflow-hidden shadow-xl">
                                        <img
                                            src={member.img}
                                            alt={member.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <h3 className="mt-8 text-2xl font-serif font-bold text-[var(--brown-red)]">{member.name}</h3>
                                    <div className="mx-auto w-16 border-b-2 border-[var(--brown-yellow-bg)] mb-5"></div>
                                    <p className=" text-sm leading-relaxed px-2">
                                        {member.role}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                        <motion.p
                            className="relative z-10  font-extrabold  pt-10 text-center text-white  tracking-wide"
                            variants={smoothFadeUp}
                        >
                            Together, we collaborate to ensure <span className=" font-bold text-[var(--brown-yellow-bg)]">you receive the most
                                holistic, personalised care possible.</span>
                        </motion.p>

                    </motion.div>

                </motion.section>


                <motion.section
                    className="relative py-20 px-6 md:px-20 bg-[var(--brown-soft-bg)] text-[var(--brown-red)] overflow-hidden font-serif"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={container}
                >
                    <div className="absolute inset-0 z-0 pointer-events-none">
                        <div className="w-full h-full bg-[radial-gradient(#dab370_1px,transparent_1px)] [background-size:25px_25px] opacity-20 animate-pulse"></div>
                    </div>

                    <motion.h2
                        className="relative z-10 text-3xl font-bold text-center mb-12"
                        variants={smoothFadeUp}
                    >
                        Our Values
                    </motion.h2>

                    <motion.div
                        className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
                        variants={container}
                    >
                        {[
                            {
                                title: "Empathy",
                                desc: "We listen, understand, and honour your unique story.",
                            },
                            {
                                title: "Excellence",
                                desc: "Every program follows proven, research-backed practices.",
                            },
                            {
                                title: "Integrity",
                                desc: "We commit to honest advice and safe, ethical care.",
                            },
                            {
                                title: "Empowerment",
                                desc: "Our goal is to help you take control of your own wellbeing.",
                            },
                        ].map((val, i) => (
                            <motion.div
                                key={i}
                                className="bg-[var(--brown-yellow-bg)] rounded-2xl p-8 text-center shadow-lg cursor-pointer transition-transform duration-500"
                                variants={smoothFadeUp}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                <h3 className="text-2xl font-bold mb-2">{val.title}</h3>
                                <p>{val.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.section>
                <motion.section
                    className="relative py-20 px-6 md:px-20 bg-[var(--brown-red)] text-white font-serif overflow-hidden rounded-t-2xl"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={container}
                >

                    <div className="relative z-10 max-w-4xl mx-auto text-center">
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold mb-6"
                            variants={smoothFadeUp}
                        >
                            Our Approach
                        </motion.h2>

                        <motion.p
                            className="text-lg leading-relaxed mb-6"
                            variants={smoothFadeUp}
                        >
                            We don’t believe in <span className="font-semibold">“one-size-fits-all”</span> healthcare.
                            Every program begins with a detailed consultation, physical assessment, and lifestyle review.
                        </motion.p>

                        <motion.p
                            className="text-lg leading-relaxed mb-6"
                            variants={smoothFadeUp}
                        >
                            From there, we create a customised plan — blending medical treatment, therapeutic exercise,
                            nutrition, and emotional wellbeing strategies.
                        </motion.p>

                        <motion.p
                            className="text-lg leading-relaxed font-medium"
                            variants={smoothFadeUp}
                        >
                            We also track your progress with regular check-ins, ensuring your journey remains on the right path.
                        </motion.p>
                    </div>
                </motion.section>

                <motion.section
                    className="relative py-20 px-6 md:px-20 bg-[var(--brown-yellow-bg)] font-serif overflow-hidden rounded-b-2xl"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={container}
                >
                    <div className="relative z-10 max-w-5xl mx-auto text-center">
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold mb-12 text-white"
                            variants={smoothFadeUp}
                        >
                            Why Women Trust <span className="text-[var(--brown-gold)]">Embrace</span>
                        </motion.h2>

                        <motion.div
                            className="grid md:grid-cols-3 gap-8"
                            variants={container}
                        >
                            {[
                                {
                                    title: "Holistic Understanding",
                                    desc: "We understand women’s health at every life stage.",
                                },
                                {
                                    title: "Compassionate Care",
                                    desc: "We combine medical knowledge with human-centred care.",
                                },
                                {
                                    title: "Safe & Supportive",
                                    desc: "We offer a private space where you feel heard and valued.",
                                },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="bg-[var(--brown-soft-bg)] p-8 rounded-2xl shadow-lg text-center transition-transform duration-500 cursor-pointer border border-[var(--brown-gold)]"
                                    variants={smoothFadeUp}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                    <p className="text-base leading-relaxed">{item.desc}</p>
                                </motion.div>

                            ))}
                        </motion.div>
                    </div>
                </motion.section>

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

                <Footer />
            </div>
        </>
    );
};

export default About;

import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";
import Footer from "../components/Footer";
import { HeadProvider, Title, Meta } from "react-head";
import { Link } from "react-router-dom";

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const PregnancyCare = () => {
    return (
        <>
            <HeadProvider>
                <Title>Pregnancy Care Program | Embrace Women’s Wellness </Title>
                <Meta name="description" content="Experience a confident and healthy pregnancy with Embrace’s personalised care program. Medical guidance, nutrition, exercise, and emotional support for expectant mothers.  " />
            </HeadProvider>
            <div className="bg-[#fdf9f3] text-brown-900 font-sans overflow-hidden">

                {/* Hero Section */}
                <section
                    className="relative h-[100vh] flex flex-col justify-center items-center text-white text-center"
                    style={{
                        backgroundImage: `url(/image/pregnancyCare.jpg)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center 50px",
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    <div className="absolute inset-0 bg-black/50"></div>
                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        className="text-3xl md:text-5xl font-extrabold relative z-10 mb-4 bg-gradient-to-r from-[var(--brown-yellow-bg)] to-[#cfa348] bg-clip-text text-transparent"
                    >
                        Nurturing You and Your Baby, Every Step of the Way
                    </motion.h1>
                    <motion.p
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        transition={{ delay: 0.2 }}
                        className="text-1xl md:text-lg max-w-2xl relative z-10"
                    >
                        Our Pregnancy Care Program ensures your journey to motherhood is healthy,
                        joyful, and fully supported — from your first trimester through postpartum recovery.
                    </motion.p>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        transition={{ delay: 0.4 }}
                        className="md:flex gap-4 mt-6 relative z-10"
                    >
                        <button className="bg-gradient-to-r my-2 md:my-0 from-[var(--brown-yellow-bg)] to-[#cfa348] px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
                            <Link to="/contact" className="text-white">
                                Book Your Consultation
                            </Link>
                        </button>
                        <a
                            href="/pdf/PregnancyCareProgram.pdf" // put your PDF file path here
                            download="Pregnancy Care Program.pdf"
                            className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-[#cfa348] transition inline-block"
                        >
                            Download Program Brochure
                        </a>
                    </motion.div>
                </section>

                {/* About the Program */}
                <section className="py-16 px-6 text-center bg-[var(--brown-soft-bg)] relative overflow-hidden">
                    <div className="absolute inset-0 z-0 pointer-events-none">
                        <div className="w-full h-full bg-[radial-gradient(#dab370_1px,transparent_1px)] [background-size:25px_25px] opacity-20"></div>
                    </div>
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeInUp}
                        viewport={{ once: true }}
                        className="text-4xl font-bold mb-6 text-[#41110a]"
                    >
                        About the Program
                    </motion.h2>
                    <p className="text-lg leading-relaxed max-w-4xl mx-auto mb-5">
                        Pregnancy is one of the most beautiful phases of life — and also one of the most delicate.
                        At Embrace, we combine medical expertise with holistic care to ensure both you and your
                        baby receive the best support possible.
                    </p>
                    <ul className="max-w-4xl mx-auto text-left space-y-3 list-disc pl-6">
                        <li>Comprehensive prenatal care to monitor health and development.</li>
                        <li>Balanced nutrition planning for maternal and fetal wellbeing.</li>
                        <li>Safe, tailored exercise routines to maintain strength and prepare for childbirth.</li>
                        <li>Stress reduction and mental wellness techniques to keep you calm and confident.</li>
                        <li>Postpartum support for a smoother recovery and emotional balance after delivery.</li>
                    </ul>
                </section>

                {/* Benefits */}
                <section className="bg-yellow-500 py-16">
                    <h2 className="text-4xl font-bold text-center mb-12 text-white">Benefits</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
                        {[
                            "Improved maternal health and reduced pregnancy discomfort.",
                            "Better birth preparedness and confidence.",
                            "Reduced risk of complications with regular monitoring.",
                            "Enhanced postpartum recovery and emotional stability.",
                            "Guidance and reassurance from a supportive, expert team."
                        ].map((benefit, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition mx-2"
                            >
                                <p className="text-gray-800">{benefit}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Who Can Benefit */}
                <section className="relative bg-[#fffaf3] pt-16 pb-16 overflow-hidden">
                    <div className="absolute inset-0 z-0 pointer-events-none">
                        <div className="w-full h-full bg-[radial-gradient(circle,#dab370_1px,transparent_1px)] [background-size:25px_25px] opacity-20"></div>
                    </div>
                    <h2 className="text-3xl font-bold text-center mb-8">Who Can Benefit?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-12 text-gray-800 w-[80%] md:w-[50%] mx-auto">
                        <ul className="space-y-4">
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-[#41110a] rounded-full"></span>
                                First-time mothers seeking guidance and reassurance.
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-[#41110a] rounded-full"></span>
                                Mothers with previous pregnancy complications.
                            </li>
                        </ul>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-[#41110a] rounded-full"></span>
                                Women looking for holistic prenatal and postnatal care.
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-[#41110a] rounded-full"></span>
                                Expectant mothers seeking customised nutrition and fitness plans.
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Our Approach */}
                <div className="py-16 bg-[#41110a] rounded-t-3xl text-white">
                    <h2 className="text-3xl font-bold text-center mb-10">Our Approach</h2>
                    <div className="max-w-4xl mx-auto space-y-6">
                        {[
                            {
                                title: "Initial Consultation & Medical Review",
                                desc: "Understanding your medical history, pregnancy stage, and lifestyle."
                            },
                            {
                                title: "Customised Care Plan",
                                desc: "Covering medical checkups, dietary advice, safe exercise, and mental wellness."
                            },
                            {
                                title: "Regular Monitoring",
                                desc: "Ensuring the health of both mother and baby at each stage."
                            },
                            {
                                title: "Labour Preparation & Birth Education",
                                desc: "Equipping you with knowledge and techniques for a smoother delivery."
                            },
                            {
                                title: "Postpartum Support",
                                desc: "Recovery guidance, nutrition adjustments, and emotional support."
                            }
                        ].map((step, i) => (
                            <div key={i} className="flex items-center w-[80%] md:w-[60%] mx-auto gap-4">
                                <div className="bg-white text-yellow-500 w-10 h-10 flex items-center justify-center rounded-lg font-bold">
                                    {i + 1}
                                </div>
                                <div>
                                    <h3 className="font-semibold">{step.title}</h3>
                                    <p className="text-sm">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Testimonials */}
                <section className="bg-yellow-500 py-16 rounded-b-3xl">
                    <h2 className="text-4xl font-bold text-center mb-12 text-white">Testimonials</h2>
                    <div className="grid sm:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16 mx-2">
                        {[
                            `"The team at Embrace made my pregnancy experience joyful and stress-free. Their care didn’t end at delivery — they were with me during postpartum too." – Priya, Pregnancy Care Client`,
                            `"From nutrition to safe workouts, everything was tailored to my needs. I felt confident and healthy throughout." – Megha, Pregnancy Care Client`
                        ].map((quote, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.2 }}
                                className="bg-white p-6 rounded-xl shadow-lg italic hover:scale-105 transition"
                            >
                                {quote}
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Final CTA */}
                <section className="relative bg-[#fffaf3] py-16 overflow-hidden">
                    <div className="absolute inset-0 z-0 pointer-events-none">
                        <div className="w-full h-full bg-[radial-gradient(circle,#dab370_1px,transparent_1px)] [background-size:25px_25px] opacity-20"></div>
                    </div>
                    <div className="max-w-3xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-4 text-[#41110a]">
                            Every pregnancy is unique — and so is our care for you.
                        </h2>
                        <p className="text-xl font-semibold flex items-center justify-center gap-2 mb-8 text-[#41110a]">
                            <FaPhoneAlt className="w-4 mt-1" /> Call: +91 93138 64058
                        </p>
                        <div className="flex justify-center gap-4">
                            <a
                                href="/pdf/PregnancyCareProgram.pdf"
                                download="Pregnancy Care Program.pdf"
                                className="bg-white text-[#cfa348] px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg hover:scale-105 transition inline-block text-center"
                            >
                                Download Brochure
                            </a>

                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </>

    );
};

export default PregnancyCare;

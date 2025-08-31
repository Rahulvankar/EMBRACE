import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";
import Footer from "../components/Footer";
import { HeadProvider, Title, Meta } from "react-head";
import { Link } from "react-router-dom";
import bg_logo from '../../public/image/Embrace_logo.png';
const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const CancerRehabilitation = () => {
    return (
        <>
            <HeadProvider>
                <Title>Cancer Rehabilitation Program | Embrace Women’s Wellness </Title>
                <Meta name="description" content="Restore strength, mobility, and confidence after cancer treatment with Embrace’s personalised rehabilitation program. Expert care, evidence-based methods, and compassionate support for your recovery journey" />
            </HeadProvider>
            <div className="bg-[#fdf9f3] text-brown-900 font-sans overflow-hidden">

                {/* Hero Section */}
                <section
                    className="relative h-[100vh] flex flex-col justify-center items-center text-white text-center"
                    style={{
                        backgroundImage: `url(/image/Cancer-Rehabilitation.jpg)`,
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
                        Life After Cancer — Stronger, Healthier, Happier
                    </motion.h1>
                    <motion.p
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        transition={{ delay: 0.2 }}
                        className="text-1xl md:text-lg max-w-2xl relative z-10"
                    >
                        Our Cancer Rehabilitation Program is designed to help you regain physical strength,
                        manage side effects, and rebuild your confidence so you can fully embrace life again.
                    </motion.p>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        transition={{ delay: 0.4 }}
                        className="md:flex gap-4 mt-6 relative z-10"
                    >
                        <button className="bg-gradient-to-r my-2 md:my-0 from-[#f6d365] to-[#cfa348] px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
                            <Link to="/contact" className="text-white">
                                Book Your Consultation
                            </Link>
                        </button>
                        <a
                            href="/pdf/CancerRehabilitation.pdf"
                            download="Cancer Rehabilitation.pdf"
                            className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-[#cfa348] transition inline-block text-center"
                        >
                            Download Program Brochure
                        </a>

                    </motion.div>
                </section>

                {/* About the Program */}
                <section className="py-16 px-6 text-center bg-[#fffaf3] relative overflow-hidden">
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
                        Cancer changes life in more ways than one — but recovery is possible, and you don’t have to do it alone.
                        Our Cancer Rehabilitation Program is custom-built for women who are navigating life after cancer treatment
                        or preparing for treatment ahead.
                    </p>
                    <ul className=" mx-auto text-left space-y-3 list-disc w-[80%] md:w-[50%] ">
                        <li>Restoring physical function through targeted exercises and physiotherapy.</li>
                        <li>Managing side effects such as fatigue, joint stiffness, neuropathy, or swelling.</li>
                        <li>Supporting emotional wellbeing with stress-reduction techniques and a caring environment.</li>
                        <li>Boosting overall health with nutrition, lifestyle changes, and safe activity plans.</li>
                    </ul>
                    <p className="text-lg leading-relaxed max-w-4xl mx-auto mt-5">
                        Every plan is designed around your medical history, current capabilities, and future goals — so you can
                        heal at your own pace while building resilience for the long term.
                    </p>
                </section>

                {/* Benefits */}
                <section className="bg-yellow-500 py-16 relative overflow-hidden">
                    <img src={bg_logo} alt="" className="bg_logo" />

                    <h2 className="text-4xl font-bold text-center mb-12 text-white">Benefits</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16 px-2">
                        {[
                            "Improved mobility, balance, and muscle strength.",
                            "Reduced fatigue and enhanced daily energy levels.",
                            "Better management of pain, swelling, and other treatment-related symptoms.",
                            "Emotional support to reduce anxiety and boost mental wellness.",
                            "Personalised nutrition guidance for healing and immune health."
                        ].map((benefit, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition"
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-12 text-gray-800 w-[80%] md:w-[60%] mx-auto">
                        <ul className="space-y-4">
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-[#41110a] rounded-full"></span>
                                Women currently undergoing cancer treatment.
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-[#41110a] rounded-full"></span>
                                Survivors in the post-treatment phase.
                            </li>
                        </ul>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-2">
                                <span className="w-3 h-2 bg-[#41110a] rounded-full"></span>
                                Women preparing for surgery or therapy who want to improve recovery outcomes.
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-3 h-2 bg-[#41110a] rounded-full"></span>
                                Those experiencing long-term side effects and looking to regain function.
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
                                title: "Initial Consultation & Assessment",
                                desc: "We review your medical background, treatment history, and current health status."
                            },
                            {
                                title: "Personalised Care Plan",
                                desc: "A combination of physiotherapy, nutrition, and wellness strategies tailored to your needs."
                            },
                            {
                                title: "Ongoing Sessions & Monitoring",
                                desc: "Regular supervised exercises and therapy sessions with progress tracking."
                            },
                            {
                                title: "Lifestyle Integration",
                                desc: "We help you build healthy habits that support your long-term recovery."
                            },
                            {
                                title: "Graduation & Continued Support",
                                desc: "Even after the program, we remain available for follow-ups and advice."
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
                <section className="bg-yellow-500 py-16 rounded-b-3xl relative overflow-hidden">
                          <img src={bg_logo} alt=""  className="bg_logo"/>

                    <h2 className="text-4xl font-bold text-center mb-12 text-white">Testimonials</h2>
                    <div className="grid sm:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16 px-2">
                        {[
                            `"After chemotherapy, I struggled to walk without feeling exhausted. Embrace gave me a program that gradually restored my stamina. Today, I can do things I never thought possible again." – Shalini, Cancer Rehab Client`,
                            `"I felt safe and supported every step of the way. The team understood my challenges and celebrated every milestone with me." – Ritika, Cancer Survivor`
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
                            Your recovery is the beginning of a stronger, more vibrant life.
                        </h2>
                        <p className="text-xl font-semibold flex items-center justify-center gap-2 mb-8 text-[#41110a]">
                            <FaPhoneAlt className="w-4 mt-1" /> Call: +91 93138 64058
                        </p>
                        <div className="flex justify-center gap-4">
                            <a
                                href="/pdf/CancerRehabilitation.pdf"
                                download="Cancer Rehabilitation.pdf"
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

export default CancerRehabilitation;

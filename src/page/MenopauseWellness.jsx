import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";
import Footer from "../components/Footer";
import { HeadProvider, Title } from "react-head";
import { Meta } from "react-router-dom";

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const MenopauseWellness = () => {
    return (
        <>
            <HeadProvider>
                <Title>Menopause Wellness Program | Embrace Women’s Health </Title>
                <Meta name="description" content="Navigate menopause with balance and confidence. Embrace’s personalised wellness program offers medical guidance, lifestyle support, and holistic care for physical, emotional, and long-term health.  " />
            </HeadProvider>
            <div className="bg-[#fdf9f3] text-brown-900 font-sans overflow-hidden">

                {/* Hero Section */}
                <section
                    className="relative h-[100vh] flex flex-col justify-center items-center text-white text-center"
                    style={{
                        backgroundImage: `url(/image/menopauseWellness.jpeg)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                >
                    <div className="absolute inset-0 bg-black/50"></div>
                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        className="text-5xl font-extrabold relative z-10 mb-4 bg-gradient-to-r from-[var(--brown-yellow-bg)] to-[#cfa348] bg-clip-text text-transparent"
                    >
                        A New Chapter of Strength, Balance, and Vitality
                    </motion.h1>
                    <motion.p
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        transition={{ delay: 0.2 }}
                        className="text-lg max-w-2xl relative z-10"
                    >
                        Menopause is a transition — not an ending. Our personalised wellness program supports you
                        through the changes, helping you feel in control, energised, and confident.
                    </motion.p>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        transition={{ delay: 0.4 }}
                        className="flex gap-4 mt-6 relative z-10"
                    >
                        <button className="bg-gradient-to-r from-[#f6d365] to-[#cfa348] px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
                            Book Your Consultation
                        </button>
                        <button
                            href="/pdf/MenopauseWellnessProgram.pdf" // put your PDF file path here
                            download="Menopause Wellness Program.pdf"
                            className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-[#cfa348] transition">
                            Download Program Brochure
                        </button>
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
                        Menopause is a natural stage of life, but its symptoms can affect physical comfort,
                        emotional wellbeing, and daily life. At Embrace, we believe this transition can be managed
                        with grace and confidence when the right support is in place.
                    </p>
                    <ul className="max-w-4xl mx-auto text-left space-y-3 list-disc pl-6">
                        <li>Relieve disruptive symptoms such as hot flashes, sleep disturbances, and mood changes.</li>
                        <li>Support bone and heart health through nutrition and lifestyle strategies.</li>
                        <li>Preserve mobility and strength with targeted exercise routines.</li>
                        <li>Boost emotional wellbeing through stress management and mind-body practices.</li>
                    </ul>
                    <p className="text-lg leading-relaxed max-w-4xl mx-auto mt-5">
                        Every plan is customised to your health profile, goals, and preferences — ensuring safe,
                        effective, and empowering results.
                    </p>
                </section>

                {/* Benefits */}
                <section className="bg-yellow-500 py-16">
                    <h2 className="text-4xl font-bold text-center mb-12 text-white">Benefits</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
                        {[
                            "Reduced intensity and frequency of menopause-related symptoms.",
                            "Improved quality of sleep and energy levels.",
                            "Enhanced mood, focus, and emotional stability.",
                            "Strengthened bones, muscles, and cardiovascular health.",
                            "Long-term health planning for post-menopause years."
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-12 text-gray-800 w-[50%] mx-auto">
                        <ul className="space-y-4">
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-[#41110a] rounded-full"></span>
                                Women approaching menopause (perimenopause).
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-[#41110a] rounded-full"></span>
                                Women currently experiencing menopause.
                            </li>
                        </ul>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-[#41110a] rounded-full"></span>
                                Post-menopausal women seeking to optimise their health.
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-[#41110a] rounded-full"></span>
                                Women looking to prevent chronic conditions in later life.
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
                                title: "Detailed Health Assessment",
                                desc: "Review of symptoms, medical history, and lifestyle factors."
                            },
                            {
                                title: "Customised Wellness Plan",
                                desc: "Incorporating medical advice, nutrition, exercise, and lifestyle recommendations."
                            },
                            {
                                title: "Ongoing Support & Adjustments",
                                desc: "Regular follow-ups to track progress and refine your plan."
                            },
                            {
                                title: "Education & Empowerment",
                                desc: "Guidance on understanding your body’s changes and making informed choices."
                            },
                            {
                                title: "Long-Term Wellbeing Focus",
                                desc: "Strategies for sustainable health beyond menopause."
                            }
                        ].map((step, i) => (
                            <div key={i} className="flex items-center w-[60%] mx-auto gap-4">
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
                    <div className="grid sm:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
                        {[
                            `"I thought menopause meant slowing down. Embrace showed me it’s actually the start of a stronger, healthier life." – Neeta, Menopause Wellness Client`,
                            `"The personalised care plan helped me sleep better, feel more energised, and manage my mood swings naturally." – Anita, Menopause Wellness Client`
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
                            Menopause is a new beginning — embrace it with confidence and support.
                        </h2>
                        <p className="text-xl font-semibold flex items-center justify-center gap-2 mb-8 text-[#41110a]">
                            <FaPhoneAlt className="w-4 mt-1" /> Call: +91 XXXXX XXXXX
                        </p>
                        <div className="flex justify-center gap-4">
                            <button
                                href="/pdf/MenopauseWellnessProgram.pdf" // put your PDF file path here
                                download="Menopause Wellness Program.pdf"
                                className="bg-white text-[#cfa348] px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg hover:scale-105 transition">
                                Download Brochure
                            </button>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
};

export default MenopauseWellness;

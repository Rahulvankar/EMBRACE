import { motion } from "framer-motion";
import { DiVim } from "react-icons/di";
import { FaPhoneAlt } from "react-icons/fa";
import Footer from "../components/Footer"
import { HeadProvider, Title, Meta } from "react-head";
import { Link } from "react-router-dom";

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const BodyTransformation = () => {
    return (
        <>
            <HeadProvider>
                <Title>Body Transformation Program | Embrace Women’s Wellness </Title>
                <Meta name="description" content="Achieve your best self with Embrace’s personalised Body Transformation Program — combining fitness, nutrition, and lifestyle coaching for lasting results. " />
            </HeadProvider>

            <div className="bg-[var(--brown-soft-bg)] text-brown-900 font-sans overflow-hidden">

                {/* Hero Section */}
                <section
                    className="relative h-[100vh] flex flex-col justify-center items-center text-white text-center"
                    style={{
                        backgroundImage: `url(/image/bodyTransformation.jpg)`,
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
                        Transform Your Body, Elevate Your Life
                    </motion.h1>
                    <motion.p
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        transition={{ delay: 0.2 }}
                        className="text-1xl md:text-lg max-w-2xl relative z-10"
                    >
                        Go beyond weight loss — build strength, energy, and confidence for life.
                    </motion.p>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        transition={{ delay: 0.4 }}
                        className="md:flex gap-4 mt-6 relative z-10"
                    >
                        <button className="bg-gradient-to-r my-2 md:m-0 from-[var(--brown-yellow-bg)] to-[#cfa348] px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
                            <Link to="/contact" className="text-white">
                                Book Your Consultation
                            </Link>
                        </button>
                        <a
                            href="/pdf/BodyTransformation.pdf"
                            download="Embrace_Program_Brochure.pdf"
                            className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-[#cfa348] transition inline-block text-center"
                        >
                            Download Brochure
                        </a>

                    </motion.div>
                </section>

                {/* About the Program */}
                <section className="py-16 px-6  mx-auto text-center bg-[var(--brown-soft-bg)] relative ">
                    <div className="absolute inset-0 z-0 pointer-events-none">
                        <div className="w-full h-full bg-[radial-gradient(#dab370_1px,transparent_1px)] [background-size:25px_25px] opacity-20 animate-pulse"></div>
                    </div>
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeInUp}
                        viewport={{ once: true }}
                        className="text-4xl font-bold mb-6 text-[var(--brown-red)]"
                    >
                        About the Program
                    </motion.h2>
                    <p className="text-lg leading-relaxed max-w-4xl mx-auto ">
                        The journey to your ideal body is not just physical — it’s a complete lifestyle evolution. At Embrace, we create <span className="text-[var(--brown-red)] font-bold">tailored transformation plans </span>that combine science-backed exercise, balanced nutrition, and mindset coaching to help you achieve <span className="text-[#41110a] font-bold">sustainable, lifechanging results.</span>
                    </p>
                    <p className="text-lg leading-relaxed max-w-4xl mx-auto my-5 ">
                        This isn’t about crash diets or quick fixes — it’s about helping you feel stronger, healthier, and more confident, every single day.
                    </p>
                </section>

                {/* Benefits */}
                <section className=" bg-[var(--brown-yellow-bg)] py-16 relative overflow-hidden">
<img src="image/Embrace.png" alt="embrace_bg"  className="bg_logo"/>

                    <h2 className="text-4xl font-bold text-center mb-12 text-white">Benefits</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
                        {[
                            "Visible improvements in body composition (fat loss,muscle gain, toning).",
                            "Increased stamina, flexibility, and overall fitness.",
                            "Improved metabolism and long-term weight management",
                            "Better posture, joint health, and functional strength.",
                            "Enhanced confidence and body positivity",
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
                <section className=" relative bg-[var(--brown-soft-bg)] pt-16  overflow-hidden">
                    <div className="pb-16" >
                        <div className="absolute inset-0 z-0 pointer-events-none">
                            <div className="w-full h-full bg-[radial-gradient(circle,#dab370_1px,transparent_1px)] [background-size:25px_25px] opacity-20"></div>
                        </div>
                        <h2 className="text-3xl font-bold text-center mb-8 ">Who Can Benefit?</h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-12 text-[var(--brown-red)] w-[80%] md:w-[50%] mx-auto">
                            <ul className="space-y-4">
                                <li className="flex items-center gap-2 ">
                                    <span className="w-2 h-2 bg-[var(--brown-red)] rounded-full"></span>
                                    Women seeking healthy fat loss without extreme diets.
                                </li>
                                <li className="flex items-center gap-2 ">
                                    <span className="w-2 h-2 bg-[var(--brown-red)] rounded-full"></span>
                                    Those looking to gain lean muscle and improve strength.
                                </li>
                            </ul>

                            <ul className="space-y-4">
                                <li className="flex items-center gap-2 ">
                                    <span className="w-2 h-2 bg-[var(--brown-red)] rounded-full"></span>
                                    Women recovering from a sedentary lifestyle.
                                </li>
                                <li className="flex items-center gap-2 ">
                                    <span className="w-2 h-2 bg-[var(--brown-red)] rounded-full"></span>
                                    Anyone aiming for a lifestyle reset with expert guidance.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="py-16 bg-[#41110a]  rounded-t-3xl text-white">

                        <h2 className="text-3xl font-bold text-center mb-10">Our Approach</h2>

                        <div className="max-w-4xl mx-auto space-y-6">
                            {[
                                {
                                    title: "Personal Consultation & Body Assessment",
                                    desc: "Understanding your current fitness level, lifestyle, and goals."
                                },
                                {
                                    title: "Customised Training Plan",
                                    desc: "A progressive workout routine designed for your abilities and objectives."
                                },
                                {
                                    title: "Nutrition Guidance.",
                                    desc: "Practical meal plans and eating strategies for sustainable results."
                                },
                                {
                                    title: "Mindset & Motivation Coaching",
                                    desc: "Building the mental resilience to stay consistent and inspired."
                                },
                                {
                                    title: "Progress Tracking & Adjustments",
                                    desc: "Regular reviews to refine your plan and celebrate milestones."
                                }
                            ].map((step, i) => (
                                <div key={i} className="flex items-center w-[80%] md:w-[60%] mx-auto gap-4">
                                    {/* Number */}
                                    <div className="bg-white text-yellow-500 w-10 h-10 flex items-center justify-center rounded-lg font-bold">
                                        {i + 1}
                                    </div>
                                    {/* Text */}
                                    <div>
                                        <h3 className="font-semibold">{step.title}</h3>
                                        <p className=" text-sm">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


                <section className="bg-yellow-500 py-16 rounded-b-3xl relative overflow-hidden">
                          <img src={bg_logo} alt=""  className="bg_logo"/>

                    {/* Content */}
                    <h2 className="text-4xl font-bold text-center mb-12 relative z-10 text-white">Testimonials</h2>
                    <div className="grid sm:grid-cols-2 gap-8 max-w-6xl md:mx-auto relative z-10 mb-16 px-2 ">
                        {[
                            `"I joined for weight loss, but I gained so much more — strength, confidence, and a healthier relationship with my body." – Rupal, Body Transformation Client`,
                            `"The personalised approach made it easy to stay committed. I feel like the best version of myself now." – Sneha, Body Transformation Client`
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

                <section className="relative bg-[#fffaf3] py-16 overflow-hidden">
                    <div className="absolute inset-0 z-0 pointer-events-none">
                        <div className="w-full h-full bg-[radial-gradient(circle,#dab370_1px,transparent_1px)] [background-size:25px_25px] opacity-20"></div>
                    </div>
                    <div className="max-w-3xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-4 text-[#41110a]">
                            Your dream body and vibrant energy are within reach — let’s make it happen together
                        </h2>
                        <p className="text-xl font-semibold flex items-center justify-center gap-2 mb-8 text-[#41110a]">
                            <FaPhoneAlt className="w-4 mt-1" /> Call: +91 93138 64058
                        </p>
                        <div className="flex justify-center gap-4">
                            <a
                                href="./pdf/PregnancyCareProgram.pdf"  // put PDF path inside public/pdf/
                                download="Pregnancy Care Program.pdf"
                                className="bg-white text-[#cfa348] px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg hover:scale-105 transition inline-block text-center"
                            >
                                Download Brochure
                            </a>

                        </div>
                    </div>
                </section>
                <Footer />

            </div >
        </>

    );
};

export default BodyTransformation;

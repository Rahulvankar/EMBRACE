import { motion } from "framer-motion";
import { Heart, Users, Brain, Handshake, Home } from "lucide-react";

export default function WhyChooseEmbrace() {
    const points = [
        {
            icon: <Home className="w-7 h-7 text-[var(--brown-yellow-bg)]" />,
            title: "One Place, All Care",
            desc: "Integrated services under one roof — medical, physical, nutritional, and emotional.",
        },
        {
            icon: <Users className="w-7 h-7 text-[var(--brown-yellow-bg)]" />,
            title: "Personalised Plans",
            desc: "No “one-size-fits-all” — every program is tailored to your needs and lifestyle.",
        },
        {
            icon: <Brain className="w-7 h-7 text-[var(--brown-yellow-bg)]" />,
            title: "Evidence-Based Approach",
            desc: "Every step is guided by the latest research and clinical expertise.",
        },
        {
            icon: <Handshake className="w-7 h-7 text-[var(--brown-yellow-bg)]" />,
            title: "Support That Lasts",
            desc: "We walk with you beyond program completion to maintain your results.",
        },
        {
            icon: <Heart className="w-7 h-7 text-[var(--brown-yellow-bg)]" />,
            title: "A Space of Trust & Comfort",
            desc: "Safe, private, and empowering environment designed exclusively for women.",
        },
    ];

    return (
        <section className="py-20 bg-[var(--brown-yellow-bg)] relative overflow-hidden font-sans">
<img src="image/Embrace.png" alt="embrace_bg"  className="bg_logo"/>

            <div className="max-w-6xl mx-auto px-6">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-center text-white mb-14"
                >
                    Why Women Choose{" "}
                    <span className="text-[var(--brown-red)]">Embrace</span>
                </motion.h2>

                {/* First row (3 cards) */}
                <div className="grid gap-8 lg:grid-cols-3 mb-8">
                    {points.slice(0, 3).map((point, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            viewport={{ once: true }} className="flex items-start gap-4 bg-white border border-transparent hover:border-[var(--brown-red)] rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
                        >
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[var(--brown-yellow-bg)]/20 group-hover:bg-[var(--brown-yellow-bg)]/30 transition duration-300">
                                {point.icon}
                            </div>
                            <div className="text-left">
                                <h3 className="text-lg font-semibold text-[var(--brown-red-text)]">
                                    {point.title}
                                </h3>
                                <p className="text-gray-700 mt-1">{point.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="grid gap-8 lg:grid-cols-2 max-w-4xl mx-auto">
                    {points.slice(3).map((point, i) => (
                        <motion.div
                            key={i + 3}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: i * 0.3 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-4 bg-white border border-transparent hover:border-[var(--brown-red)] rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
                        >
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[var(--brown-yellow-bg)]/20 group-hover:bg-[var(--brown-yellow-bg)]/30 transition duration-300">
                                {point.icon}
                            </div>
                            <div className="text-left">
                                <h3 className="text-lg font-semibold text-[var(--brown-red-text)]">
                                    {point.title}
                                </h3>
                                <p className="text-gray-700 mt-1">{point.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

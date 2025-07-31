import React from "react";
import { motion } from "framer-motion";
import {
  FaRunning,
  FaMedal,
  FaChalkboardTeacher,
  FaCalendarAlt,
  FaStar,
} from "react-icons/fa";

const cardData = [
  {
    title: "PROGRAMS",
    desc: "Body, Cancer Rehab, Pregnancy, Menopause. Our curated programs are tailored for every stage of wellness.",
    icon: <FaRunning size={22} />,
  },
  {
    title: "RESULTS",
    desc: "Track and achieve measurable wellness outcomes through structured routines and progress reports.",
    icon: <FaMedal size={22} />,
  },
  {
    title: "COACHING",
    desc: "One-on-one personalized coaching sessions that guide you towards long-term health and balance.",
    icon: <FaChalkboardTeacher size={22} />,
  },
  {
    title: "EVENTS",
    desc: "Workshops and events designed to enrich your wellness journey with community and learning.",
    icon: <FaCalendarAlt size={22} />,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.2, duration: 0.6 },
  }),
};

const HighlightedProgramsCards = () => {
  return (
    <section className="py-24 bg-[#E2B63B] relative overflow-hidden font-sans">
      {/* Background Layer */}
      <div className="absolute inset-x-0 top-1/2 h-3/4 bg-[#4B2E1E] rounded-t-[100px] z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-center text-4xl font-semibold mb-6 text-[#4B2E1E] tracking-wide">
          Highlighted Programs
        </h2>
        <p className="text-center text-lg italic text-[#4B2E1E] mb-14">
          (Body, Cancer Rehab, Pregnancy, Menopause)
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 md:gap-10">
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
              variants={cardVariants}
              className="relative flex justify-center items-start group"
            >
              {/* Outer Shadow Box */}
              <div className="absolute top-3 left-3 w-[280px] h-[350px] border-2 border-white bg-[#D4AF37] rounded-2xl z-0 
                transition-all duration-500 group-hover:top-5 group-hover:left-5 
                group-hover:shadow-[0_0_25px_#fff3,0_0_35px_#d4af37aa]">
              </div>

              {/* Inner Card */}
              <div className="relative z-10 w-[280px] h-[350px] bg-white border-2 border-[#4B2E1E] rounded-2xl 
                p-5 pt-20 flex flex-col items-center text-center
                transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] 
                group-hover:-translate-y-3 group-hover:scale-[1.05] 
                hover:shadow-[0_12px_30px_rgba(0,0,0,0.12),0_0_20px_rgba(212,175,55,0.4)]"
              >
                {/* Top Icon Badge */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-br from-[#D4AF37] to-[#b88a28] border-4 border-white text-white rounded-full w-14 h-14 flex items-center justify-center 
                    shadow-md transition-transform duration-500 group-hover:rotate-[360deg]">
                    {card.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-bold text-lg text-[#4B2E1E] mb-1 tracking-wide">
                  {card.title}
                </h3>

                {/* Star Icons */}
                <div className="flex items-center justify-center gap-1 mb-2">
                  <FaStar className="text-[#D4AF37] animate-pulse" />
                  <FaStar className="text-[#D4AF37]" />
                  <FaStar className="text-[#D4AF37] animate-pulse" />
                </div>

                {/* Description */}
                <p className="text-sm text-[#7A5A42] leading-relaxed mb-5 px-2">
                  {card.desc}
                </p>
                <span className="inline-block text-sm font-semibold underline text-[#4B2E1E] transition-colors duration-300 group-hover:text-[#D4AF37]">
                  MORE
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightedProgramsCards;

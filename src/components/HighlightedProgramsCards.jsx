import React from "react";
import { motion } from "framer-motion";
import {
  FaRunning,
  FaMedal,
  FaChalkboardTeacher,
  FaCalendarAlt,
  FaStar,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const cardData = [
  {
    title: "Cancer Rehabilitation",
    desc: "Reclaim your strength and independence after cancer treatment with our evidence-based rehabilitation program. Through tailored physiotherapy, targeted nutrition, and emotional support, we help manage fatigue, rebuild mobility, and restore your quality of life — empowering you to step into your next chapter with confidence.",
    icon: <FaRunning size={22} />,
    url: '/cancerRehabilitation',
  },
  {
    title: "Pregnancy Care Program",
    desc: "Experience a pregnancy journey filled with reassurance and expert guidance. Our holistic care covers medical check-ins, nutrition plans, safe exercise, and stress management techniques to support both you and your baby’s health from the very first trimester through postpartum recovery.",
    icon: <FaMedal size={22} />,
    url: '/PregnancyCare',
  },
  {
    title: "Menopause Wellness Program",
    desc: "Menopause marks a new beginning — and our program ensures you embrace it with balance and vitality. Combining medical expertise, lifestyle adjustments, hormonal support (where needed), and emotional wellbeing strategies, we help you navigate symptoms while protecting your long-term health.",
    icon: <FaChalkboardTeacher size={22} />,
    url: '/menopauseWellness',
  },
  {
    title: "Body Transformation Program",
    desc: "More than just fitness — this is a lifestyle revolution. Our body transformation journey blends personalised training, nutrition coaching, and behavioural guidance to achieve sustainable results in strength, energy, and overall wellness. Whether your goal is weight management, muscle toning, or improved stamina, we make it achievable and lasting.",
    icon: <FaCalendarAlt size={22} />,
    url: '/bodyTransformation',
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
    <section className="py-24 bg-[var(--brown-yellow-bg)] relative overflow-hidden font-sans">
      {/* Background Layer */}
      <div className="absolute inset-x-0 top-1/2 h-3/4 bg-[var(--brown-red)] rounded-t-[100px] z-0"></div>
<img src="image/Embrace.png" alt=""  className="bg_logo"/>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-center text-4xl font-semibold mb-6 text-[var(--brown-red)] tracking-wide">
          Highlighted Programs
        </h2>
        <p className="text-center text-lg italic text-[var(--brown-red)] mb-14">
          (Cancer Rehabilitation, Pregnancy Care Program, Menopause Wellness Program, Body Transformation Program)
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
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
              <div className="absolute top-3 left-3 w-[280px] h-[350px] border-2 border-white bg-[var(--brown-yellow-bg)] rounded-2xl z-0 
                transition-all duration-500 group-hover:top-5 group-hover:left-5 
                group-hover:shadow-[0_0_25px_#fff3,0_0_35px_#d4af37aa]">
              </div>

              {/* Inner Card */}
              <div className="relative z-10 w-[280px] h-[350px] bg-white border-2 border-[var(----brown-red)] rounded-2xl 
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
                <h3 className="font-bold text-lg text-[var(--brown-red)] mb-1 tracking-wide">
                  {card.title}
                </h3>

                {/* Star Icons */}
                <div className="flex items-center justify-center gap-1 mb-2">
                  <FaStar className="text-[var(--brown-yellow-bg)] animate-pulse" />
                  <FaStar className="text-[var(--brown-yellow-bg)]" />
                  <FaStar className="text-[var(--brown-yellow-bg)] animate-pulse" />
                </div>

                {/* Description */}
                <p
                  className="text-sm text-[var(--brown-red)] leading-relaxed mb-5 px-2 line-clamp-5"
                >
                  {card.desc}
                </p>
                <Link to={card.url} className="group">
                  <span className="inline-block text-sm font-semibold underline text-[var(--brown-red)] transition-colors duration-300 group-hover:text-[var(--brown-yellow-bg)]">
                    MORE
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightedProgramsCards;

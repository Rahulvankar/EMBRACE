import React from "react";
import { FaRunning, FaRibbon, FaBaby, FaFemale } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProgramsHero from "../components/ProgramsHero";
import { i, img } from "framer-motion/client";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Body Transformation Program",
    desc: "Personalized fitness and nutrition plans tailored to your unique goals. This program combines strength training, cardio, flexibility routines, and diet guidance to help you build muscle, burn fat, and sustain long-term healthy habits. Progress is tracked with regular assessments to ensure maximum results.",
    icon: <FaRunning size={36} className="text-[#E2B63B]" />,
    img: '/image/bodyTransformation.jpg',
    url: '/bodyTransformation'
  },
  {
    title: "Cancer Rehabilitation",
    desc: "A gentle yet effective program designed to help cancer survivors regain their strength, mobility, and overall well-being. Includes physiotherapy, light exercise, nutrition advice, and mental health support. Focused on boosting energy levels and rebuilding confidence after treatment.",
    icon: <FaRibbon size={36} className="text-[#E2B63B]" />,
    img: "/image/Cancer-Rehabilitation.jpg",
    url: '/cancerRehabilitation'
  },
  {
    title: "Pregnancy Care Program",
    desc: "A holistic wellness approach for expecting mothers. This includes safe and guided exercises to improve flexibility and reduce discomfort, along with nutrition planning, breathing techniques, and relaxation methods. Designed to support a healthy pregnancy and prepare the body for childbirth.",
    icon: <FaBaby size={36} className="text-[#E2B63B]" />,
    img: "/image/pregnancyCare.jpg",
    url: '/PregnancyCare'
  },
  {
    title: "Menopause Wellness Program",
    desc: "A supportive program to help women navigate the changes during menopause. Focuses on managing symptoms like hot flashes, mood swings, and bone health through nutrition, exercise, mindfulness, and hormone-balancing strategies. Helps you stay confident, active, and balanced.",
    icon: <FaFemale size={36} className="text-[#E2B63B]" />,
    img: "/image/menopauseWellness.webp",
    url: '/menopauseWellness'
  },
];


export default function ServicesSection() {
  return (
    <>
      <ProgramsHero />
      <section className="bg-[var(--brown-soft-bg)] py-10 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          {/* Section Title */}
          <h2 className="text-4xl font-bold text-[var(--brown-red)] mb-3">
            Our Premium Services
          </h2>
          <p className="text-[var(--brown-red)] max-w-2xl mx-auto">
            Discover the range of high-quality services we offer to help you achieve your goals.
            Each service is designed with care, precision, and your satisfaction in mind.
          </p>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className={`grid md:grid-cols-2 my-10 gap-0 bg-[var(--brown-yellow-bg)] overflow-hidden shadow-lg`}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }} // Left or Right
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }} // Trigger only when 30% visible
            >
              {/* Image */}
              <div
                className={`${idx % 2 === 0 ? "" : "md:order-2"} h-64 md:h-full`}
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <div
                className={`${idx % 2 === 0 ? "" : "md:order-1"} flex items-center p-8 bg-[var(--brown-red)]`}
              >
                <div>
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300">{service.desc}</p>
                  <Link
                    to={service.url}
                    className="mt-4 inline-block text-[var(--brown-yellow-bg)] font-medium hover:underline"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

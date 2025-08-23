import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    name: 'Rahul',
    image: 'https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg',
    text: '"Embrace didn’t just help me recover — they gave me my life back. I feel stronger, happier, and ready to take on the worldagain." – Aarti, Cancer Rehabilitation Client',
  },
  {
    name: 'Nisha',
    image: 'https://www.shutterstock.com/image-photo/confident-smiling-middle-aged-business-600nw-2451544833.jpg',
    text: '"The care I received during my pregnancy was extraordinary. I felt supported, informed, and confident every single day." – Nisha, Pregnancy Care Client.',
  }
];

const ConnectMembers = () => {
  return (
    <section className="relative py-24 px-4 bg-[var(--brown-soft-bg)] text-[var(--brown-red)] overflow-hidden">
      {/* Sparkle Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(#dab370_1px,transparent_1px)] [background-size:25px_25px] opacity-20 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Left Section */}
        <div className="lg:w-1/3 flex flex-col justify-center">
          <div className="text-6xl text-[var(--brown-yellow-bg)] mb-4"><FaQuoteLeft /></div>
          <h2 className="text-4xl font-bold mb-4 font-serif">Voices of Elegance</h2>
          <p className="mb-6 text-lg">
            Discover heartfelt experiences from our esteemed members who embraced the luxury wellness journey.
          </p>
          <Link to="/contact" className="px-5 py-2 border border-[var(--brown-secondary)] text-[var(--brown-red)] hover:bg-[var(--brown-yellow-bg)] hover:text-white transition-all duration-300 rounded-full font-medium">
            Connect Now →
          </Link>
        </div>

        {/* Right Section - Swiper */}
        <div className="lg:w-2/3">
          <div className="bg-white backdrop-blur-md border border-[var(--brown-secondary)] rounded-2xl p-6 h-[400px] flex items-center justify-center">
            <Swiper
              direction="vertical"
              slidesPerView={1}
              loop
              autoplay={{ delay: 3000 }}
              modules={[Autoplay]}
              className="w-full h-full"
            >
              {testimonials.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center justify-center text-center h-full px-4"
                  >
                    <div className="w-28 h-28 mb-4 rounded-full overflow-hidden border-4 border-[var(--brown-yellow-bg)] shadow-lg">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Royal Icon */}
                    <div className="text-[var(--brown-yellow-bg)] text-3xl mb-2">
                      <FaQuoteLeft />
                    </div>

                    {/* Testimonial Text */}
                    <p className="italic text-lg mb-3 px-4 max-w-xl">{item.text}</p>

                    {/* Stars */}
                    <div className="flex justify-center gap-1 text-[var(--brown-yellow-bg)] text-xl mb-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>

                    {/* Name & Company */}
                    <h4 className="font-bold text-xl">{item.name}</h4>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectMembers;

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Michael',
    company: 'MDS Manufacturing',
    image: 'https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg',
    text: 'Their personalized touch helped us scale quickly. A royal experience.',
  },
  {
    name: 'Diane',
    company: 'ABC Rentals',
    image: 'https://www.shutterstock.com/image-photo/confident-smiling-middle-aged-business-600nw-2451544833.jpg',
    text: 'Luxury meets professionalism. Highly recommend their services.',
  },
  {
    name: 'Allison',
    company: 'Grand Party Rentals',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2lOQHK4HAH3hzhYwtJ_oVgzaaO7sjlDTrTA&s',
    text: 'The elegance and support we received was unmatched..........',
  },
];

const ConnectMembers = () => {
  return (
    <section className="relative py-24 px-4 bg-[#fffaf3] text-[#41110a] overflow-hidden">
      {/* Sparkle Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(#dab370_1px,transparent_1px)] [background-size:25px_25px] opacity-20 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Left Section */}
        <div className="lg:w-1/3 flex flex-col justify-center">
          <div className="text-6xl text-[#b8860b] mb-4"><FaQuoteLeft /></div>
          <h2 className="text-4xl font-bold mb-4 font-serif">Voices of Elegance</h2>
          <p className="mb-6 text-lg">
            Discover heartfelt experiences from our esteemed members who embraced the luxury wellness journey.
          </p>
          <button className="px-5 py-2 border border-[#b8860b] text-[#41110a] hover:bg-[#b8860b] hover:text-white transition-all duration-300 rounded-full font-medium">
            Connect Now →
          </button>
        </div>

        {/* Right Section - Swiper */}
        <div className="lg:w-2/3">
          <div className="bg-white/40 backdrop-blur-md border border-[#b8860b] rounded-2xl p-6 h-[400px] flex items-center justify-center">
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
                    <div className="w-28 h-28 mb-4 rounded-full overflow-hidden border-4 border-[#b8860b] shadow-lg">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Royal Icon */}
                    <div className="text-[#b8860b] text-3xl mb-2">
                      <FaQuoteLeft />
                    </div>

                    {/* Testimonial Text */}
                    <p className="italic text-lg mb-3 px-4 max-w-xl">{item.text}</p>

                    {/* Stars */}
                    <div className="flex justify-center gap-1 text-[#b8860b] text-xl mb-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>

                    {/* Name & Company */}
                    <h4 className="font-bold text-xl">{item.name}</h4>
                    <span className="text-sm opacity-70">{item.company}</span>
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

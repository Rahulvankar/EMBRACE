import React, { useState, useRef, useEffect } from 'react';
import { FaInstagram } from 'react-icons/fa';

const galleryImages = [
  '/image/inst1.jpg',
  '/image/inst2.jpg',
  '/image/inst3.jpg',
  '/image/inst4.jpg',
];

const InstragamFeed = () => {
  const [mainImage, setMainImage] = useState(galleryImages[0]);
  const sliderRef = useRef(null);

  // Click handler
  const handleImageClick = (imgPath) => {
    setMainImage(imgPath);
  };

  // Auto-play slider (only for mobile)
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let scrollPos = 0;
    const interval = setInterval(() => {
      scrollPos += 120; // image width + gap
      if (scrollPos >= slider.scrollWidth - slider.clientWidth) {
        scrollPos = 0;
      }
      slider.scrollTo({ left: scrollPos, behavior: "smooth" });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden font-sans py-24 bg-[var(--brown-yellow-bg)]">
      {/* Bottom Layered Background */}
      <div className="absolute inset-x-0 top-1/2 h-3/4 bg-[var(--brown-red)] rounded-t-[100px] z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-28 md:gap-10">

        {/* Left: Mobile Mockup */}
        <div className="flex-[3] flex justify-center relative items-center">
          <div className="w-[260px] sm:w-[330px] h-[500px] sm:h-[620px] rounded-[2.5rem] bg-black border-[6px] border-neutral-800 shadow-xl overflow-hidden relative">
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 sm:w-16 h-1.5 bg-gray-700 rounded-full z-10" />
            <img
              src='./image/instagarm.png'
              alt="Instagram Feed"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Address Badge */}
          <div className="absolute -bottom-12 bg-white rounded-xl shadow-md px-3 py-2 sm:px-4 sm:py-3 border text-center text-xs sm:text-sm">
            <p className="text-gray-700 font-semibold">Visit Us</p>
            <p className="text-gray-500">123 Wellness Street, Mumbai</p>
          </div>
        </div>

        {/* Right: Grid Gallery */}
        <div className="flex-[7] w-full max-w-full items-center relative">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-center md:text-left">
            Follow Us on Instagram
          </h2>
          <p className="text-white mb-6 text-center md:text-left text-sm sm:text-base">
            Real stories, real transformations. Explore our daily wellness journey.
          </p>

          <div className="relative grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 h-[320px] sm:h-[450px]">
            {/* Image 1 - Large */}
            <div className="col-span-2 row-span-2 relative rounded-xl overflow-hidden shadow-lg">
              <img
                src={mainImage}
                alt="Instagram 1"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition flex items-center justify-center">
                <FaInstagram className="text-white text-xl" />
              </div>
            </div>

            {/* Image 2 */}
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img
                src={galleryImages[1]}
                alt="Instagram 2"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Image 3 */}
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img
                src={galleryImages[2]}
                alt="Instagram 3"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Slider Thumbnails */}
            <div className="absolute bottom-2 left-2 w-full sm:w-[500px] overflow-hidden z-20">
              <div
                ref={sliderRef}
                className="flex gap-2 overflow-x-auto scrollbar-hide justify-center items-center"
              >
                {[...galleryImages, ...galleryImages.slice(0, 2)]
                  .slice(0, 4)
                  .map((img, index) => (
                    <div
                      key={index}
                      className="w-20 sm:w-24 h-20 sm:h-24 flex-shrink-0 rounded-xl overflow-hidden shadow-lg border-2 sm:border-4 border-[var(--brown-yellow-bg)] cursor-pointer"
                      onClick={() => handleImageClick(img)}
                    >
                      <img
                        src={img}
                        alt={`Instagram ${index + 1}`} className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* Follow Button */}
          <div className="mt-6 sm:mt-8 text-center md:text-left">
            <button className="px-5 py-2 border border-[var(--brown-yellow-bg)] text-white hover:bg-[#b8860b] hover:text-white transition-all duration-300 rounded-full font-medium">
              Follow @yourpage
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstragamFeed;
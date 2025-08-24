import React, { useEffect, useMemo, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TrustSignals = () => {
  const [mounted, setMounted] = useState(false);
  const [winWidth, setWinWidth] = useState(0);

  // show after delay + track width
  useEffect(() => {
    setMounted(true);

    const update = () => setWinWidth(window.innerWidth);
    update(); // set initial
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // decide slides purely from width
  const slidesToShow = winWidth <= 768 ? 1 : winWidth <= 1024 ? 2 : 3;

  const reviews = [
    { text: "After my cancer treatment, I didn’t think I’d ever feel strong again. Embrace gave me back my confidence", author: "Client Story" },
    { text: "The pregnancy program was like having a family guiding me — I felt safe, supported, and cared for every day.", author: "Client Story." },
    { text: "Menopause no longer feels like a struggle. I feel balanced, active, and full of energy again.", author: "Cancer Rehab" },
    { text: "The personalised pregnancy care made me feel confident throughout. I was guided with love and professionalism", author: "Priya, Pregnancy Care" },
    { text: "Menopause became manageable thanks to Embrace. My sleep improved, and I regained my energy.", author: "Neeta, Menopause Wellness" },
    { text: "I lost weight, gained strength, and most importantly, built a lifestyle I can maintain.” – Rupal, Body Transformation." },
  ];

  const settings = useMemo(
    () => ({
      dots: true,
      infinite: true,
      speed: 600,
      slidesToShow,          // <- controlled by our width
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
      autoplaySpeed: 4000,
      // no `responsive` array needed
    }),
    [slidesToShow]
  );

  return (
    <section className="bg-[var(--brown-yellow-bg)] text-[var(--brown-red)] py-24 px-4">
      <div className="w-full max-w-7xl mx-auto mb-3">
        <h2 className="text-3xl font-bold text-center mb-10">What Our Clients Say</h2>

        {mounted && (
          // key forces a clean re-init when slidesToShow changes
          <Slider key={slidesToShow} {...settings}>
            {reviews.map((review, index) => (
              <div key={index} className="px-3 mb-2">
                <div className="bg-white shadow-md rounded-lg p-6 text-center min-h-[220px] flex flex-col justify-center border-t-4 border-[var(--brown-red)]">
                  <div className="text-4xl mb-4 text-yellow-500">⭐</div>
                  <p className="text-[var(--brown-red)] italic line-clamp-4">"{review.text}"</p>
                  {review.author && (
                    <p className="mt-2 text-[var(--brown-secondary)] font-medium">– {review.author}</p>
                  )}
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </section>
  );
};

export default TrustSignals;

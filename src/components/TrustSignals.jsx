import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TrustSignals = () => {
  const reviews = [
    { 
      text: "Amazing results! I saw visible improvement within just a few weeks and my confidence has skyrocketed. Highly recommend to anyone considering this service.", 
      author: "Jane D." 
    },
    { 
      text: "Professional and effective service. The staff was knowledgeable, friendly, and always ready to answer my questions in detail.", 
      author: "Mark T." 
    },
    { 
      text: "Exceeded all my expectations! The process was smooth and the results were better than I ever imagined. Definitely worth the investment.", 
      author: "Sophia L." 
    },
    { 
      text: "Friendly staff and great outcomes. They made me feel comfortable from start to finish, and I’m thrilled with the transformation.", 
      author: "Chris P." 
    },
    { 
      text: "Life-changing experience for me. The results have been nothing short of incredible, and I’m so grateful for the positive impact on my life.", 
      author: "Emily R." 
    },
    { 
      text: "From the first consultation to the final result, the entire journey was handled with care and expertise. I felt valued and understood every step of the way.", 
      author: "Daniel W." 
    },
    { 
      text: "Top-notch service! They explained everything in detail, kept me updated, and delivered results that speak for themselves.", 
      author: "Priya S." 
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="bg-[var(--brown-yellow-bg)] text-[var(--brown-red)] py-24 mb-2 px-4">
      <div className="max-w-7xl mx-auto mb-3">
        <h2 className="text-3xl font-bold mb-8 text-center text-[var(--brown-red)]">
          Customer Reviews
        </h2>

        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className="px-3 mb-2">
              <div className="bg-white shadow-md rounded-lg p-6 text-center min-h-[220px] flex flex-col justify-center border-t-4 border-[var(--brown-red)]">
                <div className="text-4xl mb-4 text-yellow-500">⭐</div>
                <p className="text-[var(--brown-red)] italic line-clamp-3">
                  "{review.text}"
                </p>
                <p className="mt-2 text-[var(--brown-secondary)] font-medium">– {review.author}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TrustSignals;

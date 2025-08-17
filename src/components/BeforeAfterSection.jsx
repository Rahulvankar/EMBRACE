import React from "react";

const BeforeAfterCard = ({ beforeImg, afterImg, title, description }) => {
  return (
    <div className="bg-[var(--brown-red)] shadow-lg hover:shadow-xl rounded-lg overflow-hidden w-full md:w-[30%] relative transition-shadow duration-300">
      <div className="relative max-w-7xl mx-auto  flex">
        {/* Before Image */}
        <div className="relative w-1/2">
          <img
            src={beforeImg}
            alt="Before"
            className="w-full h-48 object-cover"
          />
          <span className="absolute top-2 left-2 bg-[var(--brown-yellow-bg)] text-white text-xs font-semibold px-2 py-1 rounded-full shadow-md">
            Before
          </span>
        </div>

        {/* After Image */}
        <div className="relative w-1/2">
          <img
            src={afterImg}
            alt="After"
            className="w-full h-48 object-cover"
          />
          <span className="absolute top-2 right-2 bg-[var(--brown-red)] text-white text-xs font-semibold px-2 py-1 rounded-full shadow-md">
            After
          </span>
        </div>
      </div>

      {/* Text */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-[#fff]">{title}</h3>
        <p className="text-[#fff] text-sm">{description}</p>
      </div>
    </div>
  );
};

const BeforeAfterSection = () => {
  const data = [
    {
      beforeImg: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
      afterImg: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      title: "Jacket Edit",
      description: "Before and after jacket photo editing."
    },
    {
      beforeImg: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
      afterImg: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      title: "Portrait Retouch",
      description: "Skin smoothing and color correction."
    },
    {
      beforeImg: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
      afterImg: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
      title: "Makeup Enhancement",
      description: "Before and after makeup enhancement."
    }
  ];

  return (
    <section className="p-10 bg-gradient-to-r py-24 from-[var(--brown-soft-bg)] to-[#F5F0E6]">
      {/* Section Title */}
      <div className="max-w-7xl mx-auto ">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[var(--brown-red)]">Before & After</h2>
          <p className="text-[var(--brown-red)] text-sm max-w-2xl mx-auto">
            Experience the transformation — see how our work enhances every detail while keeping the essence intact.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap gap-6 justify-center">
          {data.map((item, index) => (
            <BeforeAfterCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;

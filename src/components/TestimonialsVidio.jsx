import React, { useRef, useState } from "react";
import { FaPlay, FaPause, FaCheckCircle } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "ALEX",
    role: "VERIFIED PATIENT",
    review:
      "I strongly recommend it for any long term allergy sufferers. If you're out there wondering, 'Will this work for me?' – please try it!",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "https://picsum.photos/id/237/400/700",
  },
  {
    id: 2,
    name: "SWATI",
    role: "VERIFIED PATIENT",
    review:
      "I always had horrible allergies – nothing really helped. Allergy shots weren’t a fit for my lifestyle. I found Wyndly, and it changed my life.",
    src: "https://www.w3schools.com/html/movie.mp4",
    thumbnail: "https://picsum.photos/id/238/400/700",
  },
  {
    id: 3,
    name: "JOE",
    role: "VERIFIED PATIENT",
    review:
      "The drops have been such a great solution for me. I’ve been doing it for about four to five months now, and it’s unbelievable. I can breathe!",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "https://picsum.photos/id/239/400/700",
  },
];

export default function VideoTestimonials() {
  const [playingId, setPlayingId] = useState(null);
  const videoRefs = useRef({});

  const togglePlay = (id) => {
    const video = videoRefs.current[id];
    if (!video) return;

    if (playingId === id) {
      video.pause();
      setPlayingId(null);
    } else {
      if (playingId && videoRefs.current[playingId]) {
        videoRefs.current[playingId].pause();
      }
      video.play();
      setPlayingId(id);
    }
  };

  return (
    <section className="bg-[var(--brown-soft-bg)] py-16 px-4">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-[--brown-red]">Testimonials</h2>
        <p className="text-[var(--brown-red)]/80 mt-2">
          Hear from real patients who are breathing easier and living better.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="bg-[var(--brown-soft-bg)] rounded-xl shadow-lg overflow-hidden flex flex-col border border-[#D4AF37]/60 hover:shadow-[0_0_20px_#E2B63B55] transition duration-300"
          >
            {/* Name label */}
            <div className="bg-[var(--brown-red)] text-[var(--brown-yellow-bg)] text-xs font-semibold px-3 py-2 tracking-wide">
              {t.name}
            </div>

            {/* Video container */}
            <div className="relative">
              <video
                ref={(el) => (videoRefs.current[t.id] = el)}
                src={t.src}
                poster={t.thumbnail}
                className="w-full h-72 object-cover"
                controls={false}
              />
              <button
                onClick={() => togglePlay(t.id)}
                className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition"
              >
                {playingId === t.id ? (
                  <FaPause className="text-[var(--brown-yellow-bg)] text-3xl" />
                ) : (
                  <FaPlay className="text-[var(--brown-yellow-bg)] text-3xl" />
                )}
              </button>
            </div>

            {/* Role tag */}
            <div className="bg-[var(--brown-yellow-bg)] text-[var(--brown-red)] flex items-center justify-center gap-2 text-xs font-semibold py-2 tracking-wide">
              <FaCheckCircle className="text-[#4B2E1E]" />
              {t.role}
            </div>

            {/* Review text */}
            <div className="p-4 text-[var(--brown-red)] text-sm italic line-clamp-3">
              {t.review}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

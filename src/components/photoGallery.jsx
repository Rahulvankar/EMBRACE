// src/App.jsx
import React from "react";

export default function PhotoGallery() {
    const photos = [
        "/image/galary-img1.jpeg",
        "/image/galary-img2.jpeg",
        "/image/galary-img3.jpeg",
        "/image/galary-img4.jpeg",
        "/image/galary-img5.jpeg",
        "/image/galary-img6.jpeg",
        "/image/galary-img7.jpeg",
        "/image/galary-img8.jpeg",
    ];

    return (
        <div className=" relative flex flex-col items-center rounded-t-2xl  bg-[var(--brown-soft-bg)] text-[var(--brown-red)] p-10">
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="w-full h-full bg-[radial-gradient(#dab370_1px,transparent_1px)] [background-size:25px_25px] opacity-20 animate-pulse"></div>
            </div>
            <h1 className="text-3xl font-bold mb-6"> My Photo Gallery</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full">
                {photos.map((photo, index) => (
                    <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                        <img
                            src={photo}
                            alt={`Gallery ${index + 1}`}
                            className="w-full  object-cover hover:scale-110 transition-transform duration-300"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

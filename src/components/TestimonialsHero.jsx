import React from 'react'
import Header from './Header'

const TestimonialsHero = () => {
    return (
        <section
            className="relative h-screen w-full font-['Playfair_Display'] bg-cover bg-center"
            style={{
                backgroundImage:
                    "url('/image/Testimonials_bg.jpg')", // Replace with a blog banner image
            }}
        >
            <Header />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center px-6 z-10 animate-fadeIn">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                    Real Stories
                </h1>
                <p className="text-lg md:text-2xl text-white max-w-2xl mb-6">
                    Every journey is unique, every milestone is worth celebrating. Here’s how Embrace has changed lives, one woman at a time.
                </p>
                {/* <a
                    href="#blog-list"
                    className="px-6 py-3 border-2 border-[var(--brown-red-bg)] text-[var(--brown-red-bg)] hover:bg-[var(--brown-red-bg)] hover:text-black transition rounded-full font-semibold text-lg"
                >
                    VIEW BLOGS
                </a> */}
            </div>
        </section>
    )
}

export default TestimonialsHero

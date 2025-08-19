import React from 'react'
import Header from './Header'

const BlogHero = () => {
    return (
        <section
            className="relative h-screen w-full font-['Playfair_Display'] bg-cover bg-center"
            style={{
                backgroundImage:
                    "url('/image/blog_bg.jpg')", // Replace with a blog banner image
            }}
        >
            <Header />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center px-6 z-10 animate-fadeIn">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                    Knowledge That Empowers, Stories That Inspire
                </h1>
                <p className="text-lg md:text-2xl text-white max-w-2xl mb-6">
                    Our blog brings you expert advice, wellness tips, and real-life experiences to support your health and wellbeing.
                </p>

            </div>
        </section>
    )
}

export default BlogHero

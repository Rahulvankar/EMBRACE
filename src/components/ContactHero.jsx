import React from 'react'
import Header from './Header'

const ContactHero = () => {
    return (
        <section
            className="relative h-screen w-full font-['Playfair_Display'] bg-cover bg-center"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80')", // Replace with a blog banner image
            }}
        >
            <Header />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center px-6 z-10 animate-fadeIn">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                    Get in Touch
                    </h1>
                <p className="text-lg md:text-2xl text-white max-w-2xl mb-6">
                    Reach out to us for inquiries, collaborations, or support. Let’s start a conversation today
                </p>
                {/* <a
                    href="#blog-list"
                    className="px-6 py-3 border-2 border-[var(--brown-yellow-bg)] text-[var(--brown-yellow-bg)] hover:bg-[var(--brown-yellow-bg)] hover:text-black transition rounded-full font-semibold text-lg"
                >
                    VIEW BLOGS
                </a> */}
            </div>
        </section>
    )
}

export default ContactHero

import React from 'react'
import Header from './Header'

const ProgramsHero = () => {
    return (
        <section
            className="relative h-screen w-full font-['Playfair_Display'] bg-cover bg-center"
            style={{
                backgroundImage:'url(image/programshero.webp)'
            }}
        >
            <Header />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center px-6 z-10">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                    Our Programs & Services
                </h1>
                <p className="text-lg md:text-2xl text-white max-w-2xl mb-6">
                    Explore personalized wellness programs designed to support
                    your body, mind, and spirit at every stage of life.
                </p>
                <a
                    href="#programs-list"
                    className="px-6 py-3 border-2 border-[var(--brown-yellow-bg)] text-[var(--brown-yellow-bg)] hover:bg-[var(--brown-yellow-bg)] hover:text-black transition rounded-full font-semibold text-lg"
                >
                    VIEW PROGRAMS
                </a>
            </div>
        </section>
    )
}

export default ProgramsHero

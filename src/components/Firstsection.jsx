import React from 'react'
import Header from './Header'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import { Autoplay, EffectFade } from 'swiper/modules'

const slides = [
    {
        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?fm=jpg&q=60&w=3000',
        title: 'Heal. Transform. Embrace Life.',
        subtitle: 'Personalized programs for body, mind, and spirit.',
    },
    {
        image: 'https://t3.ftcdn.net/jpg/02/53/43/32/360_F_253433239_JrdlTJAeiuZRWY7bh3yzGtdi2AncFpwO.jpg',
        title: 'Cancer Recovery. Naturally.',
        subtitle: 'Supportive therapies to restore your strength.',
    },
    {
        image: 'https://t3.ftcdn.net/jpg/02/96/74/64/360_F_296746476_F0wDElEXSb0Rd1tyDnsCBLVBHGAsJm3O.jpg',
        title: 'Nurture Your Pregnancy Journey.',
        subtitle: 'Care plans designed for expecting mothers.',
    },
]

const HeroSlider = () => {
    return (
        <section className="relative h-screen w-full font-['Playfair_Display']">
            <Header />
            <Swiper
                modules={[Autoplay, EffectFade]}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                effect="fade"
                loop
                className="h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="h-full w-full bg-cover bg-center relative"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center px-6 z-10">
                                <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                                    {slide.title}
                                </h2>
                                <p className="text-lg md:text-2xl text-white max-w-2xl mb-6">
                                    {slide.subtitle}
                                </p>
                                <a
                                    href="#contact"
                                    className="px-6 py-3 border-2 border-[var(--brown-yellow-bg)] text-[var(--brown-yellow-bg)] hover:bg-[var(--brown-red-bg)] hover:text-[var(--brown-yellow-bg)] transition rounded-full font-semibold text-lg"
                                >
                                    BOOK AN APPOINTMENT
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default HeroSlider

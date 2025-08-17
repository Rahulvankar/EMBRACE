import React from 'react'
import TestimonialsVidio from '../components/TestimonialsVidio'
import Header from '../components/Header'
import BeforeAfterSection from '../components/BeforeAfterSection'
import TrustSignals from '../components/TrustSignals'
import Footer from '../components/Footer'
import TestimonialsHero from '../components/TestimonialsHero'

const Testimonials = () => {
    return (
        <>
            <TestimonialsHero />
            <TestimonialsVidio />
            <TrustSignals />
            <BeforeAfterSection />
            <Footer />
        </>
    )
}

export default Testimonials
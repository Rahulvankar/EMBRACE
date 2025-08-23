import React from 'react'
import TestimonialsVidio from '../components/TestimonialsVidio'
import Header from '../components/Header'
import BeforeAfterSection from '../components/BeforeAfterSection'
import TrustSignals from '../components/TrustSignals'
import Footer from '../components/Footer'
import TestimonialsHero from '../components/TestimonialsHero'
import { HeadProvider, Title, Meta } from "react-head";

const Testimonials = () => {
    return (
        <>
            <HeadProvider>
                <Title>Client Testimonials | Embrace Women’s Wellness </Title>
                <Meta name="description" content=" Discover real stories of transformation at Embrace — from cancer recovery to pregnancy journeys, menopause support, and body transformation success" />
            </HeadProvider>
            <TestimonialsHero />
            {/* <TestimonialsVidio /> */}
            <TrustSignals />
            {/* <BeforeAfterSection /> */}
            <Footer />
        </>
    )
}

export default Testimonials
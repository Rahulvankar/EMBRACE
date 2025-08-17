import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination';
import HighlightedProgramsCards from '../components/HighlightedProgramsCards';
import Footer from '../components/Footer';
import Firstsection from '../components/Firstsection';
import SecondSection from '../components/SecondSection';
import ConnectMembers from '../components/ConnectMembers';
import InstragamFeed from '../components/InstragamFeed';
import Contact from '../components/Contact';
import { HeadProvider, Title, Meta } from "react-head";

const Home = () => {
    return (
        <>
            <HeadProvider>
                <Title>Embrace – Complete Women’s Wellness | Cancer Rehab, Pregnancy, Menopause, Body Transformation</Title>
                <Meta name="description" content="Embrace offers personalised, evidencebased programs for every stage of a woman’s life — from pregnancy to post-cancer recovery. Discover expert care that restores strength, confidence, and wellbeing. " />
            </HeadProvider>

            <Firstsection />
            <SecondSection />
            <HighlightedProgramsCards />
            <ConnectMembers />
            <InstragamFeed />
            <Footer />

        </>
    )
}

export default Home

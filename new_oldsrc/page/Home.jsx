import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-fade'
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import Header from '../components/Header'
import { FaBroadcastTower, FaInstagram } from 'react-icons/fa'
import HighlightedProgramsCards from '../components/HighlightedProgramsCards';
import Footer from '../components/Footer';
import Firstsection from '../components/Firstsection';
import SecondSection from '../components/SecondSection';
import ConnectMembers from '../components/ConnectMembers';
import InstragamFeed from '../components/InstragamFeed';
import Contact from '../components/Contact';
// import Instagarm from ''

const Home = () => {
    return (
        <>
            <Firstsection />
            <SecondSection />
            <HighlightedProgramsCards />
            <ConnectMembers />
            <InstragamFeed />
            <Contact />
            <Footer />

        </>
    )
}

export default Home

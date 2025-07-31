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

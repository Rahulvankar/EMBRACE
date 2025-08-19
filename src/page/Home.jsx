import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination';
import HighlightedProgramsCards from '../components/HighlightedProgramsCards';
import Footer from '../components/Footer';
import Firstsection from '../components/Firstsection';
import SecondSection from '../components/SecondSection';
import ConnectMembers from '../components/ConnectMembers';
import InstragamFeed from '../components/InstragamFeed';
import Consultation from '../components/Consultation.tsx';
import WhyChoose from '../components/WhyChoose.tsx';

const Home = () => {
    return (
        <>
            <Firstsection />
            <SecondSection />
            <HighlightedProgramsCards />
            <ConnectMembers />
            <InstragamFeed />
            <WhyChoose />
            <Consultation />
            <Footer />

        </>
    )
}

export default Home

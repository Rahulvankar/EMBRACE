import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages import
import Home from './page/Home';
import About from './page/About.jsx';
import Blog from './page/Blog.jsx';
import BodyTransformation from './page/BodyTransformation.jsx';
import CancerRehabilitation from './page/CancerRehabilitation.jsx';
import MenopauseWellness from './page/MenopauseWellness.jsx';
import PregnancyCare from './page/PregnancyCare.jsx';
// import WellnessPrograms from './page/WellnessPrograms';
// import Treatments from './page/Treatments';
// import GiftCards from './page/GiftCards';
// import Concerns from './page/Concerns';
// import Careers from './page/Careers';
// import Contact from './page/Contact';
// import PrivacyPolicy from './page/PrivacyPolicy';
// import Book from './page/Book';

// Layout import
import Header from './components/Header';
import Testimonials from './page/Testimonials';
import ServicesSection from './page/ProgramsServices.jsx';
import Contact from './page/Contact.jsx';
function App() {
  return (
    <>
      <BrowserRouter>
        {/* Header sab pages pe dikhana hai */}
        <Header />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/services" element={<ServicesSection/>} />
          <Route path="/testimonials" element={<Testimonials />}/>
          <Route path="/bodyTransformation" element={<BodyTransformation />} />
          <Route path="/cancerRehabilitation" element={<CancerRehabilitation />} />
          <Route path="/menopauseWellness" element={<MenopauseWellness />} />
          <Route path="/PregnancyCare" element={<PregnancyCare />} />
          <Route path="/contact" element={<Contact />} />
      
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

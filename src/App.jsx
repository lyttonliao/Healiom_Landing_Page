import React, { useEffect, useState, useRef } from 'react';
import { Routes, Route, BrowserRouter, useLocation } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import Privacy from './pages/Privacy/Privacy';
import Footer from './components/Footer';
import Header from './components/Header'
import Menu from './components/Menu';
import Faq from './pages/Faq/Faq';
import TermsOfUse from './pages/TermsOfUse/TermsOfUse';
import ScrollToTop from './ScrollToTop';

const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const solutionRef = useRef(null);
    const partnersRef = useRef(null);
    const teamRef = useRef(null);
    const refs = { solutionRef, partnersRef, teamRef };

    return (
        <BrowserRouter>
            <div className='relative z-0'>
                <Header setIsMenuOpen={setIsMenuOpen} refs={refs} />

                <div>
                    <ScrollToTop />
                    <Routes>
                        <Route path="/" element={<LandingPage refs={refs} />} />
                        <Route path="/healiom-privacy" element={<Privacy />} />
                        <Route path="/faq" element={<Faq />} />
                        <Route path="/terms-of-use" element={<TermsOfUse />} />
                    </Routes>
                </div>

                <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} refs={refs} />
                <Footer />
            </div>
        </BrowserRouter>
    )
};

export default App;
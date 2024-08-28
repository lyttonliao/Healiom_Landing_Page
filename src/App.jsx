import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import Privacy from './pages/Privacy/Privacy';
import Footer from './components/Footer';
import Header from './components/Header'
import Menu from './components/Menu';

const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <BrowserRouter>
            <div className='relative z-0'>
                <Header setIsMenuOpen={setIsMenuOpen} />

                <div>
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/healiom-privacy" element={<Privacy />} />
                    </Routes>
                </div>

                <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
                <Footer />
            </div>

        </BrowserRouter>
    )
};

export default App;
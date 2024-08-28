import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import Privacy from './pages/Privacy/Privacy';
import Footer from './components/Footer';
import Header from './components/Header'

const App = () => {
    return (
        <BrowserRouter>
            <Header />

            <div className="relative z-0">
                <div>
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/healiom-privacy" element={<Privacy />} />
                    </Routes>
                </div>
            </div>

            <Footer />
        </BrowserRouter>
    )
};

export default App;
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import Privacy from './pages/Privacy/Privacy';
import Footer from './components/Footer';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/healiom-privacy" element={<Privacy />} />
                </Routes>

                <Footer />
            </BrowserRouter>
        </div>
    )
};

export default App;
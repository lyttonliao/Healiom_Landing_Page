import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import Privacy from './pages/Privacy/Privacy';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/healiom-privacy" element={<Privacy />} />
            </Routes>
        </BrowserRouter>
    )
};

export default App;
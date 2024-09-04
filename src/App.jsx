import React, { useState, useRef } from 'react';
import { createBrowserRouter, ScrollRestoration, Outlet, RouterProvider } from 'react-router-dom';

import LandingPage from './pages/LandingPage/LandingPage';
import Privacy from './pages/Privacy/Privacy';
import Footer from './components/Footer';
import Header from './components/Header'
import Menu from './components/Menu';
import Faq from './pages/Faq/Faq';
import TermsOfUse from './pages/TermsOfUse/TermsOfUse';
import Contact from './components/Contact';


const Layout = ({ headerProps, menuProps, modalProps }) => {
    return (
        <div className='relative z-0'>
            <ScrollRestoration />

            <Header { ...headerProps } />
            <Outlet />
            <Footer />

            <Menu { ...menuProps } />
            <Contact { ...modalProps } />
        </div>
    )
};

const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const router = createBrowserRouter([
        {
            path: '/',
            element: (
                <Layout 
                    headerProps={{ setIsMenuOpen, setIsModalOpen }}
                    menuProps={{ isMenuOpen, setIsMenuOpen, setIsModalOpen }}
                    modalProps={{ isModalOpen, setIsModalOpen }}
                />
            ),
            children: [
                {
                    path: '/',
                    element: <LandingPage setIsModalOpen={setIsModalOpen} />,
                },
                {
                    path: '/faq',
                    element: <Faq />
                },
                {
                    path: '/terms-of-use',
                    element: <TermsOfUse />
                },        {
                    path: '/healiom-privacy',
                    element: <Privacy />
                },
            ]
        },
    ])

    return (
        <RouterProvider router={router} />
    )
};

export default App;
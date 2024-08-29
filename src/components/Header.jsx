import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../public/images/logo.png';

const Header = ({ setIsMenuOpen }) => {

    window.addEventListener('scroll', function() {
        const header = document.getElementById('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    return (
        <div id="header" className="sticky z-10 bg-default top-0">
            <div className="px-4 py-2">
                <div className="flex items-center justify-between">
                    <button>
                        <Link to="/">
                            <img className="h-12" src={logo} alt="Logo"/>
                        </Link>
                    </button>


                    <div className="relative flex lg:hidden">
                        <button className="flex h-full rounded-full hover:bg-gray-200 p-1" onClick={() => setIsMenuOpen(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#24dac6" className="size-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>

                    <div className='hidden lg:flex items-center text-md leading-6 font-semibold text-slate-700 space-x-8'>
                        <ul className="flex space-x-8">
                            <li className="hover:text-primary-500 hover:text-primary-700 cursor-pointer">Solution</li>
                            <li className="hover:text-primary-500 hover:text-primary-700 cursor-pointer">Partners</li>
                            <li className="hover:text-primary-500 hover:text-primary-700 cursor-pointer">Team</li>
                        </ul>

                        <div className="bg-primary-500 text-white rounded-md">
                            <button className="py-1 px-2">Request a Demo</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Header;
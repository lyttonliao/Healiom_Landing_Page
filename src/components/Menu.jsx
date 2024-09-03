import React, { useRef, useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom'

const Menu = ({ isMenuOpen, setIsMenuOpen, refs }) => {
    const navigate = useNavigate();
    const menuRef = useRef(null);
    const { solutionRef, partnersRef, teamRef } = refs;

    const handleClickLocation = (ref) => {
        navigate("/")
        setTimeout(() => {
            if (ref && ref.current) {
                ref.current.scrollIntoView({ behavior: 'smooth'})
                setIsMenuOpen(false);
            }
        }, 100)
    };

    useEffect(() => {
        if (!isMenuOpen) return;

        const handleClickOutside = (event) => {
            if (menuRef && menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMenuOpen]);

    return (
        <div className={`${ isMenuOpen ? '' : 'hidden' } fixed lg:hidden top-0 right-0 bottom-0 z-50`}>
            <div className='fixed top-0 bottom-0 right-0 w-screen backdrop-blur-sm bg-black/20'></div>

            <div className='relative'>
                <div ref={menuRef} className='bg-default overflow-y h-screen w-60 p-5 space-y-8'>
                    <ul className="flex flex-col space-y-6">
                        <li className="font-semibold hover:text-primary-500 hover:text-primary-700 cursor-pointer">
                            Main Page
                        </li>
                        <li 
                            className="hover:text-primary-500 hover:text-primary-700 cursor-pointer pl-4" 
                            onClick={() => handleClickLocation(solutionRef)}
                        >
                            <a href="#solution" >Solution</a>
                        </li>
                        <li 
                            className="hover:text-primary-500 hover:text-primary-700 cursor-pointer pl-4" 
                            onClick={() => handleClickLocation(partnersRef)}
                        >
                            <a href="#partners">Partners</a>
                        </li>
                        <li 
                            className="hover:text-primary-500 hover:text-primary-700 cursor-pointer pl-4" 
                            onClick={() => handleClickLocation(teamRef)}
                        >
                            <a href="#team">Team</a></li>
                    </ul>

                    <div 
                        className="font-semibold hover:text-primary-500 hover:text-primary-700 cursor-pointer"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <Link to="/faq">Faq</Link>
                    </div>

                    <div 
                        className="font-semibold hover:text-primary-500 hover:text-primary-700 cursor-pointer"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <Link to="/terms-of-use">Terms of Use</Link>
                    </div>
                    
                    <div 
                        className="font-semibold hover:text-primary-500 hover:text-primary-700 cursor-pointer"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <Link to="/healiom-privacy">Privacy Policy</Link>
                    </div>
                    
                    <div className="font-semibold hover:text-primary-500 hover:text-primary-700 cursor-pointer">
                        Contact Us
                    </div>

                </div>

                <div className="absolute top-4 right-5">
                    <button className="flex h-full rounded-full hover:bg-gray-200 p-1" onClick={() => setIsMenuOpen(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#24dac6" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>

        </div>
    )
};

export default Menu;
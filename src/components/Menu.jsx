import React, { useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'

const Menu = ({ isMenuOpen, setIsMenuOpen, setIsModalOpen }) => {
    const navigate = useNavigate();
    const menuRef = useRef(null);

    const handleClickLocation = (id) => {
        navigate("/", { state: { targetId: id } });
        setIsMenuOpen(false);
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
        <div className={`${ isMenuOpen ? '' : 'hidden' } fixed md:hidden top-0 right-0 bottom-0 z-50`}>
            <div className='fixed top-0 bottom-0 right-0 w-screen backdrop-blur-sm bg-black/20'></div>

            <div className='relative'>
                <div ref={menuRef} className='bg-default overflow-y h-screen w-60 p-5 space-y-8'>
                    <ul className="flex flex-col space-y-6">
                        <li 
                            className="font-semibold hover:text-primary-500 hover:text-primary-700 cursor-pointer"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <Link className="block" to="/">Main Page</Link>
                        </li>
                        <li 
                            className="hover:text-primary-500 hover:text-primary-700 cursor-pointer pl-4" 
                            onClick={() => handleClickLocation("solution")}
                        >
                            <a href="#solution">Solution</a>
                        </li>
                        <li 
                            className="hover:text-primary-500 hover:text-primary-700 cursor-pointer pl-4" 
                            onClick={() => handleClickLocation("partners")}
                        >
                            <a href="#partners">Partners</a>
                        </li>
                        <li 
                            className="hover:text-primary-500 hover:text-primary-700 cursor-pointer pl-4" 
                            onClick={() => handleClickLocation("team")}
                        >
                            <a href="#team">Team</a>
                        </li>
                    </ul>

                    <div 
                        className="font-semibold hover:text-primary-500 hover:text-primary-700 cursor-pointer"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <Link className="block" to="/faq">Faq</Link>
                    </div>

                    <div 
                        className="font-semibold hover:text-primary-500 hover:text-primary-700 cursor-pointer"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <Link className="block" to="/terms-of-use">Terms of Use</Link>
                    </div>
                    
                    <div 
                        className="font-semibold hover:text-primary-500 hover:text-primary-700 cursor-pointer"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <Link className="block" to="/healiom-privacy">Privacy Policy</Link>
                    </div>
                    
                    <div 
                        className="pt-8 border-t border-slate-400 font-semibold hover:text-primary-500 hover:text-primary-700 cursor-pointer"
                        onClick={() => {
                            setIsMenuOpen(false);
                            setIsModalOpen(true);
                        }}
                    >
                        Request a demo
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
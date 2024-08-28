import React from 'react';

const Menu = ({ isMenuOpen, setIsMenuOpen }) => {
    return (
        <div className={`${ isMenuOpen ? '' : 'hidden' } fixed lg:hidden top-0 right-0 bottom-0 z-50`}>
            <div className='fixed top-0 bottom-0 right-0 w-screen backdrop-blur-sm bg-black/20'></div>

            <div className='relative bg-default overflow-y h-screen w-60 p-5'>
                <ul className="flex flex-col space-y-8">
                    <li className="hover:text-primary-500 hover:text-primary-700 cursor-pointer">Solution</li>
                    <li className="hover:text-primary-500 hover:text-primary-700 cursor-pointer">Partners</li>
                    <li className="hover:text-primary-500 hover:text-primary-700 cursor-pointer">Team</li>
                </ul>

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
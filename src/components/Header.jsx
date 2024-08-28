import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../public/images/logo.png';

const Header = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="sticky z-10 bg-default top-0">
            <div className="px-8 py-4">
                <div className="flex items-center justify-between">
                    <button>
                        <Link to="/">
                            <img className="h-12" src={logo} alt="Logo"/>
                        </Link>
                    </button>

                    <div className="relative inline-block text">
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Header;


import React from 'react';
import { Link } from 'react-router-dom';
import linkedInIcon from '../../public/images/linkedin.png';
import twitterIcon from '../../public/images/twitter.png'


const Footer = () => {
    return (
        <div className="bg-footer w-full">
            <div className="p-6 md:px-12 max-w-7xl mx-auto">
                <div className="flex flex-col">
                    <div className="text-white text-lg">
                        <Link to="/faq">Faq</Link>
                    </div>
                    <div className="text-white text-lg">
                        <Link to="/terms-of-use">Terms of Use</Link>
                    </div>
                    <div className="text-white text-lg">
                        <Link to="/healiom-privacy">Privacy Policy</Link>
                    </div>
                    <div className="text-white text-lg">
                        <Link to="/contact-us">Contact Us</Link>
                    </div>

                </div>

                <div className="flex justify-between mt-4">
                    <div className="text-white text-lg">
                        © 2023 Healiom: Healiom is the MSO for Baker Street Medical Group
                    </div>
                    <div className="flex space-x-4 items-center">
                        <div className="w-8 h-8">
                            <button><img src={linkedInIcon} alt="Linkedin"/></button>
                        </div>
                        <div className="w-8 h-8">
                            <button><img src={twitterIcon} alt="Twitter"/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer;
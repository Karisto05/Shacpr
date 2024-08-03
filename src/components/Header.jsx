import React, { useState } from 'react';
import email from '../assets/email.svg';
import phone from '../assets/phone.svg';
import logo from '../assets/sha.png';
import search from '../assets/search.svg';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="relative">
            <div className="hidden lg:flex justify-between items-center h-[71px] px-44 bg-[#00232D] text-white font-roboto">
                <div className="flex space-x-4 px-3">
                    <a href="mailto:cprregistration@sha.org.sa" className="text-sm flex items-center hover:text-green-600 cursor-pointer">
                        <img className='h-4 mr-2' src={email} alt="email" />
                        cprregistration@sha.org.sa
                    </a>
                    <div className='content-[] h-6 w-[1px] bg-[#ffffff33]'></div>
                    <p className="text-sm flex items-center">
                        <img className='h-3 mr-2' src={phone} alt="phone" />
                        +966 92 000 0742
                    </p>
                </div>
                <div className="text-sm flex space-x-4 items-center px-3 cursor-pointer">
                    <a href="/administration" className="hover:text-green-600">
                        Administration
                    </a>
                    <a
                        href="/download-certificates"
                        className="text-[11px] bg-white text-black content-center px-1"
                        style={{ height: '71px' }}
                    >
                        To download certificates issued before 18 April 2024 kindly click here
                    </a>
                </div>
            </div>
            <div className="h-[55px] lg:px-[188px] bg-[#00232D] top-0">
                <div className="flex justify-between lg:justify-start space-x-8 items-center h-full bg-white px-5 lg:px-0 my-3 lg:my-0">
                    <a
                        href="/Home"
                        className="text-black"
                        style={{ height: '55px' }}
                    >
                        <img src={logo} alt="logo-img" className='w-[200px]' />
                    </a>
                    <div className="lg:hidden flex items-center">
                        <button onClick={toggleMenu} className="text-black focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="hidden lg:flex items-center">
                        <img src={search} alt="search" className='h-3.5' />
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="absolute top-[55px] left-0 right-0 bg-green-600 h-1"></div>
                )}
            </div>
        </header>
    );
};

export default Header;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import email from '../assets/emailfoot.svg';
import footerlogo from '../assets/sha.png';
import footerlogo2 from '../assets/sha-transparent.png';
import arrow from '../assets/arrow.svg';
import krlogo from '../assets/kr-logo300.png';
import '../App.css';

const Footer = () => {
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        navigate(`/Certificates/VerifyCertificate/${inputValue}`);
        setInputValue('')
    };

    return (
        <footer className="text-white bg-slate-900 back">
            <div className="mx-auto pt-11 px-8 lg:px-40 bg-[#00232dcc]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mb-6">
                    <div>
                        <img className='mb-8' src={footerlogo} alt="footer-logo" />
                        <h3 className="font-slab text-xl font-bold mb-8 mt-2">About Us</h3>
                        <p className="text-sm mb-4 font-roboto text-[#FFFFFFCC]">
                            The Saudi Heart Association, hereafter called “The Association” is recognized at its premises and may have more chapters in other locations if needed.
                        </p>
                        <p className="text-sm mb-4 font-roboto text-[#FFFFFFCC]">
                            The progression and development of the scientific thinking in the speciality of the Association.
                        </p>
                        <img src={footerlogo2} alt="logo-transparent" />
                        <div className='flex justify-end mt-5'>
                            <span className='text-base font-semibold text-amber-500'>Read More</span>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-slab text-xl font-bold mb-8 mt-2">Popular Courses</h3>
                        <ul className="text-base text-white">
                            <li className='hover:text-green-600 cursor-pointer pb-3'><a href="#">SHA BLS Provider</a></li>
                            <li className='hover:text-green-600 cursor-pointer pb-3'><a href="#">SHA ACLS Provider</a></li>
                            <li className='hover:text-green-600 cursor-pointer pb-3'><a href="#">SHA PALS Provider</a></li>
                            <li className='hover:text-green-600 cursor-pointer pb-3'><a href="#">SHA NRP Provider</a></li>
                            <li className='hover:text-green-600 cursor-pointer pb-3'><a href="#">SHA HSFA CPR AED</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-slab text-xl font-bold mb-8 mt-2">Quick Links</h3>
                        <ul className="text-sm">
                            <li className='hover:text-white cursor-pointer text-sm pb-4 font-roboto text-[#FFFFFFCC]'><a href="#">Home</a></li>
                            <li className='hover:text-white cursor-pointer text-sm pb-4 font-roboto text-[#FFFFFFCC]'><a href="#">Courses</a></li>
                            <li className='hover:text-white cursor-pointer text-sm pb-4 font-roboto text-[#FFFFFFCC]'><a href="#">Online Courses</a></li>
                            <li className='hover:text-white cursor-pointer text-sm pb-4 font-roboto text-[#FFFFFFCC]'><a href="#">Training Centers</a></li>
                            <li className='hover:text-white cursor-pointer text-sm pb-4 font-roboto text-[#FFFFFFCC]'><a href="#">Become Training Center</a></li>
                            <li className='hover:text-white cursor-pointer text-sm pb-4 font-roboto text-[#FFFFFFCC]'><a href="#">Browse for old cpr website</a></li>
                            <li className='hover:text-white cursor-pointer text-sm pb-4 font-roboto text-[#FFFFFFCC]'><a href="#">For Instructors and Coordinator</a></li>
                            <li className='hover:text-white cursor-pointer text-sm pb-4 font-roboto text-[#FFFFFFCC]'><a href="#">Contact Us</a></li>
                            <li className='hover:text-white cursor-pointer text-sm pb-4 font-roboto text-[#FFFFFFCC]'><a href="#">Support</a></li>
                        </ul>
                    </div>
                    <div className='mb-11'>
                        <h3 className="font-slab text-xl font-bold mb-8 mt-2">Quick Help</h3>
                        <ul className="text-sm">
                            <li className='pb-5'>
                                <h5 className='text-xs mb-[10px] font-slab font-bold text-white'>CPR Chairman</h5>
                                <a className='hover:text-white cursor-pointer flex items-center gap-x-1 font-roboto text-[#FFFFFFCC]' href="mailto:cprchairman@sha.org.sa">
                                    <img className='h-4' src={email} alt="email" />
                                    cprchairman@sha.org.sa</a>
                            </li>
                            <li className='pb-5'>
                                <h5 className='text-xs mb-[10px] font-slab font-bold text-white'>CPR Registration</h5>
                                <a className='hover:text-white cursor-pointer flex items-center gap-x-1 font-roboto text-[#FFFFFFCC]' href="mailto:cprregistration@sha.org.sa">
                                    <img className='h-4' src={email} alt="email" />
                                    cprregistration@sha.org.sa</a>
                            </li>
                            <li className='pb-5'>
                                <h5 className='text-xs mb-[10px] font-slab font-bold text-white'>CPR Operation</h5>
                                <a className='hover:text-white cursor-pointer flex items-center gap-x-1 font-roboto text-[#FFFFFFCC]' href="mailto:cproperation@sha.org.sa">
                                    <img className='h-4' src={email} alt="email" />
                                    cproperation@sha.org.sa</a>
                            </li>
                            <li className='pb-5'>
                                <h5 className='text-xs mb-[10px] font-slab font-bold text-white'>CPR Events</h5>
                                <a className='hover:text-white cursor-pointer flex items-center gap-x-1 font-roboto text-[#FFFFFFCC]' href="mailto:cprevents@sha.org.sa">
                                    <img className='h-4' src={email} alt="email" />
                                    cprevents@sha.org.sa</a>
                            </li>
                            <li className='pb-5'>
                                <h5 className='text-xs mb-[10px] font-slab font-bold text-white'>CPR Help Desk</h5>
                                <a className='hover:text-white cursor-pointer flex items-center gap-x-1 font-roboto text-[#FFFFFFCC]' href="mailto:cprhelpdesk@sha.org.sa">
                                    <img className='h-4' src={email} alt="email" />
                                    cprhelpdesk@sha.org.sa</a>
                            </li>
                            <li className='pb-5'>
                                <h3 className='mb-1 text-base font-slab font-bold text-white'>Location</h3>
                                "Head Quarters Office No. 603, Floor 6, Amaz Center Near Voco Hotel, King Fahad Road Riyadh"
                            </li>
                            <li className='pb-5'>
                                <h3 className='mb-1 text-base font-slab font-bold text-white'>Call Us</h3>
                                <p className='text-2xl font-slab font-bold text-white'>+966 92 000 0742</p>
                            </li>
                        </ul>
                        <div className='pt-10 mb-11'>
                            <h3 className='my-3 text-xl font-bold font-slab'>Search E-Certificate</h3>
                            <p className='text-sm mb-4 text-[#FFFFFFCC]'>Enter the eCertificate ID in the box and click on verify button to verify your certificate</p>
                            <form onSubmit={handleSubmit}>
                                <input 
                                value={inputValue}
                                onChange={handleInputChange}
                                className='text-black pt-3 pr-7 lg:pr-[60px] pb-3 pl-4 ' 
                                type="text" 
                                placeholder='Enter eCertificate ID' />
                                <button type='submit' className='hover:bg-green-600 flex items-center py-4 px-20 lg:px-24 bg-white text-black font-bold text-sm'>VERIFY
                                    <img className='h-4' src={arrow} alt="verify" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <hr className="border-gray-700 my-6" />
                <div className="flex items-center text-sm text-[#FFFFFFA6] pb-6 pt-7">
                    <p>&copy; {new Date().getFullYear()} Saudi Heart Association <b>Powered & Owned By Konoz Retaj IT</b></p>
                    <img className='w-8 ml-2' src={krlogo} alt="kr-logo" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;

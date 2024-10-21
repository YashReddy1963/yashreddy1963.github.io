import React from "react";
import { useState } from "react";
import mylogo from './img/logo.png';

export default function Navbar() {
    // for navbar contents
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    // handling the scrolling to sections
    const handleNavClick = (sectionId) => {
        const section = document.querySelector(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setIsNavbarOpen(false); // Close the navbar after scrolling
        }
    };

    return (
        <>
            <nav className="bg-[#141c27] fixed w-full lg:flex lg:flex-col lg:items-center lg:w-full">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 lg:space-x-12 lg:text-xl 2xl:space-x-64">
                    {/* Logo */}
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={mylogo} alt="logo" className=" font-semibold whitespace-nowrap text-white size-10 rounded-sm 2xl:size-16" />
                        <div className="text-xl text-white font-medium 2xl:text-3xl">Halō</div>
                    </a>

                    {/* Dropdown button for mobile */}
                    <button
                        onClick={toggleNavbar}
                        type="button"
                        className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-black rounded-sm bg-[#55e6a5] lg:hidden"
                        aria-controls="navbar-hamburger"
                        aria-expanded={isNavbarOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>

                    {/* Navigation contents */}
                    <div
                        className={`w-full transition-all duration-300 ease-in-out ${
                            isNavbarOpen ? 'block max-h-screen opacity-100' : 'hidden opacity-0'
                        } lg:flex lg:items-center lg:w-auto lg:opacity-100 lg:max-h-full`}
                        id="navbar-hamburger"
                    >
                        <ul className="flex flex-col lg:flex-row lg:space-x-4 2xl:space-x-12 font-medium mt-4 lg:mt-0">
                            <li>
                                <a href="#home" className="nav-link block py-2 px-3 text-white hover:bg-[#55e6a5] hover:text-black lg:rounded-sm lg:transition-all lg:duration-300 lg:ease-in-out" onClick={() => handleNavClick('#home')}>HOME</a>
                            </li>
                            <li>
                                <a href="#about" className="nav-link block py-2 px-3 text-white hover:bg-[#55e6a5] hover:text-black lg:rounded-sm lg:transition-all lg:duration-300 lg:ease-in-out" onClick={() => handleNavClick('#about')}>ABOUT</a>
                            </li>
                            <li>
                                <a href="#projects" className="nav-link block py-2 px-3 text-white hover:bg-[#55e6a5] hover:text-black lg:rounded-sm lg:transition-all lg:duration-300 lg:ease-in-out" onClick={() => handleNavClick('#projects')}>PROJECTS</a>
                            </li>
                            <li>
                                <a href="https://yashreddy1963.github.io/Blogs/" className="block py-2 px-3 text-white hover:bg-[#55e6a5] hover:text-black lg:rounded-sm lg:transition-all lg:duration-300 lg:ease-in-out" onClick={toggleNavbar}>BLOGS</a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/yashreddy1963?igsh=NGl1bWc3YzhhdjNz" className="block py-2 px-3 text-white hover:bg-[#55e6a5] hover:text-black lg:rounded-sm lg:transition-all lg:duration-300 lg:ease-in-out" onClick={toggleNavbar}>PHOTOGRAPHY</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

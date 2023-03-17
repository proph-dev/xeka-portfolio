import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import logo from '../../assets/img/logo.png';
import './navbar.css';

export const Navbar = () => {
    const [isMobileNav, setIsMobileNav] = useState(false);

    const handleOpenedNavMobile = () => {
        setIsMobileNav(!isMobileNav);
    };

    const handleLinkClick = () => {
        setIsMobileNav(false);
    };

    return (
        <nav className='flex flex-row justify-between items-center py-4 px-10'>
            <img src={logo} alt="" className='w-[64px]' />

            <div className='flex justify-between items-center flex-wrap tablet:hidden w-[40px] h-[40px] cursor-pointer' onClick={ handleOpenedNavMobile }>
                <div className='bg-black w-full h-[5px] rounded-3xl'></div>
                <div className='bg-black w-full h-[5px] rounded-3xl'></div>
                <div className='bg-black w-full h-[5px] rounded-3xl'></div>
            </div>

            <div className={`tablet:grid gap-4 grid-cols-4 text-center uppercase text-sm font-bold tablet:w-fit mt-4 tablet:relative tablet:top-0 tablet:py-0 tablet:shadow-none tablet:rounded-none ${isMobileNav ? "flex flex-col absolute top-20 left-0 w-full bg-white py-8 shadow-2xl rounded-2xl" : "hidden"}`}>
                <Link smooth to="#about" onClick={ handleLinkClick } className={`${isMobileNav ? "w-fit mx-auto p-2" : ""}`}>Qui suis-je ?</Link>
                <Link smooth to="#portfolio" onClick={ handleLinkClick } className={`${isMobileNav ? "w-fit mx-auto p-2" : ""}`}>Portfolio</Link>
                <Link smooth to="#contact" onClick={ handleLinkClick } className={`${isMobileNav ? "w-fit mx-auto p-2" : ""}`}>Me contacter</Link>
                <Link to="/" onClick={ handleLinkClick } className={`${isMobileNav ? "w-fit mx-auto p-2" : ""}`}>Documentation</Link>
            </div>
        </nav>
    )
}
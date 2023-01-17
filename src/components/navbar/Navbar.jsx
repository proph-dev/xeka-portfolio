import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import navbar from './navbar.css';

export const Navbar = () => {
    return (
        <nav className='flex flex-col justify-center tablet:flex-row tablet:justify-between items-center py-4 px-10'>
            <img src={logo} alt="" className='w-[64px]' />
            <div className='grid gap-4 grid-cols-4 text-center uppercase text-sm font-bold mt-4 tablet:mt-4'>
                <NavLink to="/" >Qui suis-je ?</NavLink>
                <NavLink to="/" >Portfolio</NavLink>
                <NavLink to="/" >Documentation</NavLink>
                <NavLink to="/" >Me contacter</NavLink>
            </div>
        </nav>
    )
}
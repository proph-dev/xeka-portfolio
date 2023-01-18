import React from 'react';
import { NavLink } from 'react-router-dom';
import whiteLogo from '../../assets/img/white-logo.png';
import Discord from '../../assets/img/networks/discord.svg';
import Linkedin from '../../assets/img/networks/linkedin.svg';
import Instagram from '../../assets/img/networks/instagram.svg';
import Twitter from '../../assets/img/networks/twitter.svg';

export const Footer = () => {
    return (
        <footer className='bg-[#f02f45] py-8 px-10 flex flex-col items-center'>
            <img src={ whiteLogo } alt="Logo blanc de Hugo Lelong" className='h-32 mx-auto' />
            <div className='flex mx-auto w-1/3 justify-between text-white mt-8 uppercase'>
                <NavLink to="/" className="hover:text-slate-300 duration-300 ease" >Qui suis-je ?</NavLink>
                <NavLink to="/" className="hover:text-slate-300 duration-300 ease" >Portfolio</NavLink>
                <NavLink to="/" className="hover:text-slate-300 duration-300 ease" >Me contacter</NavLink>
                <NavLink to="/" className="hover:text-slate-300 duration-300 ease" >Documentation</NavLink>
            </div>
            <div className='grid grid-cols-4 w-1/6 mx-auto mt-8'>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                    <img src={ Discord } alt="Icône de Discord" className='w-8' />
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                    <img src={ Linkedin } alt="Icône de Discord" className='w-8' />
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                    <img src={ Instagram } alt="Icône de Discord" className='w-8' />
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                    <img src={ Twitter } alt="Icône de Discord" className='w-8' />
                </a>
            </div>
            <span className='text-white mt-12 text-sm'>© Copyright - Tous Droits Réservés | Site by <a href="https://pr0ph.com" target="_blank" rel="noopener noreferrer" className='font-bold hover:underline'>Proph</a></span>
        </footer>
    )
}
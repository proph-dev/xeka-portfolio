import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import whiteLogo from '../../assets/img/white-logo.png';
import Discord from '../../assets/img/networks/discord.svg';
import Linkedin from '../../assets/img/networks/linkedin.svg';
import Instagram from '../../assets/img/networks/instagram.svg';
import Twitter from '../../assets/img/networks/twitter.svg';

export const Footer = () => {
    return (
        <footer className='bg-[#f02f45] py-8 px-10 flex flex-col items-center'>
            <img src={ whiteLogo } alt="Logo blanc de Hugo Lelong" className='h-32 mx-auto' />
            <div className='flex flex-col text-center tablet:flex-row w-full tablet:w-[75%] desktop:w-[40%] tablet:justify-between text-white mt-8 uppercase'>
                <Link smooth to="#about" className="hover:text-slate-300 duration-300 ease py-2 tablet:py-0" >Qui suis-je ?</Link>
                <Link smooth to="#portfolio" className="hover:text-slate-300 duration-300 ease py-2 tablet:py-0" >Portfolio</Link>
                <Link smooth to="#contact" className="hover:text-slate-300 duration-300 ease py-2 tablet:py-0" >Me contacter</Link>
                <Link to="/" className="hover:text-slate-300 duration-300 ease py-2 tablet:py-0" >Documentation</Link>
            </div>
            <div className='flex w-[80%] semiTablet:w-[60%] tablet:w-[40%] desktop:w-[15%] justify-between mt-8'>
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
            <span className='text-white mt-12 text-sm text-center'>© Copyright - Tous Droits Réservés | Site by <a href="https://pr0ph.com" target="_blank" rel="noopener noreferrer" className='font-bold hover:underline'>Proph</a></span>
        </footer>
    )
}
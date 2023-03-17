import React from 'react';
import { BackgroundAnimation } from '../utils/BackgroundAnimation';
import { MouseScrollAnimation } from '../utils/MouseScrollAnimation';
import { Paragraph } from '../utils/Paragraph';
import { AnimationLottie } from '../utils/AnimationLottie';
import HumanComputer from '../../assets/img/banner-hero-animation.json';
import './bannerhero.css';

export const BannerHero = () => {
    return (
        <section className='relative pt-[125px] laptop:pt-0 h-full laptop:h-screen overflow-hidden'>
            <BackgroundAnimation />
            <div className="content flex items-center justify-between flex-col laptop:flex-row h-full">
                <div className='flex flex-col w-full laptop:w-1/2'>
                    <h1 className='text-transparent text-7xl tablet:text-9xl bg-clip-text bg-gradient-to-r from-[#f0562f] to-[#d300c1]'>Hugo Lelong</h1>
                    <Paragraph content="
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium ex officiis quasi voluptatibus fuga dolor, in ipsam dolorum temporibus voluptas maiores, 
                    doloremque perspiciatis possimus repellendus alias. Reiciendis qui libero enim.
                    "/>
                </div>
                <div className='flex justify-center w-full laptop:w-1/2'>
                    <AnimationLottie lottieFolder={ HumanComputer } />
                </div>

                <MouseScrollAnimation />
            </div>
        </section>
    )
}
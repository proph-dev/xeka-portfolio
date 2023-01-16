import React from 'react';
import sysadmin from '../../assets/img/sysadmin.png';
import { BackgroundAnimation } from '../../components/utils/BackgroundAnimation';
import { MouseScrollAnimation } from '../../components/utils/MouseScrollAnimation';
import { Paragraph } from '../../components/utils/Paragraph';
import './bannerhero.css';

export const BannerHero = () => {
    return (
        <section className='relative h-screen'>
            <BackgroundAnimation />
            <div className="content">
                <div className='flex flex-col w-full laptop:w-1/2'>
                    <h1 className='text-transparent text-9xl bg-clip-text bg-gradient-to-r from-[#f0562f] to-[#d300c1]'>Hugo Lelong</h1>
                    <Paragraph content="
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium ex officiis quasi voluptatibus fuga dolor, in ipsam dolorum temporibus voluptas maiores, 
                    doloremque perspiciatis possimus repellendus alias. Reiciendis qui libero enim.
                    "/>
                </div>
                <div className='flex justify-center w-full laptop:w-1/2'>
                    <img src={ sysadmin } alt="" className='w-[650px]' />
                </div>

                <MouseScrollAnimation />
            </div>
        </section>
    )
}
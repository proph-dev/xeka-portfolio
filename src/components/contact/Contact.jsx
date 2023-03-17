import React from 'react';
import { AnimationLottie } from '../utils/AnimationLottie';
import ContactAnimation from '../../assets/img/contact.json';
import { Form } from './Form';
import './contact.css';

export const Contact = () => {
    return (
        <section className='relative h-full laptop:h-screen py-8 laptop:py-0' id='contact' >
            <div className="content flex items-center justify-between flex-col laptop:flex-row h-full">
                <div className='w-full laptop:w-1/2'>
                    <AnimationLottie lottieFolder={ ContactAnimation } />
                </div>
                <div className='w-full laptop:w-1/2'>
                    <Form />
                </div>
            </div>
        </section>
    )
}
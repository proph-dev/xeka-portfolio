import React from 'react';
import { AnimationLottie } from '../utils/AnimationLottie';
import ContactAnimation from '../../assets/img/contact.json';
import { Form } from './Form';
import './contact.css';

export const Contact = () => {
    return (
        <section className='relative h-screen'>
            <div className="content flex items-center justify-between flex-col laptop:flex-row h-full">
                <div className='w-1/2'>
                    <AnimationLottie lottieFolder={ ContactAnimation } />
                </div>
                <div className='w-1/2'>
                    <Form />
                </div>
            </div>
        </section>
    )
}
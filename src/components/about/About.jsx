import React from 'react';
import { Paragraph } from '../../components/utils/Paragraph';
import { Collapse } from '../utils/Collapse';
import { AnimationLottie } from '../utils/AnimationLottie';
import { Title } from '../utils/Title';
import AboutLottie from '../../assets/img/about-us-animation.json';
import AboutUs from '../../assets/img/about-us-animation.json';

export const About = () => {
    return (
        <section className='relative h-screen'>
            <div className="content flex items-center justify-between flex-col laptop:flex-row h-full">
                <div className='w-1/2 px-20 py-12 rounded-sm shadow-2xl'>
                    <Title content="En savoir plus sur moi" />
                    <Paragraph content="
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam facilis, perspiciatis perferendis ex totam dolores officia ut voluptas provident accusantium beatae.
                    "/>
                    <Collapse title="Installation de serveur Linux" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae corrupti dignissimos, sunt optio excepturi totam inventore obcaecati soluta? Distinctio magni saepe totam in. Vitae vel ipsa voluptatem quasi, explicabo cumque!" />
                    <Collapse title="Configuration Active Directory" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae corrupti dignissimos, sunt optio excepturi totam inventore obcaecati soluta? Distinctio magni saepe totam in. Vitae vel ipsa voluptatem quasi, explicabo cumque!" />
                    <Collapse title="Sécurité des systèmes" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae corrupti dignissimos, sunt optio excepturi totam inventore obcaecati soluta? Distinctio magni saepe totam in. Vitae vel ipsa voluptatem quasi, explicabo cumque!" />
                </div>
                <div className='w-1/2'>
                    <AnimationLottie lottieFolder={ AboutLottie } />
                </div>
            </div>
        </section>
    )
}
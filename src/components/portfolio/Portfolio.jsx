import React from 'react';
import { Title } from '../utils/Title';
import { Paragraph } from '../utils/Paragraph';
import { Card } from './Card';
import projects from '../../datas/projects.json';

export const Portfolio = () => {
    return (
        <section className='relative h-full bg-slate-100 py-8'>
            <div className="content flex flex-col items-center">
                <div className='text-center w-1/2'>
                    <Title content="Mon portfolio" />
                    <Paragraph content="
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptatibus perferendis facere necessitatibus explicabo officia dolorem recusandae consequuntur 
                        ipsam, impedit molestiae a odio iusto. Quis dolore voluptas eos ducimus eius!
                    " />
                </div>

                {/* Projects */}
                <div className='grid grid-cols-3 gap-16 mt-16'>
                    {projects.map((project) => {
                        return (
                            <article key={ project.id } className='shadow-lg bg-white hover:shadow-2xl hover:scale-105 duration-300 ease rounded-2xl h-96 w-[18vw] min-w-[190px] overflow-hidden'>
                                <Card url={ project.url } img={ project.img } title={ project.title } description={ project.description } />
                            </article>
                        )
                    })};
                </div>
            </div>
        </section>
    )
}
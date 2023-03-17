import React from 'react';
import { Title } from '../utils/Title';
import { Paragraph } from '../utils/Paragraph';
import { Card } from './Card';
import projects from '../../datas/projects.json';

export const Portfolio = () => {
    return (
        <section className='relative h-full bg-slate-100 py-8' id='portfolio' >
            <div className="content flex flex-col items-center">
                <div className='text-center w-full laptop:w-1/2'>
                    <Title content="Mon portfolio" />
                    <Paragraph content="
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptatibus perferendis facere necessitatibus explicabo officia dolorem recusandae consequuntur 
                        ipsam, impedit molestiae a odio iusto. Quis dolore voluptas eos ducimus eius!
                    " />
                </div>

                {/* Projects */}
                <div className='grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-12 mt-16'>
                    {projects.map((project) => {
                        return (
                            <article key={ project.id } className='shadow-lg bg-white hover:shadow-2xl hover:scale-105 duration-300 ease rounded-2xl h-[500px] w-full tablet:w-[35vw] laptop:w-[24vw] min-w-[190px] overflow-hidden'>
                                <Card url={ project.url } img={ project.img } title={ project.title } description={ project.description } />
                            </article>
                        )
                    })};
                </div>
            </div>
        </section>
    )
}
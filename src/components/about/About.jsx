import React from 'react';
import { Paragraph } from '../../components/utils/Paragraph';
import { Collapse } from '../utils/Collapse';

export const About = () => {
    return (
        <section className='relative h-screen'>
            <div className="content">
                <div className='w-1/2 px-20 py-12 rounded-sm shadow-xl'>
                    <h2>En savoir plus sur moi</h2>
                    <Paragraph content="
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam facilis, perspiciatis perferendis ex totam dolores officia ut voluptas provident accusantium beatae.
                    "/>
                    <Collapse title="Installation de serveur Linux" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae corrupti dignissimos, sunt optio excepturi totam inventore obcaecati soluta? Distinctio magni saepe totam in. Vitae vel ipsa voluptatem quasi, explicabo cumque!" />
                    <Collapse title="Configuration Active Directory" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae corrupti dignissimos, sunt optio excepturi totam inventore obcaecati soluta? Distinctio magni saepe totam in. Vitae vel ipsa voluptatem quasi, explicabo cumque!" />
                    <Collapse title="Sécurité des systèmes" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae corrupti dignissimos, sunt optio excepturi totam inventore obcaecati soluta? Distinctio magni saepe totam in. Vitae vel ipsa voluptatem quasi, explicabo cumque!" />
                </div>
            </div>
        </section>
    )
}
import React from 'react';

export const Card = ({ url, img, title, description }) => {
    return (
        <a href={ url } target="_blank" rel="noopener noreferrer" >
            <img src={ require(`../../assets/img/${img}`) } alt={ title } className='object-cover h-1/2' />
            <div className='h-1/2 text-center p-4'>
                <h3 className='text-xl mb-2'>{ title }</h3>
                <p>{ description }</p>
            </div>
        </a>
    )
}
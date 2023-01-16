import React from 'react';
import { useState } from 'react';

import chevron from '../../assets/img/chevron.svg';
import './utils.css';


export const Collapse = (props) => {
    const [isOpened, setIsOpened] = useState(false);

    function toggle(e) {
        setIsOpened(isOpened => !isOpened);
        
        const chevron = e.target.lastChild;
        !chevron.classList.contains("rotate-180") ? chevron.classList.add("rotate-180") : chevron.classList.remove("rotate-180");
    }

    return (
        <div className='my-8 mx-0'>
            <div className='flex justify-between items-center text-white cursor-pointer border-t border-slate-300 border-solid' onClick={toggle}>
                <h3 className='text-gray-700 font-medium text-xl hover:text-black'>{ props.title }</h3>
                <img src={ chevron } alt="Chevron" className='duration-500 ease w-[48px]' />
            </div>
            {isOpened && (
                <p className='text-gray-600'>{ props.content }</p>
            )}
        </div>
    )
}
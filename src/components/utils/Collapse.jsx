import React from 'react';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import chevron from '../../assets/img/chevron.svg';
import './utils.css';


export const Collapse = (props) => {
    const [isOpened, setIsOpened] = useState(false);

    function toggle(e) {
        setIsOpened(isOpened => !isOpened);
    }

    return (
        <div className='my-8 mx-0'>
            <div className='flex justify-between items-center text-white cursor-pointer border-t border-slate-300 border-solid pt-2' onClick={toggle}>
                <h3 className='font-medium text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#f0562f] to-[#d300c1]'>{ props.title }</h3>
                <img src={ chevron } alt="Chevron" className={`duration-500 ease w-[32px] ${isOpened ? 'rotate-180' : ''}`} />
            </div>
            <CSSTransition
                in={isOpened}
                timeout={300}
                classNames="collapse-content"
                unmountOnExit
            >
                <p className='text-gray-600'>{ props.content }</p>
            </CSSTransition>
        </div>
    )
}
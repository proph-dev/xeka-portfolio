import React from 'react';
import './utils.css'

export const MouseScrollAnimation = () => {
    return (
        <div className='mouse border-2 border-solid border-[#f02f45] rounded-[15px] h-[50px] w-[30px] absolute bottom-[50px] left-1/2 -translate-x-1/2 flex justify-center'>
            <div className='h-[10px] w-[3px] rounded-[15px] bg-[#f02f45]'></div>
        </div>
    )
}
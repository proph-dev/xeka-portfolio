import React from 'react';
import sysadmin from '../assets/img/sysadmin.png';
import { Paragraph } from '../components/utils/Paragraph';

function Home() {

  return (
    <div className='flex items-center justify-between'>
      <div className='flex flex-col justify-center w-1/2'>
        <h1 className='text-transparent text-9xl bg-clip-text bg-gradient-to-r from-[#f0562f] to-[#d300c1]'>Hugo Lelong</h1>
        <Paragraph content="
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium ex officiis quasi voluptatibus fuga dolor, in ipsam dolorum temporibus voluptas maiores, 
          doloremque perspiciatis possimus repellendus alias. Reiciendis qui libero enim."
        />
      </div>
      <div className='flex justify-center w-1/2'>
        <img src={ sysadmin } alt="" className='w-[650px]' />
      </div>
    </div>
  );
}

export default Home;
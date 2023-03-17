import React from 'react';
import { Link } from 'react-router-dom';

function Error() {

  return (
    <section className='h-screen flex flex-col items-center justify-center px-8'>
      <h1 className='text-[10rem] laptop:text-[15rem] text-red-500'>404</h1>
      <h2 className='text-3xl text-red-500 text-center'>La page que vous avez recherché est introuvable.</h2>
      <Link to="/" className='mt-8 text-2xl bg-red-500 text-white py-2 px-10 rounded-2xl font-semibold text-center hover:bg-red-600 duration-200 ease'>Revenir vers l'accueil</Link>
    </section>
  );
}

export default Error;
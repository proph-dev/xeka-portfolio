import React from "react";
import { Title } from '../utils/Title';
import './contact.css';

export const Form = () => {

    const email = process.env.MAIL_ACCESS;

    return (
        <div className="shadow-2xl rounded-xl p-8 text-center">
            <Title content="Me contacter" />
            <form action="https://formspree.io/f/xrgvpjpv" method="POST" className='flex flex-col mt-8'>
                <input
                type="email"
                name="email"
                placeholder="Adresse e-mail *"
                required
                />
                <input
                type="tel"
                name="tel"
                placeholder="Numéro de téléphone (optionnel)"
                />
                <div className="flex flex-col semiTablet:flex-row justify-between">
                    <input
                    type="text"
                    name="firstName"
                    placeholder="Prénom (optionnel)"
                    className='w-full semiTablet:w-[49%] '
                    />
                    <input
                    type="text"
                    name="lastName"
                    placeholder="Nom de famille (optionnel)"
                    className='w-full semiTablet:w-[49%] '
                    />
                </div>
                <input
                type="text"
                name="object"
                placeholder="Sujet *"
                required
                />
                <textarea
                placeholder="Message *"
                name="message"
                className='h-28'
                required
                />
                <button type="submit" className="mt-4 mx-auto bg-gradient-to-r from-[#f0562f] to-[#d300c1] text-white font-bold py-2 px-8 rounded-xl w-max">Envoyer le message</button>
            </form>
        </div>

    );
  }
import React, { useState } from "react";
import axios from "axios";
import { Title } from '../utils/Title';
import './contact.css';

export const Form = () => {
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      axios
        .post("/send-email", { email, tel, firstName, lastName, subject, message })
        .then((response) => {
          setStatus("Votre demande a bien été envoyée !");
          setEmail("");
          setTel("");
          setFirstName("");
          setLastName("");
          setSubject("");
          setMessage("");
        })
        .catch((error) => {
          setStatus("Un erreur a été détectée, veuillez réessayer.");
        });
    };
  
    return (
        <div className="shadow-2xl rounded-xl p-8 text-center">
            <Title content="Me contacter" />
            <form onSubmit={handleSubmit} className='flex flex-col mt-8'>
                <input
                type="email"
                placeholder="Adresse e-mail *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
                <input
                type="tel"
                placeholder="Numéro de téléphone (optionnel)"
                value={tel}
                onChange={(e) => setTel(e.target.value)}
                />
                <div className="flex justify-between">
                    <input
                    type="text"
                    placeholder="Prénom (optionnel)"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className='w-[49%]'
                    />
                    <input
                    type="text"
                    placeholder="Nom de famille (optionnel)"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className='w-[49%]'
                    />
                </div>
                <input
                type="text"
                placeholder="Sujet *"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
                />
                <textarea
                placeholder="Message *"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className='h-28'
                required
                />
                <button type="submit" className="mt-4 mx-auto bg-gradient-to-r from-[#f0562f] to-[#d300c1] text-white font-bold py-2 px-8 rounded-xl w-max">Envoyer le message</button>
                
                <p className="mt-4">{status}</p>
            </form>
        </div>

    );
  }
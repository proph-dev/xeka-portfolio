import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home.jsx";
import Error from "../pages/Error.jsx";

import { Navbar } from '../components/navbar/Navbar';


export const RoutesPage = () => {
    return (
        <BrowserRouter>
        <header className='fixed w-full z-10 bg-white'>
            <Navbar />
        </header>
        <main>
            <Routes>
                {/* General */}
                <Route path="/" element={<Home />} />

                {/* 404 page */}
                <Route path="*" element={<Error />} />
            </Routes>
        </main>
        </BrowserRouter>
    )
}
"use client";

import Image from 'next/image';
import { useState } from 'react';

export default function RegisterPage(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    function handleFormSubmit(ev){
        ev.preventDefault();
        fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify({email,password}),
            headers: {'Content-Type': 'application/json'},
        });
    }
    return(
        <section>
            <h1 className="text-center text-primary text-4xl"> Register</h1>
            <form className="block max-w-sm mx-auto" onSubmit={handleFormSubmit}>
                <input type="email" placeholder="email" onChange={ev => setEmail(ev.target.value)}></input>
                <input type="password" placeholder="password" onChange={ev => setPassword(ev.target.value)}></input>
                <button type="submit"> Register</button>
                <div className="my-4 text-center text-gray-500"> or login with Social Media</div>
                <button className="flex gap-4 justify-center"> 
                    <Image src={'/googleIcon.png'} alt={''} width={24} height={24} />
                    Login with Google</button>
            </form>
            <div>
                
            </div>
        </section>
    );
}
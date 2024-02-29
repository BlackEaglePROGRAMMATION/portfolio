import { useEffect, useState } from 'react';

import logo from './../../assets/logo.png'
import './index.css'

function Header({ setShowContact }) {
    const [screenWdth, setScreenWdth] = useState(0);   
    
    useEffect(() => {
        setInterval(() => {
            setScreenWdth(window.innerWidth);
        }, 250);
    })

    return (
        <header>
            <img src={logo} alt="logo" />

            <nav>
                <a href="#skill">{screenWdth > 450 ? 'Mes compétences' : 'Compétences'}</a>
                <a href="#projects">{screenWdth > 450 ? 'Mes projets' : 'Projets'}</a>
                
                <button 
                    onClick={() => setShowContact(prev => !prev)}
                >{screenWdth > 450 ? 'Me contacter' : 'Contact'}</button>
            </nav>
        </header>
    )
}

export default Header
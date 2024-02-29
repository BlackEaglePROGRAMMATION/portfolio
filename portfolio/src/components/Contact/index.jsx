import { useEffect, useRef, useState } from 'react'

import emailjs from '@emailjs/browser';

import GIF_dots from './../../assets/gif-dots.gif';

import './index.css'

const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function Contact({ setShowContact }) {
    const [sendMsg, setSendMsg] = useState(false);
    const [sentMsg, setSentMsg] = useState(false);
    const [msgError, setMsgError] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        const email = e.target.email;
        
        if (!emailCheck.test(email.value)) {
            alert('Email incorrect');
            return;
        }

        setSendMsg(true);

        emailjs.sendForm('service_d7ihy47', 'template_7liy8tq', form.current, 'Ou62VtBWnFqMaOCaC')
            .then(() => {
                setSendMsg(false);
                setSentMsg(true);
            }, () => {
                setMsgError(true);
            });
    };

    useEffect(() => {
        if (sentMsg) {
            setTimeout(() => {
                setSentMsg(false)
            }, 3500)
        }

        if (msgError) {
            setTimeout(() => {
                msgError(false)
            }, 3500)
        }
    }, [sentMsg, msgError])

    return (
        <div className="sect-contact">
            <form
                ref={form}
                className="contact"
                onSubmit={sendEmail}
            >
                <i
                    className='fas fa-xmark'
                    onClick={() => setShowContact(prev => !prev)}
                ></i>

                <h3>Me contacter</h3>

                <input
                    name='email'
                    type="text"
                    placeholder='Email :'
                />

                <input
                    name='object'
                    type="text"
                    placeholder='Object :'
                />

                <textarea
                    name='message'
                    placeholder='Message...'
                ></textarea>

                {sentMsg && <p className='msgOnSubmit'>Message envoyé 👍</p>}
                {msgError && <p className='msgOnSubmit'>Problème lors de l'envoi ❌</p>}

                <button
                    type='submit'
                    className='btnSubmit'
                >{sendMsg ? <img src={GIF_dots} alt="dots animation" /> : 'Envoyer'}</button>
            </form>
        </div>
    )
}

export default Contact
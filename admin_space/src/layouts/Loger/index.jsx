import { useState } from 'react';
import './style.css'

function Loader() {    
    const [formData, setFormData] = useState({
        user: '',
        password: ''
    })

    const [show, setShow] = useState(false);
    const isOpen = !show ? '-slash' : '';

    const connection = async (e) => {
        e.preventDefault();
        
        const user = formData.user;
        const password = formData.password;

        if (user === '' || password === '') {
            return
        }

        const req = await fetch(`https://api.corentin-beaudet.fr/admin/login`, {
            method: 'post',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                user: user,
                password: password
            })
        })

        const res = await req.json();

        if (res.token) {
            sessionStorage.setItem('token', res.token);
            window.location.reload()
        }
    }

    return (
        <section className='loger'>
            <form onSubmit={(e) => connection(e)}>

                <span>Loger</span>

                <div className="container">
                    <input
                        type="text"
                        placeholder='User'

                        value={formData.user}
                        onChange={(e) =>
                            setFormData(prev => {
                                const newData = { ...prev }
                                newData.user = e.target.value;
                                return newData
                            })
                        }
                    />

                    <div className="input-pw">
                        <i
                            onClick={() => setShow(!show)}
                            className={`fas fa-eye${isOpen}`}
                        ></i>
                        <input
                            placeholder='Password'
                            type={show ? 'texte' : 'password'}

                            value={formData.password}
                            onChange={(e) => 
                                setFormData(prev => {
                                    const newData = { ...prev }
                                    newData.password = e.target.value;
                                    return newData
                                })
                            }
                        />
                    </div>
                </div>

                <button
                    type='submit'
                    className='login'
                >Connection</button>
            </form>
        </section>
    )
}

export default Loader;
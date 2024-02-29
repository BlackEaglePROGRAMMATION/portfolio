import { useState } from 'react';

import Portfolio from './../../sections/Portfolio';

import './index.css'

function Main() {
    const [sectOpen, setSectOpen] = useState(false);

    return (
        <main>
            <section className='portfolio_sect'>
                <button
                    onClick={() => setSectOpen(!sectOpen)}
                    className={`btnOpen_sect ${sectOpen ? 'actif' : ''}`}
                >
                    Portfolio
                    <i className={`fas fa-angle-${sectOpen ? 'down' : 'left'}`}></i>
                </button>

                {sectOpen && <Portfolio />}
            </section>
        </main>
    )
}

export default Main
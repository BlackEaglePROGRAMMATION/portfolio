import Loader from './layouts/Loger'
import Header from './layouts/Header'
import Main from './layouts/Main'

import './index.css'

function App() {   
    const token = sessionStorage.getItem('token');

    return (
        <div>
            {!token && <Loader />}
            {token && (
                <div className='home'>
                    <Header />
                    <Main />
                </div>
            )}
        </div>
    )
}

export default App
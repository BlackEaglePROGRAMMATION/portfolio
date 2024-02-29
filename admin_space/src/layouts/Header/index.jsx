import logo from './../../assets/blackEagle.png'

import './style.css'

function Header() {
    return (
        <header>
            <img src={logo} alt="logo" />
            <h1>Black<br/>Eagle</h1>
        </header>
    )
}

export default Header;
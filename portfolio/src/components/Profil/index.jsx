import profile from './../../assets/profil-img.png'
/* eslint-disable jsx-a11y/img-redundant-alt */

import './index.css'

function Profile() {
    return (
        <div className="profile">
            <img src={profile} alt="photo profil" />

            <div className="profile-descrip">
                <span>Hello there !</span>
                <h1>Je suis <b>Corentin Beaudet Développeur / Intégrateur Web basé en Normandie</b>.</h1>

                <div className="profile-links">
                    <a href="https://github.com/BlackEaglePROGRAMMATION" target='blank'>
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/corentin-beaudet/" target='blank'>
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Profile
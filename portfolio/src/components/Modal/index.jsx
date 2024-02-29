import { useDispatch } from "react-redux";
import { clearModal } from "../../redux";

import redux from './../../assets/redux-icon.svg';

import './index.css';

function Modal({ data }) {
    const dispatch = useDispatch();

    const language = data?.languages;
    const links = data?.link;

    return (
        <section className="sect-modal">
            <div className="modal">
                <i
                    className='fas fa-xmark'
                    onClick={() => dispatch(clearModal())}
                ></i>

                <div className="container">
                    <div className="container-img">
                        <img src={data?.image} alt={data?.name} />
                    </div>

                    <div className="container-descrip">
                        <h4>{data?.name}</h4>
                        <p>{data?.descrip}</p>
                    </div>
                </div>

                <div className="container-language-link">
                    <div className="container-language">
                        {language.html &&
                            <i className="fa-brands fa-html5"></i>
                        }
                        {language.css &&
                            <i className="fa-brands fa-css3-alt"></i>
                        }
                        {language.scss &&
                            <i className="fa-brands fa-sass"></i>
                        }
                        {language.js &&
                            <i className="fa-brands fa-square-js"></i>
                        }
                        {language.react &&
                            <i className="fa-brands fa-react"></i>
                        }
                        {language.redux &&
                            <img src={redux} alt="alt" />
                        }
                        {language.nodeJs &&
                            <i className="fa-brands fa-node"></i>
                        }
                    </div>

                    <div className="container-link">
                        <a
                            target="blank"
                            href={links.github}
                        >
                            <i className="fa-brands fa-github"></i>
                            Voir le code
                        </a>
                        <a
                            target="blank"
                            href={links.site}
                        >
                            <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            Voir le site
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Modal
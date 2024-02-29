import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

import Profile from "./components/Profil";
import Projects from "./components/Projects";

import Contact from "./components/Contact";
import Modal from "./components/Modal";
import Slider from "./components/Slider";

function App() {
    const [modalOpen, modalIsOpen] = useState(false);
    const [showContact, setShowContact] = useState(false);

    const stateModal = useSelector((state) => state.modal);

    useEffect(() => {
        if (stateModal.name === '') {
            modalIsOpen(false);
            return
        }
        modalIsOpen(true);

    }, [stateModal])

    return (
        <div className="app">
            <Header setShowContact={setShowContact} />
            <Profile />

            <div id="skill">
                <h2>Mes compétences</h2>
                <Slider /> 
                <p>Fort d'une formation approfondie en intégration web chez OpenClassroom, j'ai consolidé mes compétences en tant qu'intégrateur web et étendu mes connaissances en autodidacte pour maîtriser le développement d'API. Mon expertise inclut l'utilisation de technologies telles qu'Express, Multer, et MongoDB, me permettant de créer des interfaces efficaces pour des applications web interactives et dynamiques.</p>               
            </div>

            <h2>Mes projets</h2>
            <Projects />

            <Footer />

            {showContact && <Contact setShowContact={setShowContact} />}
            {modalOpen && <Modal data={stateModal} />}
        </div>
    )
}

export default App;
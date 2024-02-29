import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

import { setModal } from "../../redux";

import './index.css'

function Projects() {
    const dispatch = useDispatch();
    const [project, setProject] = useState([]);

    useEffect(() => {
        const fetchProject = async () => {
            const req = await fetch(`https://api.corentin-beaudet.fr/project`);
            const res = await req.json();

            if (res) {
                setProject(res)
                return
            }

            setProject([]);
        }

        fetchProject()
    }, [])

    const areProject = project.length !== 0;

    return (
        <section id="projects">
            {areProject && project.map((data, idx) => 
                <button 
                    key={idx} 
                    className="project-card"
                    onClick={() => dispatch(setModal(data))}
                >
                    <img src={data.image} alt={data.name} />
                </button>
            )}
        </section>
    )
}

export default Projects
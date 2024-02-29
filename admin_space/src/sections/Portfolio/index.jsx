import { useState } from 'react'
import './index.css'

const initialData = {
    name: '',
    image: '',
    descrip: '',
    languages: {
        html: false,
        css: false,
        scss: false,
        js: false,
        react: false,
        redux: false,
        nodeJs: false
    },
    link: {
        github: '',
        site: ''
    }
}

function Portfolio() {
    const [formData, setFormData] = useState(initialData);
    const [preview, setPreview] = useState('');

    const token = sessionStorage.getItem('token');

    const addImage = (e) => {
        const img = e.target.files[0];

        if (!img) {
            setPreview('');
            setFormData(() => {
                const newForm = { ...formData }
                newForm.image = '';
                return newForm;
            })
            return
        }

        setFormData(() => {
            const newForm = { ...formData }
            newForm.image = img;
            return newForm;
        })

        const reader = new FileReader();
        reader.onloadend = () => {
            setPreview(reader.result);
        }
        reader.readAsDataURL(img);
    }

    const createNewProject = async () => {
        if (formData.name === '') {
            return;
        }

        const data = new FormData();

        checkValue(data, 'name', formData.name);
        checkValue(data, 'image', formData.image);
        checkValue(data, 'descrip', formData.descrip);

        // Ajoutez chaque champ de languages à FormData
        Object.keys(formData.languages).forEach(lang => {
            data.append(`languages.${lang}`, formData.languages[lang]);
        });

        // Ajoutez chaque champ de link à FormData
        Object.keys(formData.link).forEach(linkType => {
            checkValue(data, `link.${linkType}`, formData.link[linkType]);
        });

        const postCreate = await fetch(`https://api.corentin-beaudet.fr/project`, {
            method: 'post',
            headers: { 'Authorization': `Bearer ${token}` },
            body: data
        });

        const res = await postCreate.json();

        if (res) {
            console.log(res);
            // setFormData(initialData);
        }
    };

    function checkValue(form, label, data) {
        if (!data || data === '') {
            return
        }

        form.append(label, data);
    }

    return (
        <div className='portfolio'>
            <h2>Portfolio</h2>

            <div className='createOrUpdate-portfolio'>
                <div className='identification'>
                    <input
                        type="text"
                        className='input-name'
                        placeholder='Nom du projet'

                        value={formData.name}
                        onChange={(e) => setFormData(() => {
                            const newData = { ...formData }
                            newData.name = e.target.value;
                            return newData
                        })}
                    />
                </div>

                <textarea
                    value={formData.descrip}
                    placeholder='Description du projet'
                    onChange={(e) => setFormData(() => {
                        const newData = { ...formData }
                        newData.descrip = e.target.value;
                        return newData
                    })}
                ></textarea>

                <div className="container-inpLanguages">
                    <div className="inp_language">
                        <label>HTML</label>
                        <input
                            type="checkbox"
                            checked={formData.languages.html}
                            onChange={(e) => setFormData(() => {
                                const newData = { ...formData };
                                newData.languages.html = e.target.checked;
                                return newData;
                            })}
                        />
                    </div>
                    <div className="inp_language">
                        <label>CSS</label>
                        <input
                            type="checkbox"
                            checked={formData.languages.css}
                            onChange={(e) => setFormData(() => {
                                const newData = { ...formData };
                                newData.languages.css = e.target.checked;
                                return newData;
                            })}
                        />

                    </div>
                    <div className="inp_language">
                        <label>SCSS</label>
                        <input
                            type="checkbox"
                            checked={formData.languages.scss}
                            onChange={(e) => setFormData(() => {
                                const newData = { ...formData };
                                newData.languages.scss = e.target.checked;
                                return newData;
                            })}
                        />

                    </div>
                    <div className="inp_language">
                        <label>JS</label>
                        <input
                            type="checkbox"
                            checked={formData.languages.js}
                            onChange={(e) => setFormData(() => {
                                const newData = { ...formData };
                                newData.languages.js = e.target.checked;
                                return newData;
                            })}
                        />

                    </div>
                    <div className="inp_language">
                        <label>REACT</label>
                        <input
                            type="checkbox"
                            checked={formData.languages.react}
                            onChange={(e) => setFormData(() => {
                                const newData = { ...formData };
                                newData.languages.react = e.target.checked;
                                return newData;
                            })}
                        />

                    </div>
                    <div className="inp_language">
                        <label>REDUX</label>
                        <input
                            type="checkbox"
                            checked={formData.languages.redux}
                            onChange={(e) => setFormData(() => {
                                const newData = { ...formData };
                                newData.languages.redux = e.target.checked;
                                return newData;
                            })}
                        />

                    </div>
                    <div className="inp_language">
                        <label>NODEJS</label>
                        <input
                            type="checkbox"
                            checked={formData.languages.nodeJs}
                            onChange={(e) => setFormData(() => {
                                const newData = { ...formData };
                                newData.languages.nodeJs = e.target.checked;
                                return newData;
                            })}
                        />

                    </div>
                </div>

                <div className="input_img">
                    {preview === '' && <i className="fas fa-image"></i>}
                    {preview !== '' && <img src={preview} alt='preview' />}
                    <input
                        type="file"
                        onChange={(e) => addImage(e)}
                    />
                </div>

                <input
                    type="text"
                    className='input-link'
                    placeholder='Lien vers github'
                    value={formData.link.github}
                    onChange={(e) => setFormData(() => {
                        const newData = { ...formData };
                        newData.link.github = e.target.value;
                        return newData;
                    })}
                />

                <input
                    type="text"
                    className='input-link'
                    value={formData.link.site}
                    placeholder='Lien vers le site'
                    onChange={(e) => setFormData(() => {
                        const newData = { ...formData };
                        newData.link.site = e.target.value;
                        return newData;
                    })}
                />

                <button
                    className='create-newProject'
                    onClick={() => createNewProject()}
                >Ajouter</button>
            </div>
            <div className="deleteProject-portfolio">

            </div>
        </div>
    )
}

export default Portfolio
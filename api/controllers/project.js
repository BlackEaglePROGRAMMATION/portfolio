const projectSchema = require('../models/project');
const fs = require('fs');

exports.fetchProject = (req, res) => {
    projectSchema.find()
        .then(project => res.status(200).json(project))
        .catch(error => res.status(400).json({ error }));
}


exports.createProject = (req, res) => {
    const newProject = new projectSchema({
        ...req.body,
        languages: JSON.parse(req.body.languages),
        link: JSON.parse(req.body.link),
        image: `${req.protocol}://${req.get('host')}/images/${req.imageName}`,
    })

    newProject.save()
        .then(() => res.status(201).json(true))
        .catch(() => res.status(404).json({ message: 'Error: Project not created' }));
}


exports.putProject = (req, res) => {
    projectSchema.findOne({ _id: req.params.id })
        .then(project => {
            if (req.file) {
                const filename = project.image.split('/images/')[1];

                fs.unlink(`images/${filename}`, () => {
                    req.body.image = `${req.protocol}://${req.get('host')}/images/${req.imageName}`;

                    projectSchema.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
                        .then(() => res.status(200).json(true))
                        .catch(() => res.status(400).json({ message: 'Error: Image edition impossible' }));
                });
                return
            }

            projectSchema.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
                .then(() => res.status(200).json(true))
                .catch(() => res.status(400).json({ message: 'Error: Image edition impossible' }));
        })
        .catch(error => {
            res.status(400).json({ error });
        });
}



exports.deleteProject = (req, res) => {
    projectSchema.findOne({ _id: req.params.id })
        .then(project => {
            if (project.image) {
                const filename = project.image.split('/images/')[1];
                fs.unlink(`images/${filename}`, () => {
                    project.deleteOne({ _id: req.params.id })
                        .then(() => res.status(200).json({ message: 'Projet supprimé' }))
                        .catch(error => res.status(400).json({ error }));
                });
            }
            else {
                project.deleteOne({ _id: req.params.id })
                    .then(() => res.status(200).json({ message: 'Projet supprimé' }))
                    .catch(error => res.status(400).json({ error }));
            }
        })
        .catch(error => { res.status(400).json({ message: 'Projet inexistant' }) });
}
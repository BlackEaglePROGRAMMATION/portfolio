const adminSchema = require('../models/admin');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


exports.login = (req, res, next) => {
    const { user, password } = req.body;

    adminSchema.findOne({ user })
        .then(user => {
            if (!user) {
                return res.status(401).json({ message: "Utilisateur inexistant" });
            }

            bcrypt.compare(password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ message: "Mot de passe incorrect" });
                    }

                    const token = jwt.sign(
                        { userId: user._id },
                        'gR@T!p0S2$9g#YqgsVVrVdQf3S5FD3FE3b&K4J*F7c5Z#A6Q@L6#C7gF8W!P5K',
                        { expiresIn: '24h' }
                    );

                    res.status(200).json({
                        token,
                        ...req.body
                    });
                })
                .catch(() => res.status(500).json({ error: 'Erreur lors de la comparaison du mot de passe' }));
        })
        .catch(() => res.status(500).json({ error: 'Erreur lors de la recherche de l\'utilisateur' }));
};


const multer = require('multer');
const path = require('path');

const MINE_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png',
    'image/webp': 'webp'
}

const storage = multer.diskStorage({
    destination: path.join('images'),    
    filename: (req, file, callback) => {
        const extension = MINE_TYPES[file.mimetype];
        const name = file.originalname.split(' ').join('_').split('.')[0];
        req.imageName = name + Date.now() + '.' + extension;
        callback(null, name + Date.now() + '.' + extension);
    }
});

// export => methode multer => qui utilise storage / pour gérer des fichiers uniques
module.exports = multer({ storage }).single('image');
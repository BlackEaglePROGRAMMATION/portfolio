const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    name: {type: String},
    descrip: {type: String},
    image: {type: String},
    languages : {
        html: {type: Boolean},
        css: {type: Boolean},
        scss: {type: Boolean},
        js: {type: Boolean},
        react: {type: Boolean},
        redux: {type: Boolean},  
        nodeJs:  {type: Boolean}           
    },
    link: {
        github: {type: String},
        site: {type: String}
    }
});

module.exports = mongoose.model('project', projectSchema);

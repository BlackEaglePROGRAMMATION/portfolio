const mongoose = require('mongoose');

const adminSchema = mongoose.Schema({
    user: {type: String},
    password: {type: String}
});

module.exports = mongoose.model('admin', adminSchema);

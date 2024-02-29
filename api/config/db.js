// appel mongoose
const mongoose = require('mongoose');

// fonction de connection
const connectDB = async () => {
    const mongoUri = process.env.MONGO_URI;
    console.log(process.env.MONGO_URI);

    try {
        // parametre
        mongoose.set('strictQuery', false);

        // clés de connection
        mongoose.connect(mongoUri);
        
        // si connecter alors log'DB connecté'
        mongoose.connection.once('open', () => {
            console.log('DB connecté');
        });
    }
    catch (err) {
        console.log(err);
        process.exit();
    }
}

module.exports = connectDB;
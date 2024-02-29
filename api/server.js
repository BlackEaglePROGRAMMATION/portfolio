const https = require('https');
const app = require('./app');
const fs = require('fs');

const privateKey = fs.readFileSync('./privkey.pem', 'utf8');
const certificate = fs.readFileSync('./cert.pem', 'utf8');

const options = {
    key: privateKey,
    cert: certificate
};

app.set('port', 8443);

const server = https.createServer(options, app);

server.listen(8443);
import express from 'express';
import path from 'path';
import cors from 'cors';
import https from 'https';
import fs from 'fs';

const app = express();

app.use(cors());

app.get('/adparse', (req, res) => {
	res.sendFile(path.join(__dirname, 'util/jsInjector.js'));
});

app.get('/', (req, res) => {
	res.send('Home');
});

app.post('/ads', (req, res) => {
	res.send('Working!');
});

/*
* https required for many sites when injecting JavaScript
* May need to regen key and cert on new computers
* If so, do so in the https folder in the root directory
*/

https.createServer({
	key: fs.readFileSync(path.join(__dirname, '../../https/key.pem')),
	cert: fs.readFileSync(path.join(__dirname, '../../https/cert.pem')),
}, app).listen(3000);

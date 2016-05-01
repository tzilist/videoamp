import express from 'express';
import path from 'path';

const app = express();

app.get('/findads', (req, res) => {
  res.sendFile(path.join(__dirname, 'util/findAds.js'));
});

app.get('/', (req, res) => {
  res.send('Home');
});

app.post('/ads', (req, res) => {
  res.send('Working!');
});

app.listen(3000);

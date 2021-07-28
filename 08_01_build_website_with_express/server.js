const express = require('express');
const path = require('path');

const app = express();

const port = 3000;

app.use(express.static(path.join(__dirname, './static')));

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, './static/index.html'));
});

app.get('/speakers', (request, response) => {
  response.sendFile(path.join(__dirname, './static/speaker.html'));
});

const server = app.listen(port, () => {
  console.log(`Express server is listening on port ${server.address().port}`);
});
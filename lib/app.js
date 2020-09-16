const express = require('express');
const app = express();

app.use(require('cors')({
  origin: true,
  credentials: true
}));

app.use(express.json());

app.get('/hello', (req, res) => res.send('world'));

module.exports = app;
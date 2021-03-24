'use strict';

const express = require('express');
// Constants
const {port, host} = require('./config');

// App
const app = express();
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(port, host);
console.log(`Running on http://${host}:${port}`);
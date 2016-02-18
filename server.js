"use strict";
const express = require('express');
const app = express();


const PORT = process.env.PORT || 3000; // eslint-disable-line no-magic-numbers
app.get('/', (req, res) => {
  res.send('Server Is Go!');
});

app.listen(PORT, () => {
  console.log(`Node.js server started. Listening on port ${PORT}`);
});

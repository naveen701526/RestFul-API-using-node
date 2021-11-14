const express = require('express');

const app = express();

// Routes
app.get('/', (req, res) => {
  res.send('We are on Home');
});

app.get('/post', (req, res) => {
  res.send('We are on Post');
});
app.listen(3000);

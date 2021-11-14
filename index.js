const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');

const app = express();

app.use(express.json()); //Used to parse JSON bodies

// Middlewares
// app.use('/post', () => {
//   console.log('This is a middleware running');
// });

// import routes
const postsRoutes = require('./routes/posts');

app.use('/posts', postsRoutes);

// connect to database
mongoose.connect(process.env.DB_CONNECTION, () =>
  console.log('Connected to DB!')
);
app.listen(3000);

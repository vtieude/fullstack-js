const bodyParser = require('body-parser');

const express = require('express');
require('dotenv').config();
const { connectDb } = require('./data/mydb');


const contactRoutes = require('./routes/contacts');

const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use('/contacts', contactRoutes);

app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || 'Something went wrong.';
  res.status(status).json({ message: message });
});

connectDb().then(() => {
  app.listen(8080, () => {
    console.log('Server is listening on port 8080')
  });
}).catch((error) => {
  console.log('App error', JSON.stringify(error));
})


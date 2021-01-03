const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.status(200).send('Goodbye World!');
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})

const databaseAccessor = require('./DatabaseAccessor')

app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

app.get('/', (req, res) => {
  databaseAccessor.getAccounts()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

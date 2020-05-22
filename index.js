const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json({ extended: true }));

const clientesController = require('./controllers/clientesController');

clientesController(app);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
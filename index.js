const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database/models');

const app = express();
app.use(bodyParser.json({ extended: true }));

const clientesController = require('./controllers/clientesController');

clientesController(app, db);

db.sequelize.sync()
.then(() => {
  app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });
})
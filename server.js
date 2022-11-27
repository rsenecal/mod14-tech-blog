const express = require("express");
const path = require('path');
// const routes = require("./routes");
// const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// turn on routes
// app.use(routes);

// turn on connection to db and server
// sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
// });

require('dotenv').config();
const express = require("express");
const routes = require("./routes");
const path = require('path');
const sequelize = require("./config/connection");
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const hbs = exphbs.create({
  mainLayout: 'main.handlebars',
  // Custom helpers for handlebars
  helpers: {
    formatDate: function (date, format) {
      return moment(date).format(format);
    }
  },
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
// TODO: Invoke app.use() and serve static files from the '/public' folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(
  '/views',
  express.static(path.join(__dirname, 'node_modules', 'jquery', 'dist'))
);

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Tech Blog listening at http://localhost:${PORT}`));
});

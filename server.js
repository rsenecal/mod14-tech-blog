const express = require("express");
const path = require('path');
const exphbs = require('express-handlebars');
const { Post } = require('./models');

// const routes = require("./routes");
// const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({
  mainLayout: 'main.handlebars',
});

app.use(express.static('public'));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routing of blog pages

app.get('/', async (req, res) => {
  const posts = await Post.find({})
  res.render('index',{
    posts
  })
});

app.get('/posts/new', (req, res) => {
  res.render('newpost')
});

app.post('/posts/store', (req, res) => {
  Post.create(req.body,(err, post) => {
    res.redirect('/')
  })
});

// app.get('/about', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'pages/about.html'));
// });

// app.get('/contact', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'pages/contact.html'));
// });

// app.get('/post', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'pages/post.html'));
// });


// turn on routes
// app.use(routes);

  app.listen(PORT, () => console.log("Now listening"));
// });

const router = require('express').Router();
// const { checkAuth } = require('../middlewares/index');
const { Blog, User } = require('../models');

//GET homepage
router.get('/', (req, res) => {
  res.render('index');
  //render
});


module.exports = router;

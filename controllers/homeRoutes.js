const router = require('express').Router();
const sequelize = require('../config/connection');
// const path = require("path");
const { Posts, Users, Comments } = require('../models');
const withAuth = require('../utils/auth');

router.get("/", async (req, res) => {
      try {
      const postData = await Posts.findAll({
        include: [{ model: Users }, {model: Comments}],
      });

      const posts = postData.map((post) => post.get({ plain: true }));

      if (req.session.user_id) {
        res.render("homepage", {
          posts,
          logged_in: req.session.logged_in
        });
      }else {
        res.render("homepage", {
          posts,
          logged_in: req.session.logged_in
        });
      }
      
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
  try {
    if (req.session.user_id) {
      res.render("login", { logged_in: req.session.logged_in })
    }
  } catch (err) {
    res.status(500).json(err);
  }

  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

module.exports = router;

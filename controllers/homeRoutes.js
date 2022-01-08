const router = require('express').Router();
const path = require("path");
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
          logged_in: req.session.logged_in,
        });
      } else {
        res.render("homepage", {
          posts,
          logged_in: req.session.logged_in,
        });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

router.get("/login", (req, res) => {
  res.render("login", { loggedIn: req.session.loggedIn });
});

router.get("/signup", (req, res) => {
  res.render("signup", { loggedIn: req.session.loggedIn });
});

module.exports = router;

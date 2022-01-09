const router = require('express').Router();
const sequelize = require('../config/connection');
// const path = require("path");
const { Posts, Users, Comments } = require('../models');
const withAuth = require('../utils/auth');

router.get("/", async (req, res) => {
      try {
      const postData = await Posts.findAll({
        include: [{ model: Users }, {model: Comments}],
        order: [
          ['datetime_stamp', 'DESC'],
        ],
      });

      const posts = postData.map((post) => post.get({ plain: true }));

      if (req.session.user_id) {
        res.render("homepage", {
          posts,
          logged_in: req.session.logged_in
        });
      }else {
        res.render("homepage", {
          posts
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
    } else {
      res.render("login", { logged_in: req.session.logged_in })
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/signup', (req, res) => {
  try {
    if (req.session.user_id) {
      res.render("signup", { logged_in: req.session.logged_in })
    } else {
      res.render("signup", { logged_in: req.session.logged_in })
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const userData = await Users.findOne({
      where: {
        id: req.session.user_id,
      },
    });
    const userName = userData.username;

    const dbPostData = await Posts.findAll({
      where: {
        user_id: req.session.user_id
      },
      include: [
        {
          model: Comments, include: { model: Users }
        },
        {
          model: Users
        }
      ],
      order: [
        ['datetime_stamp', 'DESC'],
      ],
    });

    const posts = dbPostData.map(post => post.get({ plain: true }));
    if (req.session.user_id) {
      res.render("dashboard", {
        posts,
        userName,
        logged_in: req.session.logged_in
      });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/dashboard/createpost", withAuth, async (req, res) => {
  try {
    
    res.render("createpost", {
      logged_in: req.session.logged_in,
      user_id: req.session.user_id
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/post/:id", async (req, res) => {

  try {
    const dbPostData = await Posts.findOne({
      where: {
        id: req.params.id
      },
      include: [
        { model: Comments, include: { model: Users }},
        { model: Users }
      ],
    });

    const post = dbPostData.get({ plain: true });

    if (req.session.user_id) {
      res.render('viewpost', {
        post,
        logged_in: req.session.logged_in
      });
    }else {
      res.render('viewpost', {
        post,
        logged_in: req.session.logged_in
      });
    }
   
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

});

module.exports = router;

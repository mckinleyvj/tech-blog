const router = require('express').Router();
const path = require("path");
const { Posts, Users, Comments } = require('../models');
const withAuth = require('../utils/auth');

router.get("/", async (req, res) => {
    try {
      if (req.session.user_id) {
        res.render("homepage", {
          logged_in: req.session.logged_in
        });
      } else {
        res.render("homepage");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;

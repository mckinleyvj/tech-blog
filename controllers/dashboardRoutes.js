const router = require('express').Router();
const sequelize = require('../config/connection');
const { Posts, Users, Comments } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    Posts.findAll({
      where: {
        user_id: req.session.user_id
      },
      include: [
        {
          model: Comments, include: { model: Users }
        },
        {
          model: Users,
        }
      ]
    })
      .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('dashboard', { 
          posts, 
          logged_in: req.session.logged_in
          // logged_in: true 
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
   
});

module.exports = router;
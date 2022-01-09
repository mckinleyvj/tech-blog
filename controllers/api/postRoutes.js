const router = require('express').Router();
const { Posts } = require('../../models');
const withAuth = require('../../utils/auth');

//api/posts
router.post("/create", withAuth, async (req, res) => {
    try {
      const newPost = req.body.usrPost;
      const userId = req.session.user_id;
      const dbNewPost = await Posts.create({
        post: newPost,
        user_id: userId,
      });
      res.status(200).json(dbNewPost);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;

const router = require('express').Router();
const { Posts } = require('../../models');
const withAuth = require('../../utils/auth');

//api/posts
router.post("/create", withAuth, async (req, res) => {
    try {
      const newPost_title = req.body.usrPost;
      const newPost_text = req.body.usrPostTxt; //added
      const userId = req.session.user_id;
      const dbNewPost = await Posts.create({
        post_title: newPost_title,  //added
        post_text: newPost_text,  //added
        user_id: userId,
      });
      res.status(200).json(dbNewPost);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.delete("/delete/:id", withAuth, async (req, res) => {
    try {
      const post_id = await Posts.findByPk(req.params.id);
      if (!post_id) {
        res.status(400).json({ message: "Cant find the id of this post" });
        return;
      } 
        await post_id.destroy();
        res.sendStatus(204);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

module.exports = router;

const router = require('express').Router();
const { Comments } = require('../../models');
const withAuth = require('../../utils/auth');

// router.get('/',  async (req, res) => {
//     try {

//         const dbCommentData = await Comments.findAll({});

//     } catch (err) {
//         res.status(400).json(err);
//     }
// });

router.post('/create', withAuth,  async (req, res) => {
    try {
            const newComment = req.body.usrComment;
            const postId = req.body.post_id;
            const userId = req.session.user_id;
            const dbNewComment = await Comments.create({
                comment: newComment,
                post_id: postId,
                user_id: userId,
            });
            res.status(200).json(dbNewComment);
    } catch (err) {
        res.status(400).json(err);
    }
  });

module.exports = router;

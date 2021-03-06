const sequelize = require('../config/connection');
const { Users, Posts, Comments } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');
const commentData = require('./commentData.json');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  const users = await Users.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const posts = await Posts.bulkCreate(postData, {});

  const comments = await Comments.bulkCreate(commentData, {});


  process.exit(0);
};

seedAll();

const { posts } = require("../model/posts");
const { Op } = require("sequelize");
const createPost = async (req, res) => {
  try {
    const { post, userId } = req.body;
    const postAdded = await posts.create({ post, userId });
    return res.status(200).json({ suc: true, postAdded });
  } catch (error) {
    console.log(error);
    return res.status(401).json(error);
  }
};

const fetchAllPost = async (req, res) => {
  try {
    const allPosts = await posts.findAll({ attributes: ["post"] });
    if (allPosts.length <= 0) {
      return res
        .status(400)
        .json({ message: "no posts available at this time" });
    }
    return res.status(200).json({ suc: true, allPosts });
  } catch (error) {
    console.log(error);
    return res.status(401).json(error);
  }
};

const fetchPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await posts.findOne({ where: { id }, attributes: ["post"] });

    if (post === null) {
      return res
        .status(400)
        .json({ message: "no post available with this ID" });
    }
    return res.status(200).json({
      suc: true,
      post,
    });
  } catch (error) {
    console.log(error);
    return res.status(401).json(error);
  }
};

const fetchPostByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const usersPost = await posts.findAll({
      where: { userId },
      attributes: ["post"],
    });
    if (usersPost.length <= 0) {
      return res
        .status(400)
        .json({ message: "no posts available of this user" });
    }
    return res.status(200).json({ suc: true, usersPost });
  } catch (error) {
    console.log(error);
    return res.status(401).json(error);
  }
};

const updatePost = async (req, res) => {
  try {
    const { userId, id } = req.params;
    const { post } = req.body;
    const updatedPost = await posts.update(
      { post },
      { where: { [Op.and]: [{ id }, { userId }] } }
    );
    if (updatedPost[0] === 0) {
      return res
        .status(400)
        .json({
          suc: false,
          message:
            "unauthorized : this user has no access to update or delete this post OR no post with this Id",
        });
    }
    return res.status(200).json({ suc: true, status: "updated" });
  } catch (error) {
    console.log(error);
    return res.status(401).json(error);
  }
};

const deletePost = async (req, res) => {
    try {
      const { userId, id } = req.params;
      const deletePost = await posts.destroy(
        { where: { [Op.and]: [{ id }, { userId }] } }
      );
      if (deletePost === 0) {
        return res
          .status(400)
          .json({
            suc: false,
            message:
              "unauthorized : this user has no access to update or delete this post OR no post with this Id",
          });
      }
      return res.status(200).json({ suc: true, status: "deleted" });
    } catch (error) {
      console.log(error);
      return res.status(401).json(error);
    }
  };
module.exports = {
  createPost,
  fetchAllPost,
  fetchPostById,
  fetchPostByUserId,
  updatePost,
  deletePost
};

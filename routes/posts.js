const { Router } = require("express");
const router = Router();
const {
  createPost,
  fetchAllPost,
  fetchPostById,
  fetchPostByUserId,
  updatePost,
  deletePost,
} = require("../controllers/posts");
router.post("/create", createPost);
router.get("/fetchAll", fetchAllPost);
router.get("/fetchById/:id", fetchPostById);
router.get("/fetchByUserId/:userId", fetchPostByUserId);
router.put("/update/:userId/:id", updatePost);
router.delete("/delete/:userId/:id", deletePost);
module.exports = {
  router,
};

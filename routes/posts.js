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

/**
 * name:create
 * method:POST
 * route - http://localhost:3000/create
 */
router.post("/create", createPost);

/**
 * name:fetchAll
 * method:GET
 * route - http://localhost:3000/fetchAll
 * description:this end point fetch all the posts
 */
router.get("/fetchAll", fetchAllPost);

/**
 * name:fetch by id
 * method:GET
 * route - http://localhost:3000/fetchById/:1
 * description:this end point fetch posts by id you provide in param
 */
router.get("/fetchById/:id", fetchPostById);

/**
 * name:fetch by userId
 * method:GET
 * route - http://localhost:3000/fetchByUserId/1
 * description:this end point fetch posts by userId you provide
 */
router.get("/fetchByUserId/:userId", fetchPostByUserId);

/**
 * name:update
 * method:PUT
 * route - http://localhost:3000/update/123/1
 * description:this end point update posts of id you provide in params its also ensure athorization
 *
 */
router.put("/update/:userId/:id", updatePost);

/**
 * name:delete
 * method:DELETE
 * route - http://localhost:3000/delete/123/1
 * description:this end point delete posts of id you provide in params its also ensure athorization
 *
 */
router.delete("/delete/:userId/:id", deletePost);

module.exports = {
  router,
};

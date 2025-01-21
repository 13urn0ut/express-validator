const { getUserById } = require("../controllers/userController");
const checkUserParams = require("../validators/checkUserParams");
const validate = require("../validators/validate");

const userRouter = require("express").Router();

userRouter.route("/:id").get(checkUserParams, validate, getUserById);

module.exports = userRouter;

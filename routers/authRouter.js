const { registerUser } = require("../controllers/userController");
const checkRegisterBody = require("../validators/checkRegisterBody");
const validate = require("../validators/validate");

const authRouter = require("express").Router();

authRouter.route("/register").post(checkRegisterBody, validate, registerUser);

module.exports = authRouter;

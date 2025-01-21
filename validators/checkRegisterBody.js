const { body } = require("express-validator");

const checkRegisterBody = [
  body("email")
    .trim()
    .notEmpty()
    .isEmail()
    .withMessage("Email must be a valid email address."),

  body("password")
    .trim()
    .notEmpty()
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long."),

  body("age")
    .optional()
    .trim()
    .isInt({ min: 1 })
    .withMessage("Age must be a positive integer."),
];

module.exports = checkRegisterBody;

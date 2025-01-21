const { param } = require("express-validator");

const checkUserParams = [
  param("id").notEmpty().isInt().withMessage("Must be a numeric value."),
];

module.exports = checkUserParams;

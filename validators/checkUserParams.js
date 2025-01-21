const { param } = require("express-validator");

const checkUserParams = [
  param("id").notEmpty().isInt().withMessage("Id must be a numeric value."),
];

module.exports = checkUserParams;

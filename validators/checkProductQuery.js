const { query } = require("express-validator");

const checkProductQuery = [
  query("price")
    .optional()
    .trim()
    .isCurrency({
      allow_negatives: false,
      allow_zero: false,
      digits_after_decimal: [0, 1, 2],
    })
    .withMessage("Must be a positive number with up to 2 decimal places."),

  query("category")
    .trim()
    .notEmpty()
    .withMessage("Must be a non-empty string."),
];

module.exports = checkProductQuery;

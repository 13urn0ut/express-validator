const { getProducts } = require("../controllers/productController");
const checkProductQuery = require("../validators/checkProductQuery");
const validate = require("../validators/validate");

const productRouter = require("express").Router();

productRouter.route("/").get(checkProductQuery, validate, getProducts);

module.exports = productRouter;

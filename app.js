const express = require("express");
const authRouter = require("./routers/authRouter");
const productRouter = require("./routers/productRouter");
const userRouter = require("./routers/userRouter");
const errorHandler = require("./midleware/errorHandler");
const AppError = require("./utils/appError");
const app = express();

app.use(express.json());

app.use("/api/v1/", authRouter);
app.use("/api/v1/products", productRouter);
app.use("/api/v1/users", userRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(errorHandler);

module.exports = app;

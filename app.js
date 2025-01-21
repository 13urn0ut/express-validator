const express = require("express");
const authRouter = require("./routers/authRouter");
const productRouter = require("./routers/productRouter");
const userRouter = require("./routers/userRouter");
const app = express();

app.use(express.json());

app.use("/api/v1/", authRouter);
app.use("/api/v1/products", productRouter);
app.use("/api/v1/users", userRouter);
app.all("*", (req, res) => {
  res.status(404).json({
    status: "fail",
    message: `Can't find ${req.originalUrl} on this server`,
  });
});

module.exports = app;

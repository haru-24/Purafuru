const express = require("express");
const app = express();
const cors = require("cors");
const postInfoRouter = require("./routers/postInfoRouter");
const reviewRouter = require("./routers/reviewsRouter.js");

const PORT = process.env.PORT || 8888;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  res.send("hello from express!!!");
});

app.use("/post_info", postInfoRouter);
app.use("/review", reviewRouter);

app.listen(PORT, () => console.log(`Server Run Port:${PORT}`));

const express = require("express");
const router = express.Router();
const PostInfo = require("../models/PostInfos.js");
const moment = require("moment");
router.use(express.json());

router.get("/", async (req, res) => {
  const get = await PostInfo.findAll({
    order: [["createdAt", "DESC"]],
  });
  res.json(get);
});

// post_infoへ投稿
router.post("/", async (req, res) => {
  const post = await PostInfo.create({
    genre: req.body.genre,
    place_name: req.body.place_name,
    prefecture: req.body.prefecture,
    post_number: req.body.post_number,
    address: req.body.address,
    apeal_point: req.body.apeal_point,
    recommendation: req.body.recommendation,
    image: req.body.image,
    post_user: req.body.post_user,
    post_history_id: req.body.post_history_id,
    user_id: req.body.user_id,
    favorites: req.body.favorites,
    posted_at: moment().format("YYYY/ MM/ D"),
  })
    .then(() => {
      res.json(post);
    })
    .catch((err) => {
      throw err;
    });
});

router.get("/:pageID", async (req, res) => {
  const pageData = await PostInfo.findAll({
    where: {
      id: [req.params.pageID],
    },
  });
  res.json(pageData);
});

module.exports = router;

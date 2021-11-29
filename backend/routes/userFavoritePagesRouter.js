const express = require("express");
const router = express.Router();
const UserFavoritePages = require("../models/UserFavoritePage");

router.use(express.json());

// テスト用
router.get("/", async (req, res) => {
  const favoriteData = await UserFavoritePages.findAll({
    order: [["created_at", "DESC"]],
  });
  res.json(favoriteData);
});

// お気に入りした記事を格納
router.post("/", async (req, res) => {
  const post = await UserFavoritePages.create({
    user_id: req.body.user_id,
    fovorite_page_id: req.body.favorite_page_id,
  })
    .then(() => {
      res.send("post_favorite ok!!");
    })
    .catch((err) => {
      throw err;
    });
});

module.exports = router;

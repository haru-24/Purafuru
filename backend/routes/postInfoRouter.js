const express = require("express");
const router = express.Router();
const PostInfo = require("../models/PostInfos.js");
const moment = require("moment");
router.use(express.json());

// 作成された順に並び替えて送る
router.get("/", async (req, res) => {
  const page = req.query.page_number;
  const perPage = 10;
  const get = await PostInfo.findAndCountAll({
    offset: (page - 1) * perPage,
    limit: perPage,
    order: [["createdAt", "DESC"]],
  });
  res.json(get.rows);
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
      res.send("post_info send ok!");
    })
    .catch((err) => {
      throw err;
    });
});

// 検索機能

router.get("/search", async (req, res) => {
  const page = req.query.page_number;
  const perPage = 10;
  const pageData = await PostInfo.findAndCountAll({
    where: {
      prefecture: [req.query.prefecture],
      genre: [req.query.genre],
    },
    offset: (page - 1) * perPage,
    limit: perPage,
    order: [["createdAt", "DESC"]],
  });
  res.json(pageData.rows);
});

router.get("/information/:pageID", async (req, res) => {
  const pageData = await PostInfo.findOne({
    where: {
      id: [req.params.pageID],
    },
  });
  res.json(pageData);
});

// マイページ用情報
router.get("/userPostInfo", async (req, res) => {
  const page = 1;
  const perPage = 10;
  const pageData = await PostInfo.findAndCountAll({
    where: {
      user_id: [req.query.userID],
    },
    offset: (page - 1) * perPage,
    limit: perPage,
    order: [["createdAt", "DESC"]],
  });
  res.json(pageData);
});

// お気に入り数追加
router.put("/favorite", async (req, res) => {
  const updateFavorite = await PostInfo.update(
    {
      favorites: req.body.favorites,
    },
    {
      where: { id: req.body.id },
    }
  )
    .then(() => {
      console.log("ok favorite update");
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;

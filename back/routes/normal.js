// normal.js는 일반 사용자들이 보는 화면에서 사용할 라우터(메인 페이지)

const express = require("express");
const router = express.Router();
const mainLayout = "../views/layouts/main.ejs";
const Post = require("../models/Post");
const asynchandler = require("express-async-handler");

router.get(
  ["/", "/home"], 
  asynchandler(async (req, res) => {
  const locals = {
    title: "Home",
  };

  const data = await Post.find({}); // 데이터베이스의 데이터를 find를 사용해 모두 가져오기
  res.render("index", { locals, data, layout: mainLayout }); // index.ejs를 렌더링하는데 mainLayout으로 감싸기
})
);

router.get("/about", (req, res) => {
  res.render("about", { layout: mainLayout }); // about.ejs를 렌더링하는데 mainLayout으로 감싸기
});


module.exports = router;
// normal.js는 일반 사용자들이 보는 화면에서 사용할 라우터

const express = require("express");
const router = express.Router();
const mainLayout = "../views/layouts/main.ejs";

router.get(["/", "/home"], (req, res) => {
  const locals = {
    title: "Home",
  };
  res.render("index", { locals, layout: mainLayout }); // index.ejs를 렌더링하는데 mainLayout으로 감싸기
});

router.get("/about", (req, res) => {
  res.render("about", { layout: mainLayout }); // about.ejs를 렌더링하는데 mainLayout으로 감싸기
});

module.exports = router;
// app.js는 메인 파일

require("dotenv").config();
const express = require("express");
const expressLayouts = require("express-ejs-layouts"); 

const app = express();
const port = process.env.PORT || 3000;


// 레이아웃과 뷰 엔진 설정
app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("views", "./views");


// 정적 파일 위치
app.use(express.static("public"));


// 루트 경로로 접속하면 routes\normal.js(일반 사용자)의 라우트 사용!
app.use("/", require("./routes/normal"));

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
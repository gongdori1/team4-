require('dotenv').config();
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const connectDb = require('./config/db');

const app = express();
const port = process.env.PORT || 3000;

// DB 연결
connectDb();

// 미들웨어 설정
app.use(express.json()); // JSON 요청 본문을 파싱합니다.
app.use(express.urlencoded({ extended: true })); // URL-encoded 요청 본문을 파싱합니다.
app.use(expressLayouts);

// 레이아웃과 뷰 엔진 설정
app.set('view engine', 'ejs');
app.set('views', './views');

// 정적 파일 위치
app.use(express.static('public'));

// 라우트 설정
app.use('/petitions', require('./routes/petition')); // 청원 관련 라우트
app.use('/auth', require('./routes/auth')); // 인증 관련 라우트

// 루트 경로 설정 (기본 페이지)
app.get('/', (req, res) => {
  res.render('main'); // 기본적으로 메인 페이지(main.ejs)를 렌더링합니다.
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

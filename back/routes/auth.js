//비즈니스 로직은 authController.js 파일에 있음

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const auth = require('../middleware/auth'); // 청원 작성 시 로그인 여부 확인

// 로그인 페이지 렌더링
router.get('/login', (req, res) => {
  res.render('login'); // login.ejs 파일을 렌더링
});

// 회원가입 라우트
router.post('/register', authController.register);

// 로그인 라우트
router.post('/login', authController.login);

// 사용자 정보 가져오기 (토큰 검증 후)
router.get('/me', auth, authController.getMe);

module.exports = router;



// 비즈니스 로직은 petitionController.js 파일에 있음

const express = require('express');
const router = express.Router();
const petitionController = require('../controllers/petitionController');
const auth = require('../middleware/auth');

// 청원 목록 조회
router.get('/', petitionController.getAllPetitions);

// 특정 청원 상세 조회
router.get('/:id', petitionController.getPetitionById);

// 청원 작성 (로그인 필요)
router.post('/create', auth, petitionController.createPetition);

module.exports = router;

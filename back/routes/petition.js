const express = require('express');
const router = express.Router();
const Petition = require('../models/Petition');
const auth = require('../middleware/auth');


// 청원 목록 조회
router.get('/', (req, res) => {
    Petition.find().then(petitions => res.json(petitions)).catch(err => res.status(400).json(err));
});


// 특정 청원 상세 조회
router.get('/:id', (req, res) => {
    Petition.findById(req.params.id).then(petition => res.json(petition)).catch(err => res.status(400).json(err));
});


// 청원 작성 (로그인 필요)
router.post('/create', auth, (req, res) => {
    const newPetition = new Petition(req.body);
    newPetition.save().then(petition => res.json(petition)).catch(err => res.status(400).json(err));
});

module.exports = router;

const Petition = require('../models/Petition');

// 청원 목록 조회
exports.getAllPetitions = async (req, res) => {
    try {
        const petitions = await Petition.find();
        res.json(petitions);
    } catch (err) {
        res.status(400).json(err);
    }
};

// 특정 청원 상세 조회
exports.getPetitionById = async (req, res) => {
    try {
        const petition = await Petition.findById(req.params.id);
        if (!petition) {
            return res.status(404).json({ msg: 'Petition not found' });
        }
        res.json(petition);
    } catch (err) {
        res.status(400).json(err);
    }
};

// 청원 작성
exports.createPetition = async (req, res) => {
    try {
        const newPetition = new Petition(req.body);
        const petition = await newPetition.save();
        res.json(petition);
    } catch (err) {
        res.status(400).json(err);
    }
};

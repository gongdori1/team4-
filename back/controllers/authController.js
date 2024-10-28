// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');
// const config = require('config');

// // 회원가입
// exports.register = async (req, res) => {
//     const { name, email, password } = req.body;

//     try {
//         // 사용자 중복 확인
//         let user = await User.findOne({ email });
//         if (user) {
//             return res.status(400).json({ msg: 'User already exists' });
//         }

//         // 비밀번호 해싱
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(password, salt);

//         // 사용자 생성
//         user = new User({
//             name,
//             email,
//             password: hashedPassword
//         });

//         await user.save();

//         // 응답
//         res.status(201).json({ msg: 'User registered successfully' });
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server error');
//     }
// };

// // 로그인
// exports.login = async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         // 사용자 확인
//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.status(400).json({ msg: 'Invalid credentials' });
//         }

//         // 비밀번호 확인
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(400).json({ msg: 'Invalid credentials' });
//         }

//         // JWT 토큰 생성
//         const payload = {
//             user: {
//                 id: user.id
//             }
//         };

//         const token = jwt.sign(payload, config.get('jwtSecret'), { expiresIn: '1h' });

//         res.json({ token });
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server error');
//     }
// };

// // 사용자 정보 가져오기
// exports.getMe = async (req, res) => {
//     try {
//         const user = await User.findById(req.user.id).select('-password');
//         res.json(user);
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server error');
//     }
// };


const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const config = require('config');

// 회원가입
exports.register = async (req, res) => {
    const { name, emailLocal, emailDomain, password, passwordConfirm } = req.body;

    // 이메일 조합
    const email = `${emailLocal}@${emailDomain}`;

    try {
        // 사용자 중복 확인
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: '사용자가 이미 존재합니다.' });
        }

        // 비밀번호 확인
        if (password !== passwordConfirm) {
            return res.status(400).json({ msg: '비밀번호가 일치하지 않습니다.' });
        }

        // 비밀번호 해싱
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // 사용자 생성
        user = new User({
            name,
            email,
            password: hashedPassword
        });

        await user.save();

        // 응답
        res.status(201).json({ msg: '사용자가 성공적으로 등록되었습니다.' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('서버 오류');
    }
};

// 로그인
exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // 사용자 확인
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: '유효하지 않은 자격 증명입니다.' });
        }

        // 비밀번호 확인
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: '유효하지 않은 자격 증명입니다.' });
        }

        // JWT 토큰 생성
        const payload = {
            user: {
                id: user.id
            }
        };

        const token = jwt.sign(payload, config.get('jwtSecret'), { expiresIn: '1h' });

        res.json({ token });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('서버 오류');
    }
};

// 사용자 정보 가져오기
exports.getMe = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('서버 오류');
    }
};




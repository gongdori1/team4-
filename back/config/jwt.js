// JWT 토큰 생성 및 설정 

const jwt = require('jsonwebtoken');
const config = require('config');
const jwtSecret = config.get('jwtSecret');

function generateToken(user) {
    const payload = {
        user: {
            id: user.id
        }
    };

    return jwt.sign(payload, jwtSecret, { expiresIn: '1h' });
}

module.exports = generateToken;

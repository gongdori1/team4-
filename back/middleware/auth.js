// 토큰 추출: 요청 헤더에서 JWT(토큰)를 추출합니다.

// 토큰 검증: JWT를 사용하여 토큰이 유효한지 확인합니다. 이 과정에서 비밀 키(JWT_SECRET)가 사용됩니다.

// 사용자 정보 설정: 검증된 토큰에서 사용자 ID를 추출하고, 
// 이를 req.user에 할당하여 이후 라우트 핸들러에서 접근할 수 있게 합니다.

// 미들웨어 연결: 검증이 성공하면 next()를 호출하여 다음 미들웨어 또는 라우트 핸들러로 이동합니다. 
// 실패하면 401(Unauthorized) 상태 코드를 반환합니다.


const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = function (req, res, next) {
    // 헤더에서 토큰 가져오기
    const token = req.header('Authorization').replace('Bearer ', '');

    // 토큰이 없는 경우 에러 반환
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    try {
        // 토큰 검증
        const decoded = jwt.verify(token, config.get('jwtSecret'));

        // 토큰에서 추출한 사용자 ID를 요청 객체에 추가
        req.user = decoded.user;

        // 다음 미들웨어로 이동
        next();
    } catch (err) {
        // 토큰이 유효하지 않은 경우 에러 반환
        res.status(401).json({ msg: 'Token is not valid' });
    }
};


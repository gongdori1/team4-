    // 토큰 추출: 요청 헤더에서 JWT(토큰)를 추출합니다.

    // 토큰 검증: JWT를 사용하여 토큰이 유효한지 확인합니다. 이 과정에서 비밀 키(JWT_SECRET)가 사용됩니다.

    // 사용자 정보 설정: 검증된 토큰에서 사용자 ID를 추출하고, 
    // 이를 req.user에 할당하여 이후 라우트 핸들러에서 접근할 수 있게 합니다.

    // 미들웨어 연결: 검증이 성공하면 next()를 호출하여 다음 미들웨어 또는 라우트 핸들러로 이동합니다. 
    // 실패하면 401(Unauthorized) 상태 코드를 반환합니다.


    // const jwt = require('jsonwebtoken');
    // const User = require('../models/User');
    // const config = require('config'); // config 모듈을 추가해야 합니다.


    // module.exports = function (req, res, next) {
    //     // 헤더에서 토큰 가져오기
    //     const authHeader = req.header('Authorization');

    //     if (!authHeader) {
    //         // Authorization 헤더가 없는 경우
    //         return res.status(401).json({ msg: 'No token, authorization denied' });
    //     }

    //     // Authorization 헤더에서 'Bearer ' 부분 제거하고 토큰 추출
    //     const token = authHeader.replace('Bearer ', '');

    //     try {
    //         // 토큰 검증
    //         const decoded = jwt.verify(token, config.get('jwtSecret'));

    //         // 토큰에서 추출한 사용자 ID를 요청 객체에 추가
    //         req.user = decoded.user;

    //         // 다음 미들웨어로 이동
    //         next();
    //     } catch (err) {
    //         // 토큰이 유효하지 않은 경우 에러 반환
    //         res.status(401).json({ msg: 'Token is not valid' });
    //     }
    // };

    const jwt = require('jsonwebtoken');
const config = require('config'); // config 모듈을 사용하여 JWT 비밀키를 가져옵니다.

module.exports = function (req, res, next) {
    // 헤더에서 토큰 가져오기
    const authHeader = req.header('Authorization');

    if (!authHeader) {
        // Authorization 헤더가 없는 경우
        return res.status(401).json({ msg: '토큰이 없습니다. 권한이 거부되었습니다.' });
    }

    // Authorization 헤더에서 'Bearer ' 부분 제거하고 토큰 추출
    const token = authHeader.replace('Bearer ', '');

    try {
        // 토큰 검증
        const decoded = jwt.verify(token, config.get('jwtSecret'));

        // 토큰에서 추출한 사용자 ID를 요청 객체에 추가
        req.user = decoded.user;

        // 다음 미들웨어로 이동
        next();
    } catch (err) {
        // 토큰이 유효하지 않은 경우 에러 반환
        res.status(401).json({ msg: '유효하지 않은 토큰입니다.' });
    }
};



// 기능: 클라이언트로부터 들어오는 요청 데이터를 검증합니다. 
// 예를 들어, 청원 작성 시 필요한 데이터가 모두 있는지 확인하거나, 특정 필드가 유효한지 검사할 수 있습니다.

// 사용 위치: 데이터 입력이 필요한 라우트에서 사용됩니다.


const { validationResult } = require('express-validator');

const validateRequest = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

module.exports = validateRequest;

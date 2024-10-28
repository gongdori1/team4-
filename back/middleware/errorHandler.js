// 기능: 애플리케이션 내에서 발생하는 오류를 처리합니다. 
// 오류가 발생하면 사용자에게 적절한 오류 메시지를 반환하고, 서버 로그에 기록할 수 있습니다.

// 사용 위치: 모든 라우트 핸들러의 마지막에 추가하여 사용됩니다.


const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ msg: 'Server Error', error: err.message });
};

module.exports = errorHandler;

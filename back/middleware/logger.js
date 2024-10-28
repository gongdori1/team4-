// 기능: 모든 요청에 대한 로그를 기록합니다. 
// 요청 URL, 요청 메서드, 시간 등을 콘솔에 출력하거나 파일에 기록할 수 있습니다.

// 사용 위치: 모든 요청에서 전역적으로 사용할 수 있습니다.


const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
  next();
};

module.exports = logger;

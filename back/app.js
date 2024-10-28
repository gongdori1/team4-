// require('dotenv').config();
// const express = require('express');
// const connectDb = require('./config/db');

// const app = express();
// const port = process.env.PORT || 3000;

// // DB 연결
// connectDb();

// // 미들웨어 설정
// app.use(express.json()); // JSON 요청 본문을 파싱합니다.
// app.use(express.urlencoded({ extended: true })); // URL-encoded 요청 본문을 파싱합니다.

// // 레이아웃과 뷰 엔진 설정
// app.set('view engine', 'ejs');
// app.set('views', './views');

// // 정적 파일 위치
// app.use(express.static('public'));

// // 라우트 설정
// app.use('/petitions', require('./routes/petition')); // 청원 관련 라우트
// app.use('/auth', require('./routes/auth')); // 인증 관련 라우트

// // 루트 경로 설정 (기본 페이지)
// app.get('/', (req, res) => {
//   res.render('main'); // 기본적으로 메인 페이지(main.ejs)를 렌더링합니다.
// });

// app.listen(port, () => {
//   console.log(`App listening on port ${port}`);
// });







// require('dotenv').config();
// const express = require('express');
// const connectDb = require('./config/db');
// const path = require('path');

// const app = express();
// const port = process.env.PORT || 3000;

// // DB 연결
// connectDb();

// // 미들웨어 설정
// app.use(express.json()); // JSON 요청 본문을 파싱합니다.
// app.use(express.urlencoded({ extended: true })); // URL-encoded 요청 본문을 파싱합니다.

// // EJS 설정
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

// // 정적 파일 위치
// app.use(express.static(path.join(__dirname, 'public')));

// // 라우트 설정
// app.use('/auth', require('./routes/auth')); // 인증 관련 라우트

// // 청원 목록 라우트 (예시 데이터 포함)
// app.get('/petitions', (req, res) => {
//     // 예제 데이터 (실제 데이터베이스에서 가져오는 부분으로 교체 필요)
//     const petitions = [
//         { title: '청원 제목 1' },
//         { title: '청원 제목 2' },
//         { title: '청원 제목 3' }
//     ];

//     res.render('main', { activePage: 'petitions', petitions: petitions });
// });

// // 루트 경로 설정 (기본 페이지)
// app.get('/', (req, res) => {
//     res.render('main'); // 기본적으로 메인 페이지(main.ejs)를 렌더링합니다.
// });

// app.listen(port, () => {
//     console.log(`App listening on port ${port}`);
// });




// require('dotenv').config();
// const express = require('express');
// const connectDb = require('./config/db');
// const path = require('path');

// const app = express();
// const port = process.env.PORT || 3000;

// // DB 연결
// connectDb();

// // 미들웨어 설정
// app.use(express.json()); // JSON 요청 본문을 파싱합니다.
// app.use(express.urlencoded({ extended: true })); // URL-encoded 요청 본문을 파싱합니다.

// // EJS 설정
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

// // 정적 파일 위치
// app.use(express.static(path.join(__dirname, 'public')));

// // 라우트 설정
// app.use('/auth', require('./routes/auth')); // 인증 관련 라우트

// // 청원 목록 라우트 (예시 데이터 포함)
// app.get('/petitions', (req, res) => {
//     // 예제 데이터 (실제 데이터베이스에서 가져오는 부분으로 교체 필요)
//     const petitions = [
//         { title: '청원 제목 1' },
//         { title: '청원 제목 2' },
//         { title: '청원 제목 3' }
//     ];

//     res.render('main', { activePage: 'petitions', petitions: petitions });
// });

// // 인증 관련 라우트
// app.get('/auth/login', (req, res) => {
//     res.render('login', { activePage: 'login' }); // 로그인 페이지 렌더링
// });

// // 루트 경로 설정 (기본 페이지)
// app.get('/', (req, res) => {
//     res.render('main', { activePage: 'home' }); // 기본적으로 메인 페이지(main.ejs)를 렌더링합니다.
// });

// app.listen(port, () => {
//     console.log(`App listening on port ${port}`);
// });





// require('dotenv').config();
// const express = require('express');
// const connectDb = require('./config/db');
// const path = require('path');

// const app = express();
// const port = process.env.PORT || 3000;

// // DB 연결
// connectDb();

// // 미들웨어 설정
// app.use(express.json()); // JSON 요청 본문을 파싱합니다.
// app.use(express.urlencoded({ extended: true })); // URL-encoded 요청 본문을 파싱합니다.

// // 레이아웃과 뷰 엔진 설정
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

// // 정적 파일 위치
// app.use(express.static('public'));

// // 라우트 설정
// app.use('/petitions', require('./routes/petition')); // 청원 관련 라우트
// app.use('/auth', require('./routes/auth')); // 인증 관련 라우트

// app.get('/signup', (req, res) => {

//    // 예시 데이터: 실제로는 데이터베이스에서 가져온 데이터나 빈 객체를 사용할 수 있음
//    const user = { username: '', password: '' };

//   res.render('signup'); // 'signup.ejs' 파일을 렌더링
// });

// app.post('/signup', (req, res) => {
//   // 회원가입 처리 로직
//   const { username, password } = req.body;
//   // 예를 들어, 데이터베이스에 저장하고 리다이렉트 할 수 있습니다.
//   console.log('회원가입 데이터:', { username, password });
//   res.redirect('/signup'); // 또는 성공 페이지로 리다이렉트
// });


// // 루트 경로 설정 (기본 페이지)
// app.get('/', (req, res) => {
//   // 기본적으로 petitions 변수를 빈 배열로 설정
//   res.render('main', { activePage: 'home', petitions: [] });
// });

// app.listen(port, () => {
//   console.log(`App listening on port ${port}`);
// });


//--------------------------------------------------------------------------------------


// require('dotenv').config();
// const express = require('express');
// const connectDb = require('./config/db');
// const path = require('path');
// const User = require('./models/User'); // User 모델 가져오기
// const bcrypt = require('bcrypt');

// const app = express();
// const port = process.env.PORT || 3000;

// // DB 연결
// connectDb();

// // 미들웨어 설정
// app.use(express.json()); // JSON 요청 본문을 파싱합니다.
// app.use(express.urlencoded({ extended: true })); // URL-encoded 요청 본문을 파싱합니다.

// // 레이아웃과 뷰 엔진 설정
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

// // 정적 파일 위치
// app.use(express.static('public'));

// // 라우트 설정
// app.use('/petitions', require('./routes/petition')); // 청원 관련 라우트
// app.use('/auth', require('./routes/auth')); // 인증 관련 라우트


// // 회원가입 페이지를 렌더링할 때 user 변수를 전달합니다.
// app.get('/signup', (req, res) => {
//    // 예시 데이터: 실제로는 데이터베이스에서 가져온 데이터나 빈 객체를 사용할 수 있음
//    const user = { username: '', password: '', passwordConfirm: '', name: '', birthdate: '', email: '' };

//    res.render('signup', { user }); // 'signup.ejs' 파일을 렌더링할 때 user 변수를 전달
// });


// // 로그인 페이지를 렌더링할 라우트 추가
// app.get('/login', (req, res) => {
//   res.render('login'); // 'login.ejs' 파일이 views 폴더에 있어야 합니다.
// });


// // 회원가입 폼에서 데이터를 처리하고 적절한 페이지로 리다이렉트
// app.post('/signup', async (req, res) => {
//   const { username, password, passwordConfirm, name, birthdate, email } = req.body;

//   // 새 사용자 생성
//   const newUser = new User({
//       username,
//       password,
//       name,
//       birthdate,
//       email    
//   });


//   app.post('/login', async (req, res) => {
//     const { username, password } = req.body;

//     try {
//         // 사용자 조회
//         const user = await User.findOne({ username });
//         if (!user) {
//             return res.status(400).json({ msg: '유효하지 않은 자격 증명입니다.' });
//         }
        
       
//         // 비밀번호 비교
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(400).json({ msg: '유효하지 않은 자격 증명입니다.' });
//         }

//         // 로그인 성공
//         res.status(200).json({ msg: '로그인 성공', user: user.username });
//     } catch (err) {
//         console.error('로그인 중 오류:', err);
//         res.status(500).send('서버 오류');
//     }
// });

//   try {
//       // 데이터베이스에 사용자 저장
//       await newUser.save();
//       console.log('회원가입 데이터:', newUser);
//       res.redirect('/login');
//   } catch (err) {
//       console.error('사용자 저장 중 오류:', err);
//       res.status(500).send('서버 오류');
//   }
// });


// // 루트 경로 설정 (기본 페이지)
// app.get('/', (req, res) => {
//   // 기본적으로 petitions 변수를 빈 배열로 설정
//   res.render('main', { activePage: 'home', petitions: [] });
// });

// app.listen(port, () => {
//   console.log(`App listening on port ${port}`);
// });


//--------------------------------------------------------------------------------------------


require('dotenv').config();
const express = require('express');
const connectDb = require('./config/db');
const path = require('path');
const User = require('./models/User'); // User 모델 가져오기
const bcrypt = require('bcryptjs'); // bcryptjs를 사용하여 비밀번호 해싱

const app = express();
const port = process.env.PORT || 3000;

// DB 연결
connectDb();

// 미들웨어 설정
app.use(express.json()); // JSON 요청 본문을 파싱합니다.
app.use(express.urlencoded({ extended: true })); // URL-encoded 요청 본문을 파싱합니다.

// 레이아웃과 뷰 엔진 설정
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// 정적 파일 위치
app.use(express.static('public'));

// 라우트 설정
app.use('/petitions', require('./routes/petition')); // 청원 관련 라우트
app.use('/auth', require('./routes/auth')); // 인증 관련 라우트

// 회원가입 페이지를 렌더링할 때 user 변수를 전달합니다.
app.get('/signup', (req, res) => {
   const user = { username: '', password: '', passwordConfirm: '', name: '', birthdate: '', email: '' };
   res.render('signup', { user });
});

// 로그인 페이지를 렌더링할 라우트 추가
app.get('/login', (req, res) => {
  res.render('login');
});

// 회원가입 폼에서 데이터를 처리하고 적절한 페이지로 리다이렉트
app.post('/signup', async (req, res) => {
  const { username, password, passwordConfirm, name, birthdate, email } = req.body;

  // 비밀번호 일치 여부 확인
  if (password !== passwordConfirm) {
    return res.status(400).json({ msg: '비밀번호가 일치하지 않습니다.' });
  }

  // 새 사용자 생성
  const newUser = new User({
    username,
    password,
    name,
    birthdate,
    email    
  });

  try {
    // 비밀번호 해싱
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(newUser.password, salt);
    
    // 데이터베이스에 사용자 저장
    await newUser.save();
    console.log('회원가입 데이터:', newUser);
    res.redirect('/login');
  } catch (err) {
    console.error('사용자 저장 중 오류:', err);
    res.status(500).send('서버 오류');
  }
});

// 로그인 처리 라우트
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // 사용자 조회
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ msg: '유효하지 않은 자격 증명입니다.' });
    }
    
    // 비밀번호 비교
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: '유효하지 않은 자격 증명입니다.' });
    }

    // 로그인 성공
    res.status(200).json({ msg: '로그인 성공', user: user.username });
  } catch (err) {
    console.error('로그인 중 오류:', err);
    res.status(500).send('서버 오류');
  }
});

// 루트 경로 설정 (기본 페이지)
app.get('/', (req, res) => {
  res.render('main', { activePage: 'home', petitions: [] });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});


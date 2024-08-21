// // User 스키마 필드 설명:
// // name: 사용자의 이름.
// // email: 사용자의 이메일 주소. 유니크하게 설정하여 중복을 방지합니다.
// // password: 사용자의 비밀번호. 비밀번호는 해싱되어 저장됩니다.


// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// const bcrypt = require('bcryptjs');

// // 사용자 스키마 정의
// const UserSchema = new Schema({
//     name: {
//         type: String,
//         required: true,
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//     },
//     password: {
//         type: String,
//         required: true,
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now,
//     },
// });

// // 비밀번호 해싱
// UserSchema.pre('save', async function (next) {
//     if (!this.isModified('password')) {
//         return next();
//     }
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
//     next();
// });

// // 사용자 모델 생성
// const User = mongoose.model('User', UserSchema);

// module.exports = User;


// -----------------------------------------------------------------------------



const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

// 사용자 스키마 정의
const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,  // 사용자 이름이 중복되지 않도록 설정
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+\@.+\..+/, 'Invalid email format'] // 이메일 포맷 검증
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// 비밀번호 해싱
UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// 비밀번호 확인 메서드 추가
UserSchema.methods.comparePassword = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

// 사용자 모델 생성
const User = mongoose.model('User', UserSchema);

module.exports = User;




// -----------------------------------------------------------------------------




// MongoDB 연결 설정

const mongoose = require('mongoose');
const config = require('config');
const dbURI = config.get('dbURI');

const connectDB = async () => {
    try {
        await mongoose.connect(dbURI);
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1); // 실패 시 프로세스 종료
    }
};

module.exports = connectDB;


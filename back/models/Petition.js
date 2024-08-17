const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 청원 스키마 정의
const PetitionSchema = new Schema({
    title: { // 청원의 제목
        type: String,
        required: true,
    },
    description: { // 청원의 내용
        type: String,
        required: true,
    },
    createdBy: { // 청원을 작성한 사용자. 사용자와의 관계를 표현하기 위해 'User' 모델을 참조합니다.
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    signatures: [{ // 청원에 동의한 사용자들의 ID 목록
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],
    createdAt: { // 청원이 작성된 날짜와 시간(현재시간이 기본값으로 사용됨)
        type: Date,
        default: Date.now,
    },
});

// 청원 모델 생성
const Petition = mongoose.model('Petition', PetitionSchema);

module.exports = Petition;

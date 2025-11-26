import { useVirtualId } from "../db/database.mjs";
import mongoose from "mongoose";

// require = not null
// url: String > null이어도 될 때 이렇게 작성해도 됨
// versionKey: Mongoose가 문서를 저장할 때 자동으로 추가하는 _v 라는 필드를 설정
const userSchema = new mongoose.Schema(
    {
        userid: { type: String, require: true },
        name: { type: String, require: true },
        email: { type: String, require: true },
        password: { type: String, require: true },
        url: String,
    },
    { vesionKey: false }
);

useVirtualId(userSchema);
// User = 컬렉션 이름
// 자동으로 복수(s)를 만들기 때문에 컬렉션 이름은 단수로 작성해야함
const User = mongoose.model("User", userSchema);

// 회원 가입
export async function createUser(user) {
    return new User(user).save().then((data) => data.id);
}

// 회원정보 userid 중복성 체크
export async function findByUserid(userid) {
    return User.findOne({ userid });
}

// 회원정보 id 검색
export async function findById(id) {
    return User.findById(id);
}

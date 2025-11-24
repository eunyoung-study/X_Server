// 회원 가입 정보를 DB를 통하여 가져옴
import { db } from "../db/database.mjs";

/*
 * 직접 작성한 코드 
// 회원가입 함수 
export async function create(userid, password, name, email) {
  const user = {
    id: Date.now().toString(),
    userid,
    password,
    name,
    email,
  };

  users = [user, ...users];
  return user;
}

// 로그인 함수
export async function login(userid, pw) {
  const user = users.filter((user) => user.userid === userid)[0];

  if (user && user.password === pw) {
    return true;
  } else false;
}

*/

// 회원 가입
export async function createUser(user) {
    const { userid, password, name, email, url } = user;
    return db
        .execute(
            "insert into users (userid, password, name, email, url) values (?, ?, ?, ?, ?)",
            [userid, password, name, email, url]
        )
        .then((result) => result[0].insertId); // insertId : 방금 추가된 데이터의 자동 번호
}

// // 로그인
// export async function login(userid, password) {
//   const user = users.find(
//     (user) => user.userid === userid && user.password === password
//   );
//   return user;
// }

// 회원정보 userid 중복성 체크
export async function findByUserid(userid) {
    return db
        .execute("select idx, password from users where userid=?", [userid])
        .then((result) => {
            console.log(result);
            return result[0][0];
        });
}

// 회원정보 id 검색
export async function findById(idx) {
    return db
        .execute("select idx, userid from users where idx=?", [idx])
        .then((result) => result[0][0]);
}

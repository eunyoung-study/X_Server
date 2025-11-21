import * as authRepository from "../data/auth.mjs";

/*
* 직접 작성한 코드 
// 회원 가입하는 함수
export async function singup(req, res, next) {
  const { userid, password, name, email } = req.body;
  const user = await authRepository.create(userid, password, name, email);
  res.status(201).json(user);
}

// 로그인 하는 함수
export async function login(req, res, next) {
  const { userid, password } = req.body;
  const login = await authRepository.login(userid, password);
  if (login) {
    res.status(201).json({ message: "로그인 되었습니다." });
  } else {
    res.status(404).json({ message: `${userid}의 회원 정보가 없습니다` });
  }
}
*/

// 회원 가입하는 함수
export async function singup(req, res, next) {
  const { userid, password, name, email } = req.body;
  const user = await authRepository.createUser(userid, password, name, email);
  if (user) {
    res.status(201).json(user);
  }
}

// 로그인 하는 함수
export async function login(req, res, next) {
  const { userid, password } = req.body;
  const user = await authRepository.login(userid, password);
  if (user) {
    res.status(200).json({ message: `${userid}님 로그인 완료!` });
  } else {
    res
      .status(404)
      .json({ message: `${userid}님 아이디 또는 비밀번호를 확인하세요` });
  }
}

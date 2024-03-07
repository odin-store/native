import { useState } from "react";
import "../../styles/login/login.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(`${email},${password}`);

  return (
    <div className="login-background">
      <div className="login">
        <div className="login-title">
          <img src="/brand/logo.png" />
        </div>
        <form className="login-form">
          <input
            placeholder="이메일을 입력해 주세요"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            placeholder="비밀번호를 입력해 주세요"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button disabled>로그인</button>
        </form>
      </div>
    </div>
  );
}

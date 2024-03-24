import { useState } from "react";
import "../../styles/login/login.scss";
import { OdinAPI } from "../../util/api/odin-api";
import { useDispatch } from "react-redux";
import {
  setLogin,
  setProfile,
  setUsername,
} from "../../util/redux/reducer/user.reducer";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const api = new OdinAPI();
  const dispatch = useDispatch();

  async function loginHandler() {
    const res = await api.login(email, password);

    const user = res.data;

    if (res.status != 200) {
    }
    dispatch(setUsername(user.username));
    dispatch(setProfile(user.profile));
    dispatch(setLogin(true));
  }

  return (
    <div className="login-background">
      <div className="login">
        <div className="login-title">
          <img src="/brand/logo.png" />
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="login-form"
        >
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
          <button onClick={loginHandler}>로그인</button>
        </form>
      </div>
    </div>
  );
}

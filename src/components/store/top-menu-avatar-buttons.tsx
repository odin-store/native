import { useDispatch } from "react-redux";
import { OdinAPI } from "../../util/api/odin-api";
import { setUser } from "../../util/redux/reducer/user.reducer";

export default function TopMenuAvatarButtons() {
  const api = new OdinAPI();
  const dispatch = useDispatch();
  async function logout() {
    await api.logout();
    dispatch(
      setUser({
        isLoggedIn: false,
        username: "",
        profile: "",
      })
    );
    window.location.reload();
  }
  return (
    <>
      <button>Avatar</button>
      <button onClick={logout} style={{ color: "#fc4747FF" }}>
        로그아웃
      </button>
      <div style={{ height: "5px" }}></div>
    </>
  );
}

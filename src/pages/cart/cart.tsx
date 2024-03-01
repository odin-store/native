import { invoke } from "@tauri-apps/api";
import { useEffect } from "react";

export default function Cart() {
  useEffect(() => {
    invoke("set_activity", {
      details: "장바구니 탐색 중",
      state: "In Store",
      image: "browsing",
      imageDetails: "In Odin Store",
    });
  }, []);

  return (
    <div className="cart">
      <h1>장바구니</h1>
      <table>
        <thead>
          <tr>
            <td colSpan={2}>제품</td>
            <td>가격</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>테스트 1</td>
            <td>테스트 2</td>
            <td>테스트 3</td>
          </tr>
          <tr>
            <td>테스트 1</td>
            <td>테스트 2</td>
            <td>테스트 3</td>
          </tr>
          <tr>
            <td>테스트 1</td>
            <td>테스트 2</td>
            <td>테스트 3</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

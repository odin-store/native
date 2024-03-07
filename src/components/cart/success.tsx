import { useEffect } from "react";
import JSConfetti from "js-confetti";

import "../../styles/cart/successed.scss";

export default function PurchaseSuccess() {
  useEffect(() => {
    const jsConfetti = new JSConfetti();

    jsConfetti.addConfetti({
      confettiColors: [
        "#6cff74",
        "#38caff",
        "#ff7096",
        "#ffef85",
        "#2279e5",
        "#9a3dfa",
      ],
    });
  }, []);

  return (
    <div className="cart-successed">
      <h2>구매를 완료했어요!</h2>
      <p>라이브러리로 돌아가, 게임을 플래이해 보세요!</p>
      <button
        onClick={() => {
          window.location.href = "/library";
        }}
      >
        라이브러리로 돌아가기
      </button>
    </div>
  );
}

import { useEffect } from "react";
import "../../styles/loading/loading.scss";

export default function LoadingScreen(props: {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const loadingText = [
    "X를 눌러 Joy를 표해보세요.",
    "오딘은 100% 오픈 소스 플랫폼이에요.",
    "프로젝트 오딘은 인디 게임 개발자들을 위해 개발되었어요.",
    "이 프로젝트는 청강대학교에 포트폴리오로서 제출될 거에요.",
  ];
  const setLoading = props.setLoading;
  const loadingIndex = Math.floor(Math.random() * loadingText.length);

  useEffect(() => {
    document.addEventListener("keypress", (e) => {
      if (loadingIndex === 0 && e.key === "x") {
        window.open("https://damie.works", "_blank");
      }
    });
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });

  return (
    <div className="loading">
      <video src="/ui/loading/loading.mp4" autoPlay loop />
      <div className="loading-texts">
        <p className="loading-did-you-know">알고 계셨나요?</p>
        <p>{loadingText[loadingIndex]}</p>
      </div>
    </div>
  );
}

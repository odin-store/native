import "../../styles/loading/loading.scss";

export default function LoadingScreen() {
  return (
    <div className="loading">
      <video src="/ui/loading/loading.mp4" autoPlay loop />
    </div>
  );
}

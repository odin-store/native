export default function ProductRemote() {
  return (
    <div className="product-remote-container">
      <div className="product-remote">
        <div className="product-logo">
          <img src="/debug/minecraft.png" />
        </div>
        <div className="product-remote-info">
          <p>
            개발 : <a href="/developer/1">Damie Lab</a>
          </p>
          <p>
            배급 : <a href="/developer/1">Damie Lab</a>
          </p>
          <p>출시 : 2024년 02월 22일</p>
        </div>
        <div className="product-remote-age-alert">
          <div>
            <img src="/ui/age-alert/kr/rating_18.png" />
          </div>
          <div className="product-remote-alert">
            <p>청소년이용불가</p>
            <div className="product-remote-alert-items">
              <p>폭력성</p>
              <p>약물</p>
              <p>선정성</p>
            </div>
          </div>
        </div>
        <div className="product-remote-buttons">
          <button>구매하기</button>
          <button>카트에 담기</button>
        </div>
      </div>
    </div>
  );
}

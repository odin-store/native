export default function LibraryItem() {
  return (
    <div className="library-items">
      <div className="library-items-thumbnail">
        <img src="https://mspoweruser.com/wp-content/uploads/2023/09/red-dead-redemption-3.png" />
        <div className="library-items-thumbnail-desc">
          <button>플래이</button>
          <a href="/product/1">상점 확인하기</a>
        </div>
      </div>
      <button className="library-items-desc">
        <h4>Red Dead Redemption II</h4>
        <div>
          <p>플래이 가능</p>
        </div>
      </button>
    </div>
  );
}

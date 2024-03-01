export default function LibraryItem() {
  return (
    <div className="library-items">
      <div className="library-items-thumbnail">
        <img src="https://mspoweruser.com/wp-content/uploads/2023/09/red-dead-redemption-3.png" />
        <button className="library-items-thumbnail-desc">
          <h4>플래이</h4>
        </button>
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

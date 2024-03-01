import { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";

export default function UserEvaluation() {
  const [rating, setRating] = useState(4.9);
  const [evaluate, setEval] = useState("");

  useEffect(() => {
    if (rating > 4.5) {
      setEval("압도적으로 긍정적");
    } else if (rating > 3) {
      setEval("긍정적");
    } else if (rating > 2) {
      setEval("중립");
    } else if (rating > 0.5) {
      setEval("부정적");
    } else {
      setEval("압도적으로 부정적");
    }
  }, [rating]);

  const handleRating = (rate: number) => {
    setRating(rate);
    console.log(rate);
  };

  const onPointerEnter = () => {
    return;
  };
  const onPointerLeave = () => {
    return;
  };

  return (
    <div className="product-user-evaluation">
      <div className="product-user-evaluation-title">
        <div>
          <h3>Odin 사용자 평가</h3>
          <p>Project Odin이 제공하는 이용자 평가에요.</p>
        </div>
        <p className="product-user-evaluation-count">4,421개의 평가</p>
      </div>
      <div className="product-user-rating">
        <div className="product-rate">
          <Rating
            className="product-rate-star"
            allowFraction={true}
            onClick={handleRating}
            onPointerEnter={onPointerEnter}
            onPointerLeave={onPointerLeave}
            initialValue={rating}
            fillColor="white"
            emptyColor="rgba(255, 255, 255, 0.055)"
            size={35}
          />
          <div className="product-rate-info">
            <div className="product-rate-info-triangle"></div>
            <h4>{rating} / 5</h4>
            <p>{evaluate}</p>
          </div>
        </div>
        <div className="product-rate-desc"></div>
      </div>
      <div className="product-user-evaluation-items-container">
        <div className="product-user-evaluation-items">
          <div>
            <p>👍</p>
          </div>
          <div className="product-user-evaluation-text">
            <p>이 게임을</p>
            <h4>추천합니다</h4>
          </div>
        </div>
        <div className="product-user-evaluation-items">
          <div>
            <p>🛡️</p>
          </div>
          <div className="product-user-evaluation-text">
            <p>이 게임의 전투는</p>
            <h4>어렵습니다</h4>
          </div>
        </div>
        <div className="product-user-evaluation-items">
          <div>
            <p>👻</p>
          </div>
          <div className="product-user-evaluation-text">
            <p>이 게임의 분위기는</p>
            <h4>어두운 편입니다</h4>
          </div>
        </div>
        <div className="product-user-evaluation-items">
          <div>
            <p>🎨</p>
          </div>
          <div className="product-user-evaluation-text">
            <p>이 게임의 비주얼은</p>
            <h4>좋은 편입니다</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

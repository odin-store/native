import { useDispatch, useSelector } from "react-redux";
import {
  changeVisible,
  selectModal,
} from "../../util/redux/reducer/modal.reducer";
import { useEffect } from "react";

export default function Modal() {
  const modal = useSelector(selectModal);
  const dispatch = useDispatch();

  useEffect(() => {
    const background = document.getElementById("modal-background");
    background?.addEventListener("click", () => {
      dispatch(changeVisible());
    });
  }, [modal]);

  if (!modal.isVisiable) {
    return <></>;
  }

  return (
    <div className="modal-background">
      <div className="modal-body">
        <h4 className="modal-title">{modal.title}</h4>
        <div className="modal-desc">
          <p>{modal.desc}</p>
        </div>
        <div className="modal-buttons">
          {modal.button?.map((a) => {
            return a;
          })}
          <button
            className="modal-button-dangerous"
            onClick={() => {
              dispatch(changeVisible());
            }}
          >
            닫기
          </button>
        </div>
      </div>
      <div id="modal-background" className="modal-background-box"></div>
    </div>
  );
}

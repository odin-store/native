import * as PortOne from "@portone/browser-sdk/v2";
import { useDispatch } from "react-redux";
import {
  changeDesc,
  changeTitle,
  changeVisible,
} from "../../util/redux/reducer/modal.reducer";

export default function Purchase() {
  const dispatch = useDispatch();

  const purcahse = async () => {
    const response = await PortOne.requestPayment({
      storeId: import.meta.env.VITE_APP_PORTONE_STORE_ID,
      channelKey: import.meta.env.VITE_APP_PORTONE_CHANNEL_KEY,
      paymentId: `${
        import.meta.env.VITE_APP_PORTONE_PAYMENT_ID_PREFIX
      }-${crypto.randomUUID()}`,
      pgProvider: import.meta.env.VITE_APP_PORTONE_PGPROVIDER,
      orderName: "마인크래프트 외 1",
      totalAmount: 50000,
      currency: import.meta.env.VITE_APP_PORTONE_CURRENCY,
      payMethod: "CARD",
    });
    if (response?.code === "FAILURE_TYPE_PG") {
      dispatch(changeTitle("결제가 취소되었습니다."));
      dispatch(changeDesc("사용자가 결제를 취소하였습니다."));
      dispatch(changeVisible());
    } else if (!response?.code) {
      console.log("successed!");
      window.location.href = "/cart/successed";
    } else {
      dispatch(changeTitle("문제가 발생하였습니다."));
      dispatch(changeDesc(`오류 코드 : ${response.code}`));
      dispatch(changeVisible());
    }
    console.log(response);
  };

  return <button onClick={purcahse}>결제하기</button>;
}

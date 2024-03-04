import { invoke } from "@tauri-apps/api";
import { useEffect } from "react";

import "../../styles/cart/cart.scss";
import Purchase from "../../components/cart/purchase";
import CartItem from "../../components/cart/item";

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
      <div className="cart-title">
        <h1>장바구니</h1>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
          Refresh
        </button>
      </div>
      <div className="cart-body">
        <div className="cart-items-container">
          <CartItem
            product={{
              title: "Minecraft : Java Edition",
              developer: "Mojang Studios",
              developerId: "1",
              platforms: ["windows", "macos"],
              price: 22800,
              thumbnail: "/debug/games/minecraft.png",
            }}
          />
          <CartItem
            product={{
              title: "Red Dead Redemption II",
              developer: "Rockstar Studios",
              developerId: "2",
              platforms: ["windows"],
              price: 42000,
              thumbnail:
                "https://mspoweruser.com/wp-content/uploads/2023/09/red-dead-redemption-3.png",
            }}
          />
        </div>
        <div className="cart-parchase">
          <div className="cart-price-total">
            <h2>예상 합계</h2>
            <p>₩ {(64800).toLocaleString()}</p>
          </div>
          <p>
            세금(VAT)이 미포함된 가격으로, 각 나라와 결제사에 따라 변경될 수
            있습니다.
          </p>
          <p>이는 결제 시 구매 비용과 함께 정산됩니다.</p>
          <div className="cart-parchase-buttons">
            <Purchase />
          </div>
        </div>
      </div>
    </div>
  );
}

export interface CartProduct {
  title: string;
  developer: string;
  developerId: string;
  thumbnail: string;
  price: number;
  platforms: string[];
}

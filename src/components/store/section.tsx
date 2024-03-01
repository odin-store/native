import StoreProduct from "./product";

export default function StoreSection() {
  return (
    <div className="store-product-section">
      <div className="store-product-title">
        <h1>지금 할인 중인 상품</h1>
        <button>전체 보기</button>
      </div>
      <div className="store-product-items-container">
        <div className="store-product-item">
          <StoreProduct
            id={2}
            title="Read Dead Redemption II"
            price="₩42,000"
            thumbnail="https://mspoweruser.com/wp-content/uploads/2023/09/red-dead-redemption-3.png"
            badge={[{ color: "rgb(201, 60, 60)", title: "-50%" }]}
          />
          <StoreProduct
            id={3}
            title="Stardew Valley"
            price="₩17,000"
            thumbnail="https://www.cnet.com/a/img/resize/7e97e2d08cfa3fe38721b144b1b4b6df7a8b3622/hub/2023/06/27/d99fe5c1-0f47-4319-82fb-db7a43daa815/stardew-valley-key-art-1200x675.png?auto=webp&fit=crop&height=1200&width=1200"
            badge={[{ color: "rgb(201, 60, 60)", title: "-15%" }]}
          />
          <StoreProduct
            id={4}
            title="Battlefield V - Limited Edition"
            price="₩75,000"
            thumbnail="https://image.api.playstation.com/cdn/UP0006/CUSA08724_00/460MCN9gOmcYocVZXy93mNEc7jTNna2Ey9LbaDbrKxh1vkN0afGHicBnF9wwsmvh.png"
            badge={[{ color: "rgb(201, 60, 60)", title: "-15%" }]}
          />
        </div>
      </div>
    </div>
  );
}

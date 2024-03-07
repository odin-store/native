import { CartProduct } from "../../pages/cart/cart";

export default function CartItem(props: { product: CartProduct }) {
  const product = props.product;

  return (
    <div className="cart-item">
      <div className="cart-thumbnail">
        <img src={product.thumbnail} />
      </div>
      <div className="cart-info">
        <a className="cart-info-title" href="/product/1">
          <h3>{product.title}</h3>
          <p>삭제</p>
        </a>
        <a href={"/developer/1" + product.developerId}>{product.developer}</a>
        <p>₩ {product.price.toLocaleString()}</p>
        <div className="cart-platforms">
          {product.platforms.map((platform, i) => {
            if (platform === "windows") {
              return <img key={i} src="/ui/platforms/windows.png" />;
            }
            if (platform === "macos") {
              return <img key={i} src="/ui/platforms/macos.png" />;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default function StoreProduct(props: {
  id: number;
  title: string;
  thumbnail: string;
  price: string;
  badge: {
    title: string;
    color: string;
  }[];
}) {
  return (
    <a href={"/product/" + props.id.toString()} className="store-product">
      <div className="store-product-thumbnail">
        <img src={props.thumbnail} />
      </div>
      <div className="store-product-details">
        <p className="store-product-status">구매 가능</p>
        <h4>{props.title}</h4>
        <div className="store-product-price">
          {props.badge.map((badge, i) => (
            <p
              className="badges"
              style={{
                backgroundColor: badge.color,
              }}
              key={i}
            >
              {badge.title}
            </p>
          ))}
          <p>{props.price}</p>
        </div>
      </div>
    </a>
  );
}

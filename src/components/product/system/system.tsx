export default function ProductSystem(props: {
  bit: string | null;
  min: {
    os: string | null;
    cpu: string | null;
    gpu: string | null;
    ram: string | null;
    storage: string | null;
  };
  recommend: {
    os: string | null;
    cpu: string | null;
    gpu: string | null;
    ram: string | null;
    storage: string | null;
  } | null;
}) {
  return (
    <div className="product-system">
      <div className="product-system-info-container">
        <div className="product-system-info">
          <h4>최소 사양</h4>
          <div>
            {Object.entries(props.min).map((info, i) => {
              if (!info[1]) {
                return;
              }
              return (
                <div className="product-system-items" key={i}>
                  <p>{info[0]}</p>
                  <p>{info[1]}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="product-system-info">
          <h4>권장 사양</h4>
          {props.recommend !== null ? (
            <div>
              {Object.entries(props.recommend).map((info, i) => {
                if (!info[1]) {
                  return;
                }
                return (
                  <div className="product-system-items" key={i}>
                    <p>{info[0]}</p>
                    <p>{info[1]}</p>
                  </div>
                );
              })}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

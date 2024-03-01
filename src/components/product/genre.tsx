export interface Genre {
  id: number;
  title: string;
}

export interface Playtype {
  id: number;
  title: string;
}

export default function ProductGenre(props: {
  genre: Genre[];
  playType: Playtype[];
}) {
  return (
    <div className="product-genre">
      <div className="product-genre-inner">
        <h3>장르</h3>
        <div className="product-genres">
          {props.genre.map((a, i) => {
            if (i === props.genre.length - 1) {
              return <p key={i}>{a.title}</p>;
            } else {
              return <p key={i}>{a.title + ","}</p>;
            }
          })}
        </div>
      </div>
      <div className="product-genre-inner">
        <h3>플래이 방식</h3>
        <div className="product-genres">
          {props.playType.map((a, i) => {
            if (i === props.playType.length - 1) {
              return <p key={i}>{a.title}</p>;
            } else {
              return <p key={i}>{a.title + ","}</p>;
            }
          })}
        </div>
      </div>
    </div>
  );
}

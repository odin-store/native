import { useParams } from "react-router-dom";
import TopMenu from "../../components/store/top-menu";
import { useEffect, useState } from "react";
import ProductRemote from "../../components/product/remote";
import ProductContents from "../../components/product/contents";
import "../../styles/store/product.scss";
import "../../styles/store/store-theme.scss";
import ProductGenre from "../../components/product/genre";
import ProductTabs from "../../components/product/tabs";
import { invoke } from "@tauri-apps/api";

export default function Products() {
  const { id } = useParams();
  const [product, setProduct] = useState({
    title: "",
    desc: "",
    contents: "",
    background: "",
  });

  useEffect(() => {
    setProduct({
      title: "Minecraft",
      desc: "게임, 새로운 업데이트,\n그리고 새로운 방식의 플레이를 즐길 수 있는\n가장 큰 게임 커뮤니티에 가입하세요!",
      contents: `gd`,
      background: "/debug/minecraft-trailer.mp4",
    });
  }, []);

  useEffect(() => {
    invoke("set_activity", {
      details: `${product.title} 검색 중`,
      state: "In Store",
      image: "browsing",
      imageDetails: "In Odin Store",
    });
  }, [product]);

  return (
    <div>
      <TopMenu />
      <div className="product-background">
        <div className="product-background-cover"></div>
        <video src={product.background} autoPlay muted loop />
      </div>
      <div className="product-info-container">
        <div className="product-info">
          <div className="product-title">
            <h1>
              {product.title} : {id}
            </h1>
          </div>
          <div className="product-desc">
            {product.desc.split("\n").map((line, i) => {
              return (
                <p key={i}>
                  {line}
                  <br />
                </p>
              );
            })}
          </div>
          <ProductGenre
            genre={[
              {
                id: 1,
                title: "샌드박스",
              },
              {
                id: 2,
                title: "액션 어드벤쳐",
              },
              {
                id: 3,
                title: "FPS",
              },
            ]}
            playType={[
              {
                id: 1,
                title: "1인칭",
              },
              {
                id: 2,
                title: "싱글플래이",
              },
            ]}
          />
          <ProductContents />
        </div>
        <ProductRemote />
      </div>
      <ProductTabs />
    </div>
  );
}

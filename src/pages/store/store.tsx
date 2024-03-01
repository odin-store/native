import TopMenu from "../../components/store/top-menu";
import StoreBanner from "../../components/store/banner";
import StoreSection from "../../components/store/section";

import "swiper/css";
import "../../styles/store/store.scss";
import "../../styles/store/store-theme.scss";
import { invoke } from "@tauri-apps/api";
import { useEffect } from "react";

export default function StorePage() {
  useEffect(() => {
    invoke("set_activity", {
      details: "메인 페이지 탐색 중",
      state: "In Store",
      image: "browsing",
      imageDetails: "In Odin Store",
    });
  }, []);

  return (
    <div className="main">
      <TopMenu />
      <StoreBanner />
      <StoreSection />
      <StoreSection />
    </div>
  );
}

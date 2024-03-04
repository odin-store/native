import { useEffect } from "react";

export default function TopMenu() {
  useEffect(() => {
    const menu = document.getElementById("store-top-menu");
    const body = document.querySelector("main");
    let scroll = 0;

    body?.addEventListener("scroll", () => {
      const currentScroll = body.scrollTop;
      if (currentScroll > 0) {
        menu?.classList?.add("menu-started");
        if (currentScroll < scroll) {
          menu?.classList?.add("menu-activated");
        } else {
          menu?.classList.remove("menu-activated");
        }
        scroll = currentScroll;
      } else {
        menu?.classList?.remove("menu-started");
        menu?.classList?.remove("menu-activated");
      }
    });
  }, []);

  return (
    <>
      <div id="store-top-menu" className="top-menu">
        <div className="top-menu-front">
          <div className="store-search">
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
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
              z
            </svg>
            <input placeholder="검색어를 입력하세요" />
          </div>
        </div>
        <div className="top-menu-back">
          <div className="top-menu-items">
            <a href="/cart">장바구니</a>
          </div>
          <a className="top-menu-avatar">
            <img src="/ui/profile/default.png" />
          </a>
        </div>
      </div>
    </>
  );
}

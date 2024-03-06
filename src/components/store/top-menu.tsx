import { useEffect, useState } from "react";

export default function TopMenu() {
  const [isMenuOpened, setMenuOpen] = useState(false);

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

    document.addEventListener("click", () => {
      console.log(isMenuOpened);
      if (isMenuOpened) {
        setMenuOpen(false);
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
          <a
            className="top-menu-avatar"
            onClick={() => {
              setMenuOpen(!isMenuOpened);
            }}
          >
            <img src="/ui/profile/default.png" />
          </a>
        </div>
        {isMenuOpened ? (
          <div className="top-menu-avatar-buttons">
            <div className="top-menu-avatar-preview">
              <img src="/ui/profile/default.png" />
              <p>Damie</p>
              <a>
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
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
              </a>
            </div>
            <button>Avatar</button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

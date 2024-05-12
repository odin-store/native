import { useEffect } from "react";
import LibraryItem from "../../components/library/items";
import "../../styles/library/library.scss";
import { invoke } from "@tauri-apps/api";

export default function Library() {
  useEffect(() => {
    invoke("set_activity", {
      details: "라이브러리 탐색 중",
      state: `Default State`,
      image: "browsing",
      imageDetails: "In Odin Store",
    });
  }, []);

  return (
    <div className="library-body">
      <div className="library-title">
        <h1>Library</h1>
        <div className="library-title-buttons">
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
            <p>세로고침</p>
          </button>
        </div>
      </div>
      <div className="library-items-container">
        <LibraryItem />
        <LibraryItem />
        <LibraryItem />
        <LibraryItem />
      </div>
    </div>
  );
}

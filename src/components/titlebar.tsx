import { appWindow } from "@tauri-apps/api/window";
import { useEffect } from "react";

export default function Titlebar() {
  useEffect(() => {
    document
      .getElementById("titlebar-minimize")
      ?.addEventListener("click", () => {
        appWindow.minimize();
      });
    document
      .getElementById("titlebar-maximize")
      ?.addEventListener("click", () => {
        appWindow.toggleMaximize();
      });
    document.getElementById("titlebar-close")?.addEventListener("click", () => {
      appWindow.close();
    });
  }, []);

  return (
    <div data-tauri-drag-region className="titlebar" id="titlebar">
      <div className="titlebar-title">
        <div data-tauri-drag-region className="title">
          <p data-tauri-drag-region>Project Odin Alpha 1.0.0</p>
        </div>
      </div>
      <div className="titlebar-buttons">
        <div className="titlebar-button" id="titlebar-minimize">
          <img src="/ui/titlebar/minimize.png" alt="minimize" />
        </div>
        <div className="titlebar-button" id="titlebar-maximize">
          <img src="/ui/titlebar/maximize.png" alt="maximize" />
        </div>
        <div className="titlebar-button titlebar-close" id="titlebar-close">
          <img src="/ui/titlebar/close.png" alt="close" />
        </div>
      </div>
    </div>
  );
}

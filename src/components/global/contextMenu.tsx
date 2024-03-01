import { useEffect } from "react";

export default function ContextMenu() {
  useEffect(() => {
    document.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });
  }, []);

  return <></>;
}

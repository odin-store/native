import React from "react";
import Browser from "./browser";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout">
      <div className="left">
        <Browser />
      </div>
      <main>{children}</main>
    </div>
  );
}

export default React.memo(Layout);

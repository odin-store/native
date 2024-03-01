import { useState } from "react";
import Evaluation from "./evaluation/evaluation";
import ProductLanguages from "./languages/languages";
import ProductSystem from "./system/system";
import Related from "./relates/relate";

export default function ProductTabs() {
  const [tab, setTab] = useState("system");
  return (
    <div className="product-tab">
      <div className="product-tab-changer">
        <button
          className={tab === "system" ? "active" : ""}
          onClick={() => {
            setTab("system");
          }}
        >
          요구사항
        </button>
        <button
          className={tab === "languages" ? "active" : ""}
          onClick={() => {
            setTab("languages");
          }}
        >
          지원 언어
        </button>
        <button
          className={tab === "evaluation" ? "active" : ""}
          onClick={() => {
            setTab("evaluation");
          }}
        >
          평가
        </button>
        <button
          className={tab === "related" ? "active" : ""}
          onClick={() => {
            setTab("related");
          }}
        >
          관련된 게임
        </button>
      </div>
      <div className="product-tab-content">
        {tab === "system" ? (
          <ProductSystem
            bit={"64-bit"}
            min={{
              os: "Windows® 10",
              cpu: "Intel i9-19000k / AMD Ryzen 3 2300X",
              gpu: "Geforce RTX 3090",
              ram: "32 GB RAM",
              storage: "60GB",
            }}
            recommend={null}
          />
        ) : tab === "languages" ? (
          <ProductLanguages
            languages={[
              { name: "독일어", text: true, audio: false },
              { name: "스페인어", text: true, audio: false },
              { name: "영어", text: true, audio: true },
              { name: "일본어", text: true, audio: false },
              { name: "중국어", text: true, audio: false },
              { name: "프랑스어", text: true, audio: false },
              { name: "한국어", text: true, audio: false },
            ]}
          />
        ) : tab === "evaluation" ? (
          <Evaluation />
        ) : tab === "related" ? (
          <Related />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import twilight from "react-syntax-highlighter/dist/cjs/styles/prism/twilight";

export default function ProductContents() {
  const [isOpen, setOpen] = useState(false);
  const markdown = `
  > 경고: 이 게임은 어린이가 플래이하기 부적합할 수 있습니다.
  
  폭력적인 전투, 알 수 없는 약물, 그리고 끝없는 탐험은
당신의 정신을 뒤흔들고 예상치 못한 결과를 초래해 보세요.

![gd](/debug/minecraft.png)

[링크](https://www.example.com)
\`\`\`jsx
export default function hi() {
  return <div></div>
}
\`\`\`

### 진입 전 준비물:

- 강철처럼 단단한 의지

- 현실을 버릴 용기

- 잠 못 이루는 밤들을 감내할 각오

### 주요 특징:

- 금단의 블록: 손짓 한 번에 무한한 블록을 창조하고 파괴하며 세상을 당신의 욕망대로 만들어 보세요.
하지만 주의하세요. 블록의 유혹은 당신을 어둠으로 이끌 수 있습니다.

- 알 수 없는 약물: 다양한 포션을 만들어 능력을 향상시키고 극한의
상태를 경험하세요. 하지만 그 효과는 당신의 몸과 마음을 파괴할 수도
있습니다.

- 폭력적인 전투: 무시무시한 몬스터들과 맞서 싸우고,
치명적인 무기를 사용하여 생존을 도모하세요. 하지만 피튀기는 피와
잔혹한 광경은 당신의 영혼에 상처를 남길 수 있습니다.

- 끝없는 탐험: 광활한 세상을 탐험하고, 신비로운 장소를 발견하며 숨겨진 비밀을 찾아
나서세요. 하지만 주의하세요. 호기심은 당신을 위험에 빠뜨릴 수
있습니다.

- 혼돈의 온라인: 전 세계 플레이어들과 함께 플레이하며
협력하고 경쟁하세요. 하지만 조심하세요. 온라인 세계에는 악의가
도사리고 있습니다.

### 이 게임은 다음과 같은 분들에게 적합합니다.

- 짜릿한 스릴을 추구하는 당신

- 모험을 갈망하는 당신

- 창의력을 폭발시키고 싶은 당신

- 현실에서 벗어나고 싶은 당신`;

  return (
    <div className={isOpen ? "product-contents opened" : "product-contents"}>
      <button
        className="product-contents-button"
        onClick={() => {
          setOpen(!isOpen);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
          style={{
            transform: isOpen ? "rotate(180deg)" : "",
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
          />
        </svg>
      </button>
      {!isOpen ? <div className="product-contents-backdrop"></div> : <></>}
      <ReactMarkdown
        children={markdown}
        components={{
          a: LinkRenderer,
          code({ node, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              <SyntaxHighlighter
                language={match[1]}
                style={{
                  ...twilight,
                  'pre[class*="language-"]': {
                    ...twilight['pre[class*="language-"]'],
                    border: "0",
                    backgroundColor: "rgba(255, 255, 255, 0.041)",
                    boxShadow: "none",
                    textShadow: "none",
                  },
                }}
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code className={"markdown-default " + className} {...props}>
                {children}
              </code>
            );
          },
        }}
      />
      <div style={{ height: "50px" }}></div>
    </div>
  );
}

function LinkRenderer(props: any) {
  return (
    <a href={props.href} target="_" rel="noreferrer">
      {props.children}
    </a>
  );
}

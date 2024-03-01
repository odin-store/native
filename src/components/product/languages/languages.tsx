export interface Languages {
  name: string;
  text: boolean;
  audio: boolean;
}

export default function ProductLanguages(props: { languages: Languages[] }) {
  return (
    <div>
      <div className="language-alert">
        <img src="/ui/icons/alert.png" />
        <div>
          <h3>이 게임은 한국어를 지원하지 않아요!</h3>
          <p>구매하시기 전, 한 번 확인해 보세요.</p>
        </div>
      </div>
      <table className="product-languages-table">
        <thead>
          <tr>
            <th>언어</th>
            <th>텍스트</th>
            <th>오디오</th>
          </tr>
        </thead>
        <tbody>
          {props.languages.map((lang, i) => {
            return (
              <tr key={i}>
                <td>{lang.name}</td>
                <td>
                  {lang.text ? (
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
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  ) : (
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
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </td>
                <td>
                  {lang.audio ? (
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
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  ) : (
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
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

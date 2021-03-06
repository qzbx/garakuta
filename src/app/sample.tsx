import * as React from "react";
import { useEffect } from "react";
import style from "./sample.scss";


// サンプル一覧の表示用
export const Samples: React.FC<{
  sampleList: {
    title: string;
    desc: JSX.Element;
    comp: JSX.Element;
    code: string;
  }[];
  lang: string;
}> = (props) => {

  useEffect(() => { // レンダーのときに <script> タグを読み込んでほしい
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js?lang=css&skin=desert";
    script.async = true;
    document.body.appendChild(script); // <body> にタグを追加
  }, []);

  return(
    <>
      {props.sampleList.map((e, i) => {
        return(
          <div key={i} className={style.item}>
            <h2>{e.title}</h2>
            <div className={style.flex}>
              <div className={style.desc}>{e.desc}</div>
              <div className={style.sample}>{e.comp}</div>
            </div>
            <details>
              <summary>サンプルコード</summary>
              <pre className={`prettyprint lang-${props.lang} linenums`}>{e.code}</pre>
            </details>
          </div>
        );
      })}
    </>
  );
};


import React from "react";
import serialize from "serialize-javascript";
import { Link } from "react-router-dom";
import "@/assets/vendor/nucleo/css/nucleo.css";
import "@/assets/vendor/font-awesome/css/font-awesome.min.css";
import "@/assets/scss/argon-design-system-react.scss";

const commonNode = (props) =>
  // 为了同时兼容ssr/csr请保留此判断，如果你的layout没有内容请使用 props.children ?  props.children  : ''
  props.children ? props.children : "";

const Layout = (props) => {
  if (__isBrowser__) {
    return commonNode(props);
  } else {
    const { serverData } = props.layoutData;
    const { injectCss, injectScript } = props.layoutData.app.config;
    return (
      <html lang="en" class="perfect-scrollbar-off nav-open">
        <head>
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="theme-color" content="#000000" />
          {/* <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
          <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="%PUBLIC_URL%/apple-icon.png"
          /> */}
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
            rel="stylesheet"
          />
          <title>Argon Design System React by Creative Tim</title>{" "}
          {injectCss &&
            injectCss.map((item) => (
              <link rel="stylesheet" href={item} key={item} />
            ))}{" "}
        </head>
        <body>
          <noscript> You need to enable JavaScript to run this app. </noscript>
          <div id="app">{commonNode(props)}</div>
          {serverData && (
            <script
              dangerouslySetInnerHTML={{
                __html: `window.__USE_SSR__=true; window.__INITIAL_DATA__ =${serialize(
                  serverData
                )}`, // 使用pathname作为组件初始化数据的隔离，防止props污染
              }}
            />
          )}{" "}
          <div
            dangerouslySetInnerHTML={{
              __html: injectScript && injectScript.join(""),
            }}
          />{" "}
        </body>{" "}
      </html>
    );
  }
};

export default Layout;

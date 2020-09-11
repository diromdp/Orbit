import React from "react";
import App from "next/app";
import "antd/dist/antd.css";
import StyleReset from "../styles/reset";
import { GlobalStyle } from "../styles/global";
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <StyleReset />
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;

import React from "react";
import App from "next/app";
import "antd/dist/antd.css";
import StyleReset from "../styles/reset";
import { GlobalStyle } from "../styles/global";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";

class SukaSewa extends App {
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

export default SukaSewa;

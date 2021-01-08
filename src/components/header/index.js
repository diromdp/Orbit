import React, { useState, useEffect } from "react";
import { Wrapper } from "./style";

const Header = ({title, url}) => {
  return (
    <>
      <Wrapper>
      <nav class="navbar fixed-top navbar-expand-lg">
        <div className="container">
          <a className="navbar-burger">
            <img src="/img/icon-burger-menu.svg"/>
          </a>
          <a className="navbar-brand" href="#">
            <img src="/img/logo-heksa-dark.svg" />
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Fitur</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Produk</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Jangkauan</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Promo</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Bantuan</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Login</a>
              </li>
            </ul>
          </div>
          <div className="btn-side">
            <a className="btn-nav">
              Beli Sekarang
            </a>
            <a className="btn-nav-mobile">
              Beli
            </a>
          </div>
        </div>
      </nav>
      </Wrapper>
    </>
  );
};

export default Header;

// Vendors
import React from "react";
import { Row, Col } from "antd";
import Slider from "react-slick";

// Next
import Head from "next/head";
import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";
import FloatingLabelInput from 'react-floating-label-input';

//style
import Wrapper from "./style";

export default function Home({ appName }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <>
      <Head>
        <title>Login {appName}</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Ovo&display=swap" rel="stylesheet"/>
      </Head>
        <Wrapper>
          <Header/>
          <main>
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-lg-6 order-md-last">
                  <div className="content-login">
                    <div className="card-login">
                      <div className="desc">
                        <h1>Login Orbit</h1>
                        <div className="text-login">Masukkan Email Anda</div>
                        <div className="input-content">
                          <FloatingLabelInput
                            id="email"
                            className="input-login"
                            label="Alamat Email"
                            value={null}
                          />
                        </div>
                      </div>
                      <div className="btn-login">
                        <button type="button">Lanjut</button>
                      </div>
                      <div className="content-sosmed">
                        <span>Atau login melalui</span>
                        <div className="list">
                          <div className="list-item">
                            <img src="/img/ic-fb-blue.svg"/>
                          </div>
                          <div className="list-item">
                            <img src="/img/icon-google.svg"/>
                          </div>
                          <div className="list-item">
                            <img src="/img/icon-apple.svg"/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 order-md-first">
                  <div className="content-desc">
                    <div className="content-desc__item">
                      <div className="item-img">
                        <img src="/img/icon-process.svg"/>
                      </div>
                      <div className="item-content">
                        <h4>
                        Proses Transaksi Otomatis Tersimpan
                        </h4>
                        <p>Simpan dan selesaikan transaksi pembelian Orbit tanpa harus membuat ulang pesanan Anda untuk tiap pembelian</p>
                      </div>
                    </div>
                    <div className="content-desc__item">
                      <div className="item-img">
                        <img src="/img/icon-price.svg"/>
                      </div>
                      <div className="item-content">
                        <h4>
                        Lihat Status Order
                        </h4>
                        <p>Cek status order modem Orbit dengan mudah di mana saja</p>
                      </div>
                    </div>
                    <div className="content-desc__item">
                      <div className="item-img">
                        <img src="/img/icon-check.svg"/>
                      </div>
                      <div className="item-content">
                        <h4>
                        Cek Status Pengiriman
                        </h4>
                        <p>Cek informasi status pengirim modem Orbit real time</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <Footer/>
        </Wrapper>
    </>
  );
}

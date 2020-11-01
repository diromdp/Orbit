// Vendors
import React from "react";
import { Button } from "antd";

// Next
import Head from "next/head";
import dynamic from "next/dynamic";
import Link from "next/link";

// Component
import Layout from "../../components/layout2";

const Heads = dynamic(() => import("../../components/head"));
const Footer = dynamic(() => import("../../components/layout/footer"));
//style
import Wrapper from "./style";

export default function ConfirmPayment({ appName }) {
  return (
    <>
      <Head>
        <title>Konfirmasi Pembayaran{appName}</title>
      </Head>
      <Layout>
        <Heads title="Konfirmasi Pembayaran" />
        <Wrapper>
          <div className="confirm-payment">
            <div className="confirm-payment__detail-room">
              <div className="img">
                <img src="https://via.placeholder.com/112x112" />
              </div>
              <div className="content">
                <h3>Cozy Studio Apartment above Shopping Mall</h3>
                <div className="content_exp">
                  <div>1 kamar tidur</div>
                  <div>1 kamar mandi</div>
                </div>
              </div>
            </div>
            <div className="divider"></div>
            <div className="confirm-payment__user">
              <h2>Perjalanan Anda</h2>
              <div className="item">
                <div className="item-text">
                  <div className="item-text_t">Tanggal</div>
                  <div className="item-text_d">2020 Nov 1–2020 Nov 2</div>
                </div>
                <div className="item-link">
                  <Link href="#">
                    <a>Edit</a>
                  </Link>
                </div>
              </div>
              <div className="item">
                <div className="item-text">
                  <div className="item-text_t">Tamu</div>
                  <div className="item-text_d">1</div>
                </div>
                <div className="item-link">
                  <Link href="#">
                    <a>Edit</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="divider"></div>
            <div className="confirm-payment__price">
              <h2>Perincian Harga</h2>
              <div className="item">
                <div className="item-t">Rp 300.000 x 1 malam</div>
                <div className="item-p">Rp 300.000</div>
              </div>
              <div className="item">
                <div className="item-t">Fee</div>
                <div className="item-p">Rp 0</div>
              </div>
              <div className="item-bold">
                <div className="item-t">Total</div>
                <div className="item-p">Rp 310.000</div>
              </div>
            </div>
            <div className="btn-payment">
              <Link href="/payment">
                <Button type="primary">Konfirmasi dan Bayar</Button>
              </Link>
            </div>
          </div>
        </Wrapper>
        <Footer />
      </Layout>
    </>
  );
}

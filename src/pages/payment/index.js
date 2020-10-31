// Vendors
import React from "react";
import { Drawer } from "antd";

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

export default function Payment({ appName }) {
  return (
    <>
      <Head>
        <title>Pembayaran{appName}</title>
      </Head>
      <Layout>
        <Heads title="Pembayaran" />
        <Wrapper>
          <div className="payment-list">
            <Link href="#">
              <a className="payment-list__item">
                <div className="text">
                  <img src="/img/bca.png" />
                </div>
                <div className="link">
                  <i class="las la-chevron-circle-right"></i>
                </div>
              </a>
            </Link>
            <div className="divider"></div>
            <Link href="#">
              <a className="payment-list__item">
                <div className="text">
                  <img src="/img/bca.png" />
                </div>
                <div className="link">
                  <i class="las la-chevron-circle-right"></i>
                </div>
              </a>
            </Link>
            <div className="divider"></div>
            <Link href="#">
              <a className="payment-list__item">
                <div className="text">
                  <img src="/img/bca.png" />
                </div>
                <div className="link">
                  <i class="las la-chevron-circle-right"></i>
                </div>
              </a>
            </Link>
            <div className="divider"></div>
          </div>
        </Wrapper>
      </Layout>
    </>
  );
}

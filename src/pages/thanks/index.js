// Vendors
import React from "react";
import { Drawer, Button } from "antd";

// Next
import Head from "next/head";
import dynamic from "next/dynamic";
import Link from "next/link";

// Component
import Layout from "../../components/layout2";

const Heads = dynamic(() => import("../../components/head"));
//style
import Wrapper from "./style";

export default function Notif({ appName }) {
  return (
    <>
      <Head>
        <title>Success Payment{appName}</title>
      </Head>
      <Layout>
        <Heads title="Success Payment" url="/notif" />
        <Wrapper>
          <div className="success-payment">
            <h1>Thank You!</h1>
            <h2>YOUR RESERVATION IS NOW CONFIRMED</h2>
            <img src="/img/checked.png" />
            <p>To view additional information about your reservation. Please open the attached document or Booking Number</p>
            <Button className="btn-booking">BOOKING Number - BK1CD12349591CD</Button>
          </div>
          <div className="done-payment">
            <Link href="/">
              <Button type="primary">Done</Button>
            </Link>
          </div>
        </Wrapper>
      </Layout>
    </>
  );
}

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
        <title>Notification{appName}</title>
      </Head>
      <Layout>
        <Heads title="Notification" url="/notif" />
        <Wrapper>
          <div className="clear">
          <Button type="link">Mark all as Read</Button>
          </div>
          <div className="list">
            <div className="date">
                <span>Jun 2</span>
            </div>
            <div className="list-item">
                <Link href="#">
                    <a>
                        contoh notif
                    </a>
                </Link>
            </div>
            <div className="list-item">
                <Link href="/">
                    <a>
                        contoh notif
                    </a>
                </Link>
            </div>
            <div className="list-item">
                <Link href="/">
                    <a>
                        contoh notif
                    </a>
                </Link>
            </div>
          </div>
        </Wrapper>
      </Layout>
    </>
  );
}

// Vendors
import React from "react";

// Next
import Head from "next/head";
import dynamic from "next/dynamic";

// Component
import Layout from "../../components/layout2";

const SlideRoom = dynamic(() =>
  import("../../components/hoc/RoomDetail/SlideRoom")
);

//style
import { Wrapper } from "./style";

export default function Room({ appName }) {
  return (
    <>
      <Head>
        <title>Detail Room{appName}</title>
      </Head>
      <Layout>
        <Wrapper>
          <SlideRoom />
        </Wrapper>
      </Layout>
    </>
  );
}

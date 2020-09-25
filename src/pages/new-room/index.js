// Vendors
import React from "react";

// Next
import Head from "next/head";
import Layout from "../../components/layout";
import dynamic from "next/dynamic";

//style
import { Wrapper } from "./style";

//component
const NewList = dynamic(() => import('../../components/hoc/NewListing'));


export default function NewRoom({ appName }) {
  return (
    <>
      <Head>
        <title>Home {appName}</title>
      </Head>
      <Layout>
        <Wrapper>
          <NewList/>
        </Wrapper>
      </Layout>
    </>
  );
}

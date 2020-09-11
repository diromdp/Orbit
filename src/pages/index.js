// Vendors
import React from "react";

// Next
import Head from "next/head";
import Link from "next/link";
export default function Home({ appName }) {
  return (
    <>
      <Head>
        <title>Home {appName}</title>
      </Head>
      <div className="container">
        <main>
        </main>
      </div>
    </>
  );
}

import React from 'react'
import Head from "next/head"
import Header from "../components/Header.js"





const index = () => {
  return (
    <div className="">
      <Head>
        <title>Instagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
  );
}

export default index

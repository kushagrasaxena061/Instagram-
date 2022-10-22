import React from 'react'
import Head from "next/head"
import Header from "../components/Header.js"




import React from 'react'

const index = () => {
  return (
    <div className="">
      <Head>
        <title>Instagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello</h1>
      <Header />
    </div>
  );
}

export default index

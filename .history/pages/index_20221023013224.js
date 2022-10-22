import React from 'react'
import Head from "next/head"
import Header from "../components/Header.js"
import Feed from "../components/Feed.js"
import Modal from "../components/Model.js"




const index = () => {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll">
      <Head>
        <title>Instagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Feed/>
      <Modal/>
    </div>
  );
}

export default index

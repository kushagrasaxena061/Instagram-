import React from 'react'
import Head from "next/head"

export default function index() {
  return (
    <div className="flex flex-col itemms-center justify-center min-h-screen py-2">
      <Head>
        <title>Instagram</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <h1>Hello</h1>
    </div>
  )
}

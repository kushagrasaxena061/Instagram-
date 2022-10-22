import React from 'react'
import Post from "./Post.js"

const DUMMY_DATA = [
  {
    id: "123",
    username: "kushagrasaxena061",
    userImg:
      "https://pbs.twimg.com/profile_images/1524397902159912967/G2SCGT79_bigger.jpg", img:"https://links.papareact.com/3ke"
  },
];

export default function Posts() {
  return (
    <div><Post/></div>
  )
}

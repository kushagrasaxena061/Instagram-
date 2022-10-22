import React from "react";
import Post from "./Post.js";

const posts = [
  {
    id: "123",
    username: "kushagrasaxena061",
    userImg:
      "https://pbs.twimg.com/profile_images/1524397902159912967/G2SCGT79_bigger.jpg",
    img: "https://links.papareact.com/3ke",
    caption: "DOPE",
  },
  {
    id: "123",
    username: "kushagrasaxena061",
    userImg:
      "https://pbs.twimg.com/profile_images/1524397902159912967/G2SCGT79_bigger.jpg",
    img: "https://links.papareact.com/3ke",
    caption: "DOPE",
  },
  {
    id: "123",
    username: "kushagrasaxena061",
    userImg:
      "https://pbs.twimg.com/profile_images/1524397902159912967/G2SCGT79_bigger.jpg",
    img: "https://links.papareact.com/3ke",
    caption: "DOPE",
  },
  {
    id: "123",
    username: "kushagrasaxena061",
    userImg:
      "https://pbs.twimg.com/profile_images/1524397902159912967/G2SCGT79_bigger.jpg",
    img: "https://links.papareact.com/3ke",
    caption: "DOPE",
  },
];

export default function Posts() {
  return (
    <div>
      {posts.map(post => (
        <Post key={post.id} id={post.id} username={post.username} userImg={post.img} img={post.img} caption={post.caption}/>
      ))}
    </div>
  );
}

import React from "react";
import Post from "./Post.js";

const posts = [
  {
    id: "123",
    username: "kushagrasaxena061",
    userImg:
      "https://pbs.twimg.com/profile_images/1524397902159912967/G2SCGT79_bigger.jpg",
    img: "https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg",
    caption: "DOPE",
  },
  {
    id: "123",
    username: "kushagrasaxena061",
    userImg:
      "https://pbs.twimg.com/profile_images/1524397902159912967/G2SCGT79_bigger.jpg",
    img: "https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg",
    caption: "DOPE",
  },
  {
    id: "123",
    username: "kushagrasaxena061",
    userImg:
      "https://pbs.twimg.com/profile_images/1524397902159912967/G2SCGT79_bigger.jpg",
    img: "https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg",
    caption: "DOPE",
  },
  {
    id: "123",
    username: "kushagrasaxena061",
    userImg:
      "https://pbs.twimg.com/profile_images/1524397902159912967/G2SCGT79_bigger.jpg",
    img: "https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg",
    caption: "DOPE",
  },
];

export default function Posts() {
  return (
    <div>
      {posts.map(post => (
        <Post key={post.id} id={post.id} username={post.username} userImg={post.userImg} img={post.img} caption={post.caption}/>
      ))}
    </div>
  );
}

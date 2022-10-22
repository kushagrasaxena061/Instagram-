import React from 'react'

export default function Story({img,username}) {
  return (
    <div>
      <img
        src="https://pbs.twimg.com/profile_images/1524397902159912967/G2SCGT79_bigger.jpg"
        alt="no photo story.js"
      />
      <p>{username}</p>
    </div>
  );
}

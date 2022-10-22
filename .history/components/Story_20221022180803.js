import React from 'react'

export default function Story({img,username}) {
  return (
    <div>
        <img src={img} alt="no photo story.js"/>
        <p>{username}</p>
    </div>
  )
}

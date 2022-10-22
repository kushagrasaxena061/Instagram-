import React from 'react'
import {BookmarkIcon,ChatIcon,DotsHorizontalIcon,EmojiHappyIcon,HeartIcon,PaperAirplaneIcon} from "@heroicons/react/outline"
import {HeartIcon as HeartIconFilled} from "@heroicons/react/solid"



export default function Post({id,username,userImg,caption}) {
  return (
    <div>
        <div>
            <img src={userImg} alt=""/>
            <p>{username}</p>
            <DotsHorizontalIcon className="h-5"/>
        </div>
    </div>
  )
}

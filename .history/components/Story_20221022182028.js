import React from 'react'

export default function Story({img,username}) {
  return (
    <div>
      <img
        className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110"
        src="https://pbs.twimg.com/profile_images/1524397902159912967/G2SCGT79_bigger.jpg"
        alt="no photo story.js"
      />
      <p className="text-xs w-14 truncate text-center ">{username}</p>
    </div>
  );
}

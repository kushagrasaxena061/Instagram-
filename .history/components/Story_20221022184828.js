import React from 'react'

export default function Story({img,username}) {
  return (
    <div>
      <img
        className="h-24 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out"
        src="https://mybayutcdn.bayut.com/mybayut/wp-content/uploads/Featured-Image.jpg"
        alt="no photo story.js"
      />
      <p className="text-xs w-14 truncate text-center ">{username}</p>
    </div>
  );
}

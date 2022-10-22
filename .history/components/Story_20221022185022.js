import React from 'react'

export default function Story({img,username}) {
  return (
    <div>
      <img
        className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out"
        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        src=""
        alt="no photo story.js"
      />
      <p className="text-xs w-14 truncate text-center ">{username}</p>
    </div>
  );
}

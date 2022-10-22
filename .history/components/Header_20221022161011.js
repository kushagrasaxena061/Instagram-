import React from 'react'
import Image from "next/image"
import {SearchIcon,PlusCircleIcon,UserGroup,HeartIcon,PaperAirplaneIcon,MenuIcon} from "@heroicons/react/outline"


export default function Header() {
  return (
    <div>
      <div className="flex justify-between max-w-6xl cursor-pointer">
        <div className="relative w-24  hidden lg:inline-grid">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative w-10  lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="mt-1 relative p-3 rounded-md ">
          <div className="insety-y-0 absolute pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-500" />
          </div>
          <input className="bg-gray-50 block w-full pl-10 sm:text-sm border-red-300 rounded-md" type="text" placeholder="Search" />
        </div>
      </div>
    </div>
  );
}

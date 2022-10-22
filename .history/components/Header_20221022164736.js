import React from 'react'
import Image from "next/image"
import {SearchIcon,PlusCircleIcon,UserGroupIcon,HeartIcon,PaperAirplaneIcon,MenuIcon} from "@heroicons/react/outline"
import {HomeIcon} from "@heroicons/react/solid"

export default function Header() {
  return (
    <div>
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        <div className="relative w-24  hidden lg:inline-grid cursor-pointer">
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

        <div className="max-w-sm">
          <div className="mt-1 relative p-3 rounded-md ">
            <div className="insety-y-0 absolute pl-3 mt-2.5 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" />
          <MenuIcon className="h-6 md:hidden cursor-pointer" />
          <PaperAirplaneIcon className="navBtn" />
          <PlusCircleIcon className="navBtn"/>
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn"/>
          <img src="https://twitter.com/_kushagrasaxena" alt="no profile picture header.js" className="h-10 rounded-full cursor-pointer"/>
        </div>
      </div>
    </div>
  );
}

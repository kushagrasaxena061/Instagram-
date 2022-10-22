import React from 'react'
import Image from "next/image"



export default function Header() {
  return (
    <div>
      <div className="flex justify-between max-w-6xl  ">
        <div className="relative w-24 h-24 hidden lg:inline-grid">
          <Image src="https://links.papareact.com/ocw" layout="fill" objectFit="contain" />
        </div>
        <div className="relative w-10 h-10 lg:hidden flex-shrink-0">
          <Image src="https://links.papareact.com/jjm" layout="fill" objectFit="contain" />
        </div>
      </div>
    </div>
  );
}

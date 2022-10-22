import React from 'react'
import Image from "next/image"



export default function Header() {
  return (
    <div>
      <div className="flex justify-between max-w-6xl  ">
        <div className="relative w-24 h-24">
          <Image src="https://links.papareact.com/ocw" layout="fill" />
        </div>
      </div>
    </div>
  );
}

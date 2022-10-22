import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react";



export default function MiniProfile() {
      const { data: session } = useSession(); 

  return (
    <div className="flex items-center justify-between mt-14 ml-10 ">
      <img
        className="rounded-full border p-[2px] w-16 h-16"
        src={session?.user?.image} || "https://vercel.com/api/www/avatar/0fjaciHslZnFkEYpQxmPVJdd?&s=60"
        alt="no photo miniprofile.js"
      />
      <div className="flex-1 mx-4">
        <h2 className="font-bold ">{session?.user?.username}</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>
      <button onClick={signOut} className="text-white text-sm p-2 bg-blue-500 rounded-lg">
        Sign Out
      </button>
    </div>
  );
}

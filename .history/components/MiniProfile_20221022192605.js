import React from 'react'

export default function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10 ">
      <img
        className="rounded-full border p-[2px] w-16 h-16"
        src="/images/images/Logo.jpeg"
        alt="no photo miniprofile.js"
      />
      <div>
        <h2 className="font-bold ">kushagrasaxena061</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>
      <button className="text-blue-400 text-sm p-3 bg-blue-500 rounded-lg">
        Sign Out
      </button>
    </div>
  );
}

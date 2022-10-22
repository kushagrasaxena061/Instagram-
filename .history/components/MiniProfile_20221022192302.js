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
        <h2>kushagrasaxena061</h2>
        <h3>Welcome to Instagram</h3>
      </div>
      <button>
        Sign Out
      </button>
    </div>
  );
}

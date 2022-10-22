import React from 'react'
import Stories from "./Stories.js";
import Post from "./Post.js";



export default function Feed() {
  return (
    <div>
      <main className="grid grid-cols-1 md:grid-flow-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
        <section className="col-span-2">
          <Stories />
          <Post/>
        </section>

        <section></section>
      </main>
    </div>
  );
}

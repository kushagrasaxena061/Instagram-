import React from 'react'
import Stories from "./Stories.js";
import Posts from "./Posts.js";
import MiniProfile from "./MiniProfile.js"
import Suggestions from "./Suggestions.js"
import { useSession, signIn, signOut } from "next-auth/react";




export default function Feed() {
    const { data: session } = useSession(); 

  return (
    <div>
      <main className={`grid grid-cols-1 md:grid-flow-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto ${!session && "!grid-cols-1 !max-w-3xl"}`}>
        <section className="col-span-2">
          <Stories />
          <Posts />
        </section>
        
        {session && (
          <section className="hidden  xl:inline-grid md:col-span-1">
            <div className="fixedtop-20">
              <MiniProfile />
              <Suggestions />
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import faker from "faker";
import Story from "./Story.js";
import {useSession} from "next-auth/react"



export default function Stories() {
  const [suggestions, setSuggestions] = useState([]);
    const { data: session } = useSession(); 

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setSuggestions(suggestions);
    //console.log(suggestions)
  }, []);
  return (
    <div className="flex space-x-2 p-6 bg-white mt-0 border-rounded-sm border-gray-200 overflow-x-scroll">
      {session && (
        <Story img={session.user.image} user={session.user.username}/>
      )}

      
    </div>
  );
}

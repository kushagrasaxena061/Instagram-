import React, { useEffect,useState } from "react"
import faker from "faker"
import Story from "./Story.js"



export default function Stories() {
    const [suggestions,setSuggestions] = useState([])
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
        ...faker.helpers.contextualCard(),
        id:i,
    }));
    setSuggestions(suggestions)
    //console.log(suggestions)
  }, []);
  return (
    <div>
        {suggestions.map(profile => {
            <Story key={profile.id} img={profile.avatar}  />
        })}
    </div>
  )
}

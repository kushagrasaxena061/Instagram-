import React,{useEffect, useState} from 'react'
import faker from 'faker'



export default function Suggestions() {
  const [suggestions,setSuggestions] = useState([])
  useEffect(() => {
    const suggestions = [...Array(5)].map((_,i)=> (
      {
        ...faker.helpers.contextualCard(),id:i
      }
    ))
    setSuggestions(suggestions)
  },[])
  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>
      {
        suggestions.map(profile => (
          <div key={profile.id} className="flex items-center justify-between mt-3 "  >
            <img src="/images/images/Logo.jpeg" alt="no photo suggestions.js" />
          </div>
        ))
      }
    </div>
  )
}

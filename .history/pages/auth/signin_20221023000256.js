import React from 'react'
import {getProviders,signIn} from "next-auth/react"



export default function signIn({providers}) {
  return (
    <div>
        
    </div>
  )
}

export async function getServerSideProps() {
    const providers = getProviders()
    return {
        props:{
            providers
        }
    }
}
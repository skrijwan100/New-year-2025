import React from 'react'

export default function Wishpage({username}) {
  return (
    <div>
     <h1>{`Hi ${username.name} happy new year.`}</h1> 
      {console.log(username.name)}
    </div>
  )
}

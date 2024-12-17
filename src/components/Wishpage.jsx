import React from 'react'

export default function Wishpage({username}) {
  return (
    <div>
    {username.name==="Rani Dey"||"rani"||"Bishaka dey"||"Bishaka"?"Hi HWC i know you are best frined of rijwan. happy new year to you":`Hi ${username.name} happy new year.`}
     <h1>{`Hi ${username.name} happy new year.`}</h1> 
      {console.log(username.name)}
    </div>
  )
}

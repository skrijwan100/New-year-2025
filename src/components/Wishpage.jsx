import React, { useEffect, useState } from 'react'
import newyear1 from "../assets/new-year-2025-e.mp4"
import gif from "../assets/lodergif.gif"
import { TypeAnimation } from 'react-type-animation';
import Footer from './Footer';

export default function Wishpage({ username }) {
  const [loder,setloder]=useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setloder(false)
    },4000)
  },[0])
  return (
    <div className='wishpage'>
      <div className="vid-box" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <video className='main-vid' autoPlay style={{ width: "600px", marginTop: "40px", boxShadow: "13px 20px 13px 0px black", borderRadius: "30px" }}>
          <source src={newyear1} type="video/mp4" />
        </video>
      </div>
      {loder?
      <div style={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"40px",height:"470px"}}>

        <img src={gif} alt=""/>
      </div>

:<div className="text-box" style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "40px",flexDirection:"column" }}>
        <div className="wish">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              `Hi ${username.name} Happy new year.`,
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              'Best of luck',
              1000
            ]}
            wrapper="b"
            speed={40}
            repeat={Infinity}
            style={{ fontSize: "60px", color: "#ff4000", fontFamily: "Alegreya Sans SC" }}
          /></div>
          <div className="about-text" style={{width:"90vw",fontSize:"25px",fontWeight:"bold",color:"#00ff26"}}>
           {console.log(username.name)}
           {username.name==="rani"?"{Hi HWC. I know Rijwan save your name is as HWC . Your are the most Colsed , trusted , valuable and best of best frined of rijwan.I also know your brith day it 19 may.let chnage the person-->এই পাগলটার  কথা ছাড়। নতুন বছরের তোকে অনেক অনেক শুভেচ্ছা। আর একটা বছর আমরা পার করে দিলাম। তুই খুব খুব খুব ভালো থাকে এ বছরে।  হ্যাপি নিউ ইয়ার 😁😁❤️ । সারাদিন তো কথা বলিস আমাকে একবার কথা বলতে তোর  best friend এর সাথে। আমি কে বলতো রানী ? হাট তুই সরনা আমাকে শুভেচ্ছাটা জানাতে দে। vag Rijwan তুই। রানি হ্যাপি নিউ ইয়ার। 😁আমি আর কেউ নয় আমি Rijwan ar code।😂😂Happy new year Khub valo thak pagol 🔥}":""}
           {username.name==="Rani Dey"?"{Hi HWC. I know Rijwan save your name is as HWC . Your are the most Colsed , trusted , valuable and best of best frined of rijwan.I also know your brith day it 19 may.let chnage the person-->এই পাগলটার  কথা ছাড়। নতুন বছরের তোকে অনেক অনেক শুভেচ্ছা। আর একটা বছর আমরা পার করে দিলাম। তুই খুব খুব খুব ভালো থাকে এ বছরে।  হ্যাপি নিউ ইয়ার 😁😁❤️ । সারাদিন তো কথা বলিস আমাকে একবার কথা বলতে তোর  best friend এর সাথে। আমি কে বলতো রানী ? হাট তুই সরনা আমাকে শুভেচ্ছাটা জানাতে দে। vag Rijwan তুই। রানি হ্যাপি নিউ ইয়ার। 😁আমি আর কেউ নয় আমি Rijwan ar code।😂😂Happy new year Khub valo thak pagol 🔥}":""}
           {username.name==="Rani dey"?"{Hi HWC. I know Rijwan save your name is as HWC . Your are the most Colsed , trusted , valuable and best of best frined of rijwan.I also know your brith day it 19 may.let chnage the person-->এই পাগলটার  কথা ছাড়। নতুন বছরের তোকে অনেক অনেক শুভেচ্ছা। আর একটা বছর আমরা পার করে দিলাম। তুই খুব খুব খুব ভালো থাকে এ বছরে।  হ্যাপি নিউ ইয়ার 😁😁❤️ । সারাদিন তো কথা বলিস আমাকে একবার কথা বলতে তোর  best friend এর সাথে। আমি কে বলতো রানী ? হাট তুই সরনা আমাকে শুভেচ্ছাটা জানাতে দে। vag Rijwan তুই। রানি হ্যাপি নিউ ইয়ার। 😁আমি আর কেউ নয় আমি Rijwan ar code।😂😂Happy new year Khub valo thak pagol 🔥}":""}
           {username.name==="Bishaka Dey"?"{Hi HWC. I know Rijwan save your name is as HWC . Your are the most Colsed , trusted , valuable and best of best frined of rijwan.I also know your brith day it 19 may.let chnage the person-->এই পাগলটার  কথা ছাড়। নতুন বছরের তোকে অনেক অনেক শুভেচ্ছা। আর একটা বছর আমরা পার করে দিলাম। তুই খুব খুব খুব ভালো থাকে এ বছরে।  হ্যাপি নিউ ইয়ার 😁😁❤️ । সারাদিন তো কথা বলিস আমাকে একবার কথা বলতে তোর  best friend এর সাথে। আমি কে বলতো রানী ? হাট তুই সরনা আমাকে শুভেচ্ছাটা জানাতে দে। vag Rijwan তুই। রানি হ্যাপি নিউ ইয়ার। 😁আমি আর কেউ নয় আমি Rijwan ar code।😂😂Happy new year Khub valo thak pagol 🔥}":""}
           {username.name==="Bishaka"?"{Hi HWC. I know Rijwan save your name is as HWC . Your are the most Colsed , trusted , valuable and best of best frined of rijwan.I also know your brith day it 19 may.let chnage the person-->এই পাগলটার  কথা ছাড়। নতুন বছরের তোকে অনেক অনেক শুভেচ্ছা। আর একটা বছর আমরা পার করে দিলাম। তুই খুব খুব খুব ভালো থাকে এ বছরে।  হ্যাপি নিউ ইয়ার 😁😁❤️ । সারাদিন তো কথা বলিস আমাকে একবার কথা বলতে তোর  best friend এর সাথে। আমি কে বলতো রানী ? হাট তুই সরনা আমাকে শুভেচ্ছাটা জানাতে দে। vag Rijwan তুই। রানি হ্যাপি নিউ ইয়ার। 😁আমি আর কেউ নয় আমি Rijwan ar code।😂😂Happy new year Khub valo thak pagol 🔥}":""}
           {username.name==="Bishaka dey"?"{Hi HWC. I know Rijwan save your name is as HWC . Your are the most Colsed , trusted , valuable and best of best frined of rijwan.I also know your brith day it 19 may.let chnage the person-->এই পাগলটার  কথা ছাড়। নতুন বছরের তোকে অনেক অনেক শুভেচ্ছা। আর একটা বছর আমরা পার করে দিলাম। তুই খুব খুব খুব ভালো থাকে এ বছরে।  হ্যাপি নিউ ইয়ার 😁😁❤️ । সারাদিন তো কথা বলিস আমাকে একবার কথা বলতে তোর  best friend এর সাথে। আমি কে বলতো রানী ? হাট তুই সরনা আমাকে শুভেচ্ছাটা জানাতে দে। vag Rijwan তুই। রানি হ্যাপি নিউ ইয়ার। 😁আমি আর কেউ নয় আমি Rijwan ar code।😂😂Happy new year Khub valo thak pagol 🔥}":"নতুন বছরের তোমার পরিবারের সকলকে নিয়ে আনন্দ করো। সুখে শান্তিতে থাকো আগামী দিনগুলো। এটাই কামনা করি। হ্যাপি নিউ ইয়ার ২০২৪।নতুন বছর তোমাদের জীবনে সুখ সমৃদ্ধি নিয়ে আসুক। এটাই সবসময় কামনা করি। বাধা বিপত্তি জীবনের অঙ্গ। সেগুলো যেন পেরিয়ে যেতে পারো, সেটাই চাইব। হ্যাপি নিউ ইয়ার ২০২৪।"}
            </div>

      </div>
}
<div style={{marginTop:"20px",textAlign:"center"}}>

<Footer/>
</div>
    </div>
  )
}

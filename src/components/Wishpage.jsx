import React, { useContext, useEffect, useState } from 'react'
import newyear1 from "../assets/new-year-2025-e.mp4"
import gif from "../assets/lodergif.gif"
import { TypeAnimation } from 'react-type-animation';
import Footer from './Footer';
import newyearsong from "../assets/newyearsong.mp3";
import { usernameContext } from '../context/username';
export default function Wishpage() {
  const {username}=useContext(usernameContext)
  const [loder, setloder] = useState(true)
  const newyearaudio = new Audio(newyearsong);
  
  useEffect(() => {
    newyearaudio.play();
    setTimeout(() => {
      setloder(false)
    }, 4000)
  }, [])
  return (
    <div className='wishpage'>
      <div className="vid-box" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <video className='main-vid' autoPlay style={{ width: "600px", marginTop: "40px", boxShadow: "13px 20px 13px 0px black", borderRadius: "30px" }}>
          <source src={newyear1} type="video/mp4" />
        </video>
      </div>
      {loder ?
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "40px", height: "470px" }}>

          <img src={gif} alt="" />
        </div>

        : <div className="text-box" style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "40px", flexDirection: "column" }}>
          <div className="wish">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                `Hi ${username.name} Happy new year.`,
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Stay save ',
                1000
              ]}
              wrapper="b"
              speed={40}
              repeat={Infinity}
              style={{ fontSize: "60px", color: "#ff4000", fontFamily: "Alegreya Sans SC" }}
            /></div>
          <div className="about-text" style={{ width: "90vw", fontSize: "25px", fontWeight: "bold", color: "#00ff26" }}>
            {console.log(username.name)}
            {["Bishaka dey", "Bishaka", "Bishaka Dey", "Rani dey", "rani", "Rani","Noob"].some(name => username.name.includes(name))? "{ Hi HWC. I know Rijwan save your name is as HWC . Your are the most Colsed , trusted , valuable and best of best frined of rijwan.I also know your brith day it 19 may.Your fv dise is polau.এই পাগলটার  কথা ছাড়। নতুন বছরের তোকে অনেক অনেক শুভেচ্ছা। আর একটা বছর আমরা পার করে দিলাম। তুই খুব খুব খুব ভালো থাকে এ বছরে।আর একটু কম রাগাবি😒। নিউ ইয়ার এ নিউ ভাবে দেখা কর একদিন জানিনা আমি কিছু।  হ্যাপি নিউ ইয়ার 😁😁❤️ । সারাদিন তো কথা বলিস আমাকে একবার কথা বলতে তোর  best friend এর সাথে। আমি কে বলতো রানী ? হাট তুই সরনা আমাকে শুভেচ্ছাটা জানাতে দে। vag Rijwan তুই। রানি হ্যাপি নিউ ইয়ার। 😁আমি আর কেউ নয় আমি Rijwan ar code AI।😂😂Happy new year Khub valo thak pagol. I told you pagol because rijwan told me that tui pagol 🔥}" : ""}
            {username.name==="BWU Sriparna"?"Hello Sriparna Bacha der age happy new bolte hoy tai bola dilam happy new year baccha. Ar ai ne baccha ar jonno 🍫🍫 chocolet. ar ass kor tui ar ki mone rhak bii":""}
            {username.name==="Sayani"?"Hello bondhu  tui rijwan bondhu tai amro bondhu.Tor name ja  sunachi jode kichu boli tor Attitude dhak toke maya kom chale basi mone hoy. happy new year happy thak ar pora sona kor.akhon question ami k ? bol ami k ?":""}
            {username.name==="ritwik"?"Hello bondhu  tui rijwan bondhu tai amro bondhu.Tor baper onk jani tui rijwan ar best frined bol boo na tui rijwan vai hos.vai happy new  year happy thak ar ja sunlam new new bondhu hocha naki kor kor rijwan  acha chap nai sob samle nabe. akhon question ami k ? bol ami k?":""}
            {username.name==="Rehan"?"BSKD happy new year":""}
            {username.name==="arpan"?"jush muko happy new year. gar mara tui":""}
            {username.name==="Dweeptansu"?"Poooooooooooooooooooooooooooooooooooooooooo muko happy new year. gar mara tui.":""}
            {username.name==="Bibake"?"Gf niya kothy jachis ai 1 january ta ?":""}
            {username.name==="Masud"?"As-salamu alaykum vaii ( ٱلسَّلَامُ عَلَيْكُمْ) cholo vaiii ghura asi kothy exam diya ki hobe? ":""}
            {username.name==="Rithes"?"Bokachuda amke to happy new year bol bi na akhon sob new new gf paya chis amake kano korbi. jai hok bou k niya kushi thak vaii. HAPPY NEW YEAR ONE.":""}
            {username.name==="CR2.0"?"Frist love or class ka CR kisi ko nahi milta bha bha 😂😂😂. Hello  cr i am not sk rijwan i am ai who know about you . i got all data from rijwan. tum ldki kam ladka jada algte ho. tum hara Attitude dhka ka ladka lagta ha. by the way happy new year to our full Energetic CR.":""}
            {username.name==="suvham"?"Frist love or class ka CR kisi ko nahi milta lakin tuja to milna parega vai 😂😂😂.CR achi ha vai":""}
            {username.name==="Tanusri"?"Happy new year toke new kore ki ar bol boo tui amr happy ar tui amr sad. tui amr new ar tui amr old and i last thing you are my mau 😺😺. I Love you my mau🩷🩷🩷🩷🩷🩷🩷🩷🩷🩷🩷🩷🩷🩷.":""}
            {username.name==="Krishanandu"?"পাগল বাপের ব্যবসা করছিস কর কি আর বলব নতুন বছরে আমাদেরকে খাওয়াস এটুকুই বলবো নতুন বছরে নতুন বৌদি কর আমাদের বৌদির খুবই অভাব তুই একটা বৌদি কর।":""}

          </div>

        </div>
      }
      <div style={{ marginTop: "20px", textAlign: "center" }}>

        <Footer />
      </div>
    </div>
  )
}

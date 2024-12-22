import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation';
import Footer from './Footer';
import { usernameContext } from '../context/username';


export default function home() {
    const naviget = useNavigate()
    const {Username}=useContext(usernameContext)
    const [person,setperson]=useState({personname:""})
    const onchange=(e)=>{
        setperson({...person,[e.target.name]:e.target.value})
    }
    const handleclick =(e)=>{
        e.preventDefault()
        if(person.personname===""){
             return alert("why you test my coding skill ? bhai name enter kardo 𓆩😅𓆪")
        }

        Username(person.personname)
        // username(person.personname)
        naviget("/wishpage")
    }
    return (
        <>
        <div className='main-box' style={{display:"flex",height:"100vh",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"25px"}} >
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'WELCOME !',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                '2025',
                1000
            ]}
              wrapper="b"
              speed={40}
              repeat={Infinity}
              style={{ fontSize: "60px", color:"#ff4000" ,fontFamily:"Ubuntu"}}
            />

            
        
            <div className="form-box" style={{height:"300px",width:"330px",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"13px",boxShadow:"rgba(0, 0, 0, 0.75) 5px 8px 0px 0px",border:"1px solid #000000"}}>
                <form style={{display:"flex",flexDirection:"column", gap:"28px", justifyContent:"center",alignItems:"center"}} >
                    <input name='personname' className='inputbox' onChange={onchange} type="text" placeholder='Enter your name' style={{padding:"7px",width:"280px",height:"30px",outline:"none",border:"1px solid #000000",borderRadius:"4px",background:"transparent"}} value={setperson.personname}  />
                    <button onClick={handleclick}  className='namebtn' type="submit" style={{padding:"5px",width:"160px",borderRadius:"10px",height:"40px",border:"none",outline:"none",backgroundColor:"#0025ff",color:"white",cursor:"pointer"}}>SUBMIT</button>
                </form>

            </div>
        <Footer/>
        </div>
              </>

    )
}

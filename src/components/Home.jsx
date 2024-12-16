import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function home({Username}) {
    const naviget = useNavigate()
    const [person,setperson]=useState({personname:""})
    const onchange=(e)=>{
        setperson({...person,[e.target.name]:e.target.value})
    }
    const handleclick =(e)=>{
        e.preventDefault()
        Username(person.personname)
        naviget("/wishpage")
    }
    return (
        <div style={{display:"flex",height:"100vh",justifyContent:"center",alignItems:"center"}} >
            <div className="form-box" style={{height:"300px",width:"330px",backgroundColor:"#02e6a9",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"10px"}}>
                <form style={{display:"flex",flexDirection:"column", gap:"28px", justifyContent:"center",alignItems:"center"}} >
                    <input name='personname' onChange={onchange} type="text" placeholder='Enter your name' style={{padding:"7px",width:"280px",height:"20px",outline:"none",border:"none",borderRadius:"4px"}} value={setperson.personname} />
                    <button onClick={handleclick} className='namebtn' type="submit" style={{padding:"5px",width:"160px",borderRadius:"10px",height:"40px",border:"none",outline:"none",backgroundColor:"#0025ff",color:"white",cursor:"pointer"}}>SUBMIT</button>
                </form>

            </div>
        </div>
    )
}

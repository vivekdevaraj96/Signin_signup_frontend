import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';

const Userdetail = () => {
    let [fname, setfname]=useState("")
    useEffect(() => {
        fetch("https://signin-signup-backend-cpk7.onrender.com/userData",{
      method:"POST",
      crossDomain:true,
      headers:{
        "Content-Type":"application/json",
        Accept:"application/json",
        "Access-Control-Allow-Origin":"*"
      },
      body:JSON.stringify({        
        token:window.localStorage.getItem('token')
      })
    }).then((res)=>res.json())
    .then((data)=>{console.log(data);
        setfname(data.data.fname)
    })
      }, []);

     var logout=()=>{
        window.localStorage.clear()
        window.location.href="./signin"
      }
   
  return (
    <div>
        <h1>Hi {fname} , You are successfully Logged in</h1><br/>
        <Button variant="primary" onClick={()=>logout()}>Log out</Button>
    </div>
  )
}

export default Userdetail
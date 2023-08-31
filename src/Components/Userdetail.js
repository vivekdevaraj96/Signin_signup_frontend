import React, { useEffect, useState } from 'react'

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
   
  return (
    <div>
        <h1>Hi {fname} , You are successfully Logged in</h1>
    </div>
  )
}

export default Userdetail
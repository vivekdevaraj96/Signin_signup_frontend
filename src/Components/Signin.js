import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'

const Signin = () => {
    var [email,setemail]=useState("")
  var [password,setpassword]=useState("")

  var handleSubmit=(e)=>{
    e.preventDefault()
    console.log(email,password)
    fetch("https://signin-signup-backend-cpk7.onrender.com/signin",{
      method:"POST",
      crossDomain:true,
      headers:{
        "Content-Type":"application/json",
        Accept:"application/json",
        "Access-Control-Allow-Origin":"*"
      },
      body:JSON.stringify({
        
        email,
        password
      })
    }).then((res)=>res.json())
    .then((data)=>{console.log(data);
      if(data.status==="ok"){
        alert("login successfull")
        window.localStorage.setItem("token", data.data);
        window.location.href="./Userdetail"
      }
    })
}


  return (
    <div>
        <Form onSubmit={(e)=>handleSubmit(e)}>
        <h3>Sign in</h3>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control size="sm"  type="email" placeholder="Enter email"  onChange={(e)=>setemail(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control size="sm"  type="password" placeholder="Password"  onChange={(e)=>setpassword(e.target.value)}/>
        </Form.Group>
        <Button variant="primary" type="submit">Sign in</Button>
        <p className="forgot-password text-right">
          new Users <a href="/signup">sign up</a>
        </p>
      </Form>
    </div>
  )
}

export default Signin;
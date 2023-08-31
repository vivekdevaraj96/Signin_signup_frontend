import React, { useState } from 'react'
import { Button, Form } from "react-bootstrap";


const Signup = () => {
  var [fname,setfname]=useState("")
  var [lname,setlname]=useState("")
  var [email,setemail]=useState("")
  var [password,setpassword]=useState("")



  var handleSubmit=(e)=>{
    e.preventDefault()
    console.log(fname, lname, email, password)
    fetch("https://signin-signup-backend-cpk7.onrender.com/signup",{
      method:"POST",
      crossDomain:true,
      headers:{
        "Content-Type":"application/json",
        Accept:"application/json",
        "Access-Control-Allow-Origin":"*"
      },
      body:JSON.stringify({
        fname,
        lname,
        email,
        password
      })
    }).then((res)=>res.json())
    .then((data)=>{console.log(data);
    alert( `${data.message}, 😄 Now You can Sign in`);
    window.location.href="./signin"})
    
  }

  return (
    <div className='signup'>
        <Form onSubmit={(e)=>handleSubmit(e)}>
        <h3>Sign up</h3>
        <Form.Group className="mb-3" controlId="formGroupFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control size="sm"  type="name" placeholder="First Name" onChange={(e)=>setfname(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control size="sm"  type="name" placeholder="Last Name"  onChange={(e)=>setlname(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control size="sm"  type="email" placeholder="Enter email"  onChange={(e)=>setemail(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control size="sm"  type="password" placeholder="Password"  onChange={(e)=>setpassword(e.target.value)}/>
        </Form.Group>
        <Button variant="primary" type="submit">Sign up</Button>
        <p className="forgot-password text-right">
          Already registered <a href="/signin">sign in?</a>
        </p>
      </Form>
    </div>
  )
}

export default Signup
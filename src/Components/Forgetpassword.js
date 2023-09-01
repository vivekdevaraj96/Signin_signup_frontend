import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const Forgetpassword = () => {
  let [email, setemail] = useState("");

  var handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://signin-signup-backend-cpk7.onrender.com/forgetpassword", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
      })
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      alert(data.message);
      window.localStorage.setItem("id",data.id);
      window.localStorage.setItem("key",data.key)
      if(data.id){
        window.location.href='/resetpassword'
      }
    });
  };
  return (
    <div>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <h3>Forget Password</h3>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            size="sm"
            type="email"
            placeholder="Enter email"
            onChange={(e) => setemail(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          submit
        </Button>
        <p className="forgot-password text-right">
          <a href="/signin">sign in</a>
        </p>
      </Form>
    </div>
  );
};

export default Forgetpassword;

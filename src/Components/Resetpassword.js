import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const Resetpassword = () => {
  let [secretkey, setsecretkey]=useState("")
  let [password, setpassword] = useState("");
    var id=window.localStorage.getItem("id")
    var key=window.localStorage.getItem("key")
  var handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://signin-signup-backend-cpk7.onrender.com/reset-password/${id}/${key}`, {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        password,
        secretkey
      })
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      alert(data.message);
      if(data.status==="ok"){
        window.location.href='./'
      }
    });
  };
  return (
    <div>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <h3>Reset Password</h3>
        <p>Click the link,which has been send to Email to get secret key</p>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Enter Secret key</Form.Label>
          <Form.Control
            size="sm"
            type="text"
            placeholder="Enter Secretkey"
            onChange={(e) => setsecretkey(e.target.value)}
          />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>New Password</Form.Label>
          <Form.Control
            size="sm"
            type="password"
            placeholder="Enter new Password"
            onChange={(e) => setpassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Change Password
        </Button>
        <p className="forgot-password text-right">
          <a href="/signin">sign in</a>
        </p>
      </Form>
    </div>
  );
};

export default Resetpassword;

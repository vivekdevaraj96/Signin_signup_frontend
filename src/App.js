
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./Components/Signup";
import Signin from "./Components/Signin";
import Userdetail from "./Components/Userdetail";
import Forgetpassword from "./Components/Forgetpassword";
import Resetpassword from "./Components/Resetpassword";



function App() {
  let isLoggedin=window.localStorage.getItem("Loggedin")
  console.log(isLoggedin)
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={isLoggedin=="true" ? <Userdetail/> : <Signin/>}/>
      <Route path="/signin" element={isLoggedin=="true" ? <Userdetail/> : <Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>        
        <Route path="/Userdetail" element={<Userdetail/>}/>
        <Route path="/forgetpassword" element={<Forgetpassword/>}/>
        <Route path="/resetpassword" element={<Resetpassword/>}/>

      </Routes>
  
      
      
      </BrowserRouter>

      
      
      

    
    </div>
  );
}

export default App;


import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./Components/Signup";
import Signin from "./Components/Signin";
import Userdetail from "./Components/Userdetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/Userdetail" element={<Userdetail/>}/>

      </Routes>
  
      
      
      </BrowserRouter>

      
      
      

    
    </div>
  );
}

export default App;

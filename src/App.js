// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
// import About from "./components/About";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React ,{useState} from 'react'
// import ReactDOM from "react-dom/client";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [text, setText] = useState("Enable Darkmode");
  const [alert, setAlert] = useState(null);
  const showAlert =(message,type) =>{
    setAlert({
     msg : message,
     type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () =>{
    if (mode === 'light') {
      setMode('dark')
      setText('Enable Lightmode')
      document.body.style.backgroundColor = '#042743';
      showAlert("DarkMode has been Enabled","success");
    }
    
    else  {
      setMode('light')
      setText('Enable Darkmode')
      document.body.style.backgroundColor = 'white';
      showAlert("Lightmode has been Enabled","success");
    }
    
  }

    return (
    <>
      <Navbar title="TextUtils" aboutUs="About Us" mode={mode} toggleMode={toggleMode} setText={text}/>
      
      <Alert alert={alert}/>
      <div className="container my-3">
      {/* <TextForm heading="Write In box to Analyze"  mode={mode} showAlert={showAlert}/> */}
      {/* <About/> */}
      
      <TextForm heading="Write In box to Analyze"  mode={mode} showAlert={showAlert}/>
      
       
      </div>
      
    </>
  );
}
export default App;


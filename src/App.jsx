import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import AppName from "./AppName";
import "./App.css";
import ToDo from "./ToDo";
import NavBar from "./NavBar";
import React from "react";
import Alert from "./Alert";

/* App Component containing all the other components */

function App() {

  const[mode, setMode] = useState('light');  /*state for changing the mode*/

  const toggleMode = () => {                 /*function for changing the */
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
  }
}

const[alert, setAlert] = useState(null);   /*state for the alerts*/

const showAlert = (message, type) => {     /*function for the alerts*/
  setAlert({
    msg: message,
    type: type
  })

  setTimeout(() => {
    setAlert(null);
  }, 2000);


}

  return (
    <>
    <div>
      <NavBar mode={mode} toggleMode={toggleMode}/> 
    </div>

    <Alert alert={alert}/>

    <div class="container text-center"> 
      <AppName heading="Your Task Manager" mode={mode}/>
    </div>

    <div class="container">
    <ToDo mode={mode} showAlert={showAlert}/>
  </div>
  </>
  );
}

export default App;

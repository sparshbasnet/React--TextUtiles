import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [ mode, setMode ] = useState('light');
  const [alert, setAlert ] = useState(null);
  const showAlert =(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }
    const toggleMode=()=>{
    if (mode === 'light' ){
      setMode('dark')
      document.body.style.backgroundColor ='#042743'
      showAlert("Dark mode has been enabled", "success")
      document.title ="TextUtiles - Dark mode"
    } 
    else{
      setMode('light')
      document.body.style.backgroundColor ='white'
      showAlert("Light mode has been enabled", "success")
      document.title ="TextUtiles - Light mode"
    } 
  } 
  return (
    <>
    <Router>
      <Navbar title="TextUtiles" about="AboutTextUtiles" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
      <Routes>
      <Route exact path='/about' element={<About/>} />
      <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Enter your text here" mode={mode} />} />
          {/* <Route path="/">
          
          </Route> */}
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;

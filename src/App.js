import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import SignUp from './components/SignUp';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import {useState} from 'react'


function App() {
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type:"primary"
  })

  const displayAlert =(type1, msg1)=>{
     setAlert({
        msg: msg1,
        type: type1,
        show: true})
    
      setTimeout( ()=>{
        setAlert({
          show: false
        })
      }, 3000);
  }
  return (
    <>
    <NoteState displayAlert={displayAlert}>

      <BrowserRouter>
          <Navbar/>
          <Alert msg={alert.msg} type={alert.type} show={alert.show}/>
          <div className="container mb-3">
            <Routes>
              <Route exact path="/" element={<Home/>}></Route>
              <Route exact path="/About" element={<About/>}></Route>
              <Route exact path="/Login" element={<Login displayAlert={displayAlert}/>}></Route>
              <Route exact path="/SignUp" element={<SignUp displayAlert={displayAlert}/>}></Route>
            </Routes>
          </div>
      </BrowserRouter>
      
    </NoteState>
    </>
  );
}

export default App;

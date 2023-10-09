import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function Login(props) {
    const navigate = useNavigate();
    const [credencial, setCredencial] = useState({email:"", password:""});
    const onChangeInput = (e)=>{
        setCredencial({...credencial, [e.target.name]: e.target.value})
    }
    const handleSubmitLogin = async(e)=>{
        e.preventDefault();
        
        
        // const response = await fetch("http://localhost:5000/api/auth/login", {
        //          method: "POST", 
        //          headers: {
        //            "Content-Type": "application/json"
        //          },
        //          body: JSON.stringify({email:credencial.email, password:credencial.password}),
        //        });
        //       const json = await response.json(); //response ma authtoken nd sucess=true malse jo entered email nd pass database ma available hse to
        //       if(json.sucess){
        //           // save the auth-taken and redirect
        //           localStorage.setItem('token', json.authtoken);
        //           navigate('/');  
        //           props.displayAlert('success', 'You have Logged Suceessfully'); 
        //       }
        //       else{
        //           props.displayAlert('danger', 'Please Enter Valid Credencials');
        //       }
        navigate('/');
        props.displayAlert('success', 'You have Logged Suceessfully');
    }
  return (
    <div className="my-3 row" style={{display:'flex', justifyContent:'center'}}>
    <div className="col-md-8 col-lg-6">
        <h2>Login to continue to iNotebook:</h2>
        <form onSubmit={handleSubmitLogin}  style={{ background:'#36aed6', padding:'15px', color:'white'}}>
            <div className="mb-3" >
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" name="email" onChange={onChangeInput} value={credencial.email} aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text" style={{color:'white'}}>We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" name="password" onChange={onChangeInput} value={credencial.password}/>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
        </form>
   </div>
   </div>
  )
}

export default Login
import React, {useState} from 'react'
import { useNavigate } from 'react-router';

export default function SignUp(props) {
  const navigate = useNavigate();
  const [credencial, setCredencial] = useState({email:"",name:"", password:"", cpassword:""});

  const onChangeInput = (e)=>{
      setCredencial({...credencial, [e.target.name]: e.target.value})
  }
  const handleSubmitLogin = async(e)=>{
      e.preventDefault();
      const {name, email, password} = credencial;
      const response = await fetch("http://localhost:5000/api/auth/createuser", {
        
            method: "POST", 
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify({name, email, password}),
     });
        const json = await response.json(); //response ma authtoken nd sucess=true malse jo entered email nd pass database ma available hse to
        if(json.sucess){
          // save the auth-taken and redirect
          localStorage.setItem('token', json.authtoken);
          navigate('/'); 
          props.displayAlert('sucess', 'Account Created Suceessfully');  
        }
        else{
            props.displayAlert('danger', 'User already exist with this Email');
        }  
  }
  return (
    <div className="my-3 row" style={{display:'flex', justifyContent:'center'}}>
    <div className="col-md-8 col-lg-6">
        <h2>Sign Up to Use inotebook</h2>
        <form onSubmit={handleSubmitLogin} style={{background:'#36aed6', padding:'15px', color:'white'}}>
            <div className="mb-3" >
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" name="name" onChange={onChangeInput} value={credencial.name} aria-describedby="emailHelp" required/>
            </div>
            <div className="mb-3" >
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" name="email" onChange={onChangeInput} value={credencial.email} aria-describedby="emailHelp" required/>
                <div id="emailHelp" className="form-text" style={{color:'white'}}>We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" name="password" onChange={onChangeInput} value={credencial.password} minLength={5} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onChangeInput} value={credencial.cpassword} minLength={5} required/>
            </div>
            <button type="submit" className="btn btn-primary">Sign Up</button>
        </form>
   </div>
   </div>
  )
}

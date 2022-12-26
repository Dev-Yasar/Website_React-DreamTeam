import React,{useState} from 'react';
import { NavLink } from "react-router-dom";
import mobile from "./media/mobile.png";
import avatar from "./media/avatar.png";
import { toast } from 'react-toastify';

function Register({registerUser}) {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  
  const handlesubmit =(e) =>{
    e.preventDefault();
    if(!email || !password){
      return toast.error("please Fill in all fileds!");
    }
    if(password.length < 6){
      return toast.error("password must 6 or more characters")
    }
    const data = {email,password};
     
    registerUser(data);
  };

  return (

    <div>
            {/*Register Form*/}
            <div className="adminBlock">
            <div className="admin">
              <div className="formblock">
                <form onSubmit={handlesubmit}>
                  <img className="mobile" src={mobile} alt="mobile" />
                  <div className="adminlogin">
                    <h1>
                      <img id="avatar" src={avatar} />
                    </h1>
                    <label>Email</label>
                    <input
                      className="adminfileld"
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                    />
                    <label>Password</label>
                    <input
                      className="adminfileld"
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={password}
                      onChange={(e)=>setPassword(e.target.value)}
                    />
                    <input className="loginBtn" type="submit" value="Register" />
                    <NavLink to="/">
                      <i class="fas fa-home"></i>
                    </NavLink>
                  </div>
                </form>
              </div>
            </div>
          </div>
         
    </div>
  );
}

export default Register;

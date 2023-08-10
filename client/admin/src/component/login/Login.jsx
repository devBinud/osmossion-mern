import React, { useState } from 'react';
import axios from 'axios';
import "./Login.css";
import { NavLink , useNavigate } from 'react-router-dom';
import contstants from '../../constants/contstants';


const Login = () => {
  // const[email,setEmail]=useState();
  const[username,setUsername]=useState();
  const[password,setPassword]=useState();
  const [error, setError] = useState('');
  
  const navigate = useNavigate();

    const handleLogin = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post(contstants.BASE_URL + 'login', { username, password });
        console.log(response.data); // handle the successful login response here
        // reset the form
        // setEmail(' ');
        setUsername(' ')
        setPassword(' ');
        setError(' ');
        navigate("/dashboard");
      } catch (error) {
        if (error.response && error.response.data) {
          setError(error.response.data.message);
        } else {
          setError('An error occurred. Please try again.');
        }
      }
    };

  return (
    <>
       <div className="login__wrapper">
             <div className="login__box">
                 <h4>Login</h4>
                 <form onSubmit={handleLogin}>
                    <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='Username' />
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' />
                    <button type='submit' className="login__button">Login</button>
                    <p className='checklogin__text'>Don't have an account ? <NavLink className='login__register__link' to={"/register"}>Register Now</NavLink></p>
                    <h5 style={{color:"red"}}>{error}</h5>
                 </form>
             </div>
       </div>
    </>
  )
}

export default Login
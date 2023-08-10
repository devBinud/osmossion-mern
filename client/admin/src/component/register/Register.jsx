import React, { useState } from 'react';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import "./Register.css";
import contstants from '../../constants/contstants';


const Register = () => {
  const navigate=useNavigate();

    const[username, setUsername]=useState("");
    const[email, setEmail]=useState("");
    const[password, setPassword]=useState("");
    const[registrationStatus,setRegistrationStatus]=useState("")

    const handleRegister = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.post(contstants.BASE_URL + 'register', {
            username:username,
            password:password,
            email:email,
            
          });
    
          if (response.status === 200) {
            console.log('User registered successfully');
            // Do something after successful registration
            setRegistrationStatus("Registration Successfull");
            navigate("/")
          } else {
            console.error('Error registering user');
            // Handle registration error
            setRegistrationStatus(" Not Successfull");
          }
        } catch (error) {
          console.error('Error registering user: ', error);
          // Handle registration error
          setRegistrationStatus("Please use another email");

        }
      };
  return (
    <div className="register__wrapper">
    <div className="register__box">
        <h4>Register</h4>
        <form onSubmit={handleRegister}>
           <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='Enter Username' />
           <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your Email' />
           <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password' />
           <button type='submit' className="login__button">Register</button>
           <p className='checklogin__text'>Already Registered ? <NavLink className='login__register__link' to={"/"}>Login Now</NavLink></p>
           <h4>{registrationStatus}</h4>
        </form>
    </div>
</div>
  )
}

export default Register
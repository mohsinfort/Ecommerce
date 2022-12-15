import React from "react";
import { useState } from "react";
import {useNavigate} from 'react-router-dom';

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigat = useNavigate();
    const onSingup= async()=>{
      let result = await fetch("http://localhost:5000/register",{
        method:'post',
        body:JSON.stringify({name, email, password}),
        headers:{
          'Content-Type':'application/json'
        }
      });
      result = await result.json();
      localStorage.setItem("user",JSON.stringify(result));
      console.log(result);
      navigat('/');
    }
  return (
    <div className="signUpContainer">
      <h1>SignUp Component</h1>
      <input className="singUpInput" type="text" name="name" id="name" placeholder="name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
      <input className="singUpInput" type="email" name="email" id="email" placeholder="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
      <input className="singUpInput" type="password" name="password" id="password" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
      <button type="button" onClick={onSingup}>SignUp</button>
    </div>
  );
};

export default SignUp;

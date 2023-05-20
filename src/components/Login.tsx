import React, { useState,useEffect } from 'react'
import axios from 'axios';
const Login = () => {
    const MY_SERVER = 'http://127.0.0.1:8000/login/'
    const [username, setUsername] = useState("")
    const [password, setPasswrod] = useState("")
    const doLogin=()=>{
        console.log(username,password);
        
        axios.post(MY_SERVER, {
            username,
            password
          }).then(res => localStorage.setItem("token",res.data.access))
          
    }
  return (
    <div>Login
        User name :<input onChange={(e)=>setUsername(e.target.value)}/>
        Password :<input type="password" onChange={(e)=>setPasswrod(e.target.value)}></input>
        <button onClick={()=>doLogin()}>login</button>
    </div>
  )
}

export default Login


import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Register = () => {
    const MY_SERVER = 'http://127.0.0.1:8000/register'
    const [username, setUsername] = useState("")
    const [password, setPasswrod] = useState("")
    const [email, setEmail] = useState("")
    const doRegister = () => {
        console.log(username, password);

        axios.post(MY_SERVER, {
            username,
            password,email
        }).then(res => localStorage.setItem("token", res.data.access))

    }
    return (
        <div>
            User name :<input onChange={(e) => setUsername(e.target.value)} />
            email :<input onChange={(e) => setEmail(e.target.value)} />
            Password :<input type="password" onChange={(e) => setPasswrod(e.target.value)}></input>
            <button onClick={() => doRegister()}>Register</button>


        </div>
    )
}

export default Register

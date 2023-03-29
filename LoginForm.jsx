import React, { useState } from 'react'

const Login = () => {
    let [userName,setUserName] = useState("")
    let [password,setPassword] = useState("")

    let validName = userName.length>6 && userName.includes("@")
    let validPassword = password.length>8
    let validLogin = validName && validPassword

    let handelName = (event)=>{
        setUserName(event.target.value)
    }

    let handelPassword = (event)=>{
        setPassword(event.target.value)
    }

    let handelLogin = ()=>{
        validLogin ? alert("Login succeccful") : alert("Invalid login details")
    }

  return (
    <div className="login_page">
        <div>
            <label htmlFor="">Username
                <input type="text" onChange={handelName} value={userName}/>
            </label>
            <br />
            <label htmlFor="">Password
                <input type="password" value={password} onChange={handelPassword}/>
            </label>
            <br />
            <button onClick={handelLogin}>Login</button>
    </div>
    </div>
  )
}

export default Login
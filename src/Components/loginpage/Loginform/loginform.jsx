import React from "react";
import './loginform.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function LoginForm()
{
    const navigate = useNavigate();
    const [showUsername,setuserwarn] = useState(false)
    const [showPassword,setpasswarn] = useState(false)

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    function onPasswordChange(event){
        setPassword(event.target.value)
    }
    function onUsernameChange(event){
        setUsername(event.target.value)
    }
    const formSubmit = (event)=>{
        event.preventDefault();
        const data = JSON.stringify({
            username: username,
            password : password
        })
        fetch("https://expense-tracker-login.onrender.com/api/logindetails",{
            method:"POST",
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: data
        }).then(response=>response.json()).then(res=>{
            console.log(res)
            if(res["response"] === -1)
            {
                setpasswarn(true);
                setuserwarn(false);
            }
            else if(res["response"] === 0)
            {
                setpasswarn(false);
                setuserwarn(true);
                
            }
            else
            {
                navigate(`/ExpenseTracker/${res["response"]}`)
            }
        }).catch(error=>{
            console.log(error)
        })
    }
    return(
        <form onSubmit={formSubmit} className="loginpage-form" >
            <h1>Expense Tracker</h1>
            <h2>Login</h2>
            <div className="input-wrapper">
                <label htmlFor="">UserName</label>
                <div className="inputbox">
                    <img src={"https://img.icons8.com/pastel-glyph/64/null/person-male--v1.png"} alt="" className="icon" />
                    <input type="text" name="username" id="username" required placeholder="Enter your username" 
                    maxLength={20} value={username} onChange={onUsernameChange} />
                </div>
                {showUsername?<p className="warning">Username doesn't exist!</p>:null}
            </div>
            <div className="input-wrapper">
                <label htmlFor="">Password</label>
                <div className="inputbox">
                    <img src={"https://img.icons8.com/material-outlined/24/000000/password.png"} alt="" className="icon" />
                    <input type="password" name="password" id="password" required placeholder="Password"
                        minLength={8} value={password} onChange={onPasswordChange} />
                </div>
                {showPassword?<p className="warning">Incorrect password!</p>:null}
            </div>
            <a className="register" href="\register">Register Here</a>
            <button id="Login-button" type="submit">Login</button>    
        </form>
    )
}

export default LoginForm;
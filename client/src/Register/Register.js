import React, { useState } from "react"
import "./Register.css"
import axios from "axios"
import { useHistory } from "react-router-dom"

const Register = () => {

    const history = useHistory()

    const [ user, setUser] = useState({
        name: "",
        email:"",
        password: "",
        reEnterPassword: "",
        mobile: "",
        college: ""
    })

    const handleChange = e => {
        
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, reEnterPassword, mobile, college, codeforces, codechef } = user
        if( name && email && password && (password === reEnterPassword) && mobile && college && codeforces && codechef){
            axios.post("/register", user)
            .then( res => {
                alert(res.data.message)
                if (res.data.message === "Registered Succesfully" || res.data.message === "User already exist") {
                    history.push("/login")
                }
                else history.push("/register");
            })
        } else {
            alert("invlid input")
        }
        
    }

    return (
        <div classname = "container2">
        <div className="register">
            <h1>Register</h1>
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={handleChange}></input>
            <input type="mobile" name="mobile" value={user.mobile} placeholder="Mobile Number" onChange={handleChange}></input>
                <input type="college" name="college" value={user.college} placeholder="College" onChange={handleChange}></input>
                <input type="codeforces" name="codeforces" value={user.college} placeholder="College" onChange={handleChange}></input>
                <input type="codechef" name="codechef" value={user.college} placeholder="College" onChange={handleChange}></input>
                
            
                <div className="button" onClick={register} >Register</div>
            <div>or</div>
            <div className="button" onClick={() => history.push("/login")}>Login</div>
            </div>
            </div>
    )
}

export default Register
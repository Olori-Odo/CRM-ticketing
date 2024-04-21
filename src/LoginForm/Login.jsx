import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
const Login = () => {


    const [loginUser, setLoginUser] = useState({
        username: "",
        password: "",
    })

    const handleLogin = (e) => {
        const { name, value } = e.target;
        setLoginUser((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleLog = (e) => {
        e.preventDefault()
        console.log(loginUser);
    }
    return (
        <div className='form-container'>
            <p className='heading'>Login</p>

            <form className='contain' onSubmit={handleLog} >


                <div className='input-group'>
                    <label>Username</label>
                    <input type="text" name='username'
                        value={loginUser.username}
                        onChange={handleLogin} />
                </div>

                <div className='input-group'>
                    <label>Password</label>
                    <input type="password" name='password'
                        value={loginUser.password}
                        onChange={handleLogin} />
                </div>

                <div className='forgot'>
                    <Link to="/Forgotpass">Reset Password</Link>
                </div>

                <button className='sign'>Sign in</button>

                <div className='inn'>
                    <p className='message'>Don't have an account yet? <Link to="/Signup">Sign up for free</Link></p>
                </div>
            </form>
        </div>
    )
}

export default Login

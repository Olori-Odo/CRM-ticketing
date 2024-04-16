import React, { useState } from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'
const Signup = () => {

    const [creatUser, setCreateUser] = useState({
        Firstname: "",
        Lastname: "",
        Email: "",
        Password: "",
        

    })


    const handleChange = (e) => {
        const { name, value } = e.target;
        setCreateUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(creatUser);
    }
    return (
        <div>

            <form className='form' onSubmit={handleSubmit}>
                <p className='title'>Register</p>
                <p className='message'>Sign up and get full access to our app.</p>

                <div className='flex'>
                    <label>
                        <input type="text" className='Input'
                            name='Firstname'
                            value={creatUser.Firstname}
                            onChange={handleChange} />
                        <span>Firstname</span>
                    </label>

                    <label>
                        <input type="text" className='Input'
                            name='Lastname'
                            value={creatUser.Lastname}
                            onChange={handleChange} />
                        <span>Lastname</span>
                    </label>
                </div>


                <label>
                    <input type="email" className='Input'
                        name='Email'
                        value={creatUser.Email}
                        onChange={handleChange} />
                    <span>Email</span>
                </label>



                <label>
                    <input type="password" className='Input'
                        name='Password'
                        value={creatUser.Password}
                        onChange={handleChange} />
                    <span>Password</span>
                </label>





                <button className='submit' type='submit'>Submit</button>

                <div className='inn'>
                    <p className='message'>Already have an account? <Link to="/login">Sign in</Link></p>
                </div>

            </form>
        </div>
    )
}

export default Signup

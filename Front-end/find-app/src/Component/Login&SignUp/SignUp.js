import React, { useState } from 'react'
import './SignUp.css'
import axios from 'axios'


    
  

export default function SignUp() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [mobile, setMobile] = useState('')
    

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post('http://localhost:3404/sign/post',{name,email,mobile,password})

       
    }

  return (
    <div>
        <div className='rentalform'>
      <form className='container' onSubmit={(e)=>handleSubmit(e)}  >
        <label>Name</label>
        <input type='text'  id='location' placeholder="Enter your Name" required value={name} onChange={(e) => setName(e.target.value)} /><br/>
        <label>Email</label>
        <input type='email'  id='feet' placeholder="Enter Your mail id" required value={email} onChange={(e) => setEmail(e.target.value)}   /><br/>
        <label>Mobile Number</label>
        <input type='number'  id='link'  placeholder="Enter your mobile number" requitred value={mobile} onChange={(e) =>setMobile(e.target.value)} /><br></br>
        <label>Password</label>
        <input type='password' id='price' placeholder="Enter Your Password" required value={password} onChange={(e) => setPassword(e.target.value)} /><br></br>
        
        <button type='submit' id='submit'>Submit</button>
      </form>
      {/* <h2 className='h2'> already have an account<NavLink to={'/login'}>login</NavLink></h2> */}
    </div>
    

    
  </div>
  )
}

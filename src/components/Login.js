import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Login() {
    let navigate=useNavigate()
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const submit=async(e)=>
    {
        e.preventDefault()
        let response=await fetch('http://localhost:3002/api/auth/login/',{
            method:'POST',
            headers:
            {
                'content-type':"application/json"
            },
            body:JSON.stringify({email:email,password:password}),

        })

        const data=await response.json()
        if(data.success==true)
        {
          localStorage.setItem('token',data.authtoken)
          navigate('/')

        }
        else
        {
          alert('invalid credentials')
        }
    }
    const change=(e)=>
    {
       if(e.target.name==='email')
       {
        setemail(e.target.value)
        console.log(email)
       }
       else 
       {
        if(e.target.name=='password')
        {
        setpassword(e.target.value)
         console.log(password)
        }
       }
    }
   
  return (
    <div>
     <form onSubmit={submit}>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  name="email" onChange={change}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name="password" onChange={change}/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
    </div>
  )
}

export default Login

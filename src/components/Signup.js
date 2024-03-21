import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Signup() {
  let navigate=useNavigate()
  const [credentials,setcredentials]=useState(null)
  const change=(e)=>
  {
    setcredentials({...credentials,[e.target.name]:e.target.value})
  }
  const submit=async(e)=>
  {
    e.preventDefault();
    if(credentials.password===credentials.cpassword)
    {
      let response=await fetch("http://localhost:3002/api/auth/createuser",{
        method:"POST",
        headers:{
          "content-type":"application/json" 
        },
        body:JSON.stringify({email:credentials.email,name:credentials.name,password:credentials.password})

      })
      let data=await response.json()
      console.log(data)
      if(data.authtoken)
      {
        alert("user successfuly added")
        navigate('/login');
      }
      else if(data.error)
      {
        alert(`${data.error}`)
      }
      
    }
    
  }
  return (
    <div>
       <div>
     <form onSubmit={submit}>
     <div className="mb-3">
    
    <label for="exampleInputEmail1" className="form-label" >name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  name="name" onChange={change}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
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
  <label className="form-check-label" for="exampleCheck1"> Confirm password </label> 
  <input type="password" className="form-check-input" id="exampleCheck1" name="cpassword" onChange={change}/>  
  </div>
  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
    </div>

    </div>
  )
}
export default Signup
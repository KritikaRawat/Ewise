import React,{useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'

export default function SellerLogin() {
 const [sellerCredential, setsellerCredential] = useState({email:"", password:""})

 let navigate=useNavigate()
 const handleSubmit= async(e)=>{
  e.preventDefault();
  const response = await fetch("http://localhost:5000/api/loginseller",{
   method:'POST',
   headers:{
    'Content-Type':'application/json'
   },
   body:JSON.stringify({email:sellerCredential.email, password:sellerCredential.password})
  });
  const json = await response.json();
  console.log(json);

  if(!json.success){
   alert("Enter Valid Credentials")
  }
  if(json.success){
   navigate("/");
  }
 }

 const onChange=(event)=>{
  setsellerCredential({...sellerCredential,[event.target.name]:event.target.value})
 }

  return (
   <div className='container'>
    <form onSubmit={handleSubmit}>
       <div className="m-3 form-group">
         <label htmlFor="email" style={{ fontWeight: 'bold', color:'skyblue' }}>Email</label>
         <input type="email" className="form-control" placeholder="Enter the email" name='email' value={sellerCredential.email} onChange={onChange}/>
       </div>
       <div className="m-3 form-group">
         <label htmlFor="password" style={{ fontWeight: 'bold', color:'skyblue' }}>Password</label>
         <input type="password" className="form-control" placeholder="Enter Password" name='password' value={sellerCredential.password} onChange={onChange}/>
       </div>

       <button type="submit" className="m-3 btn btn-primary">Submit</button>
       <Link to="/createseller" className='m-3 btn btn-danger'>I'm a new user</Link>
     </form>
    </div>
  )
}
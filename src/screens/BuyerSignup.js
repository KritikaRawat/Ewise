import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import homeImg from "../images/about.png";


export default function BuyerSignup() {
 const [sellerCredential, setsellerCredential] = useState({name:"", email:"", password:"", PhoneNum:""})
 const handleSubmit= async(e)=>{
  e.preventDefault();
  const response = await fetch("http://localhost:5000/api/createbuyer",{
   method:'POST',
   headers:{
    'Content-Type':'application/json'
   },
   body:JSON.stringify({name:sellerCredential.name, email:sellerCredential.email, password:sellerCredential.password,PhoneNum:sellerCredential.PhoneNum })
  });
  const json = await response.json();
  console.log(json);

  if(!json.success){
   alert("Enter Valid Credentials")
  }
 }

 const onChange=(event)=>{
  setsellerCredential({...sellerCredential,[event.target.name]:event.target.value})
 }


  return (
    <>
    <div className='container d-flex'>
    <div>
        <div className="image-container col-md-10">
          <img src={homeImg} alt="Image Description" className="image-style" />
        </div>
    </div>
    <form className="col-md-6" onSubmit={handleSubmit}>
      <div>
       <div className="m-3 form-group">
         <label htmlFor="name" style={{ fontWeight: 'bold', color:'skyblue' }}>Name</label>
         <input type="text" className="form-control"  placeholder="Enter Name" name='name' value={sellerCredential.name} onChange={onChange}/>
       </div>
       <div className="m-3 form-group">
         <label htmlFor="email" style={{ fontWeight: 'bold', color:'skyblue' }}>Email</label>
         <input type="email" className="form-control" placeholder="Enter the email" name='email' value={sellerCredential.email} onChange={onChange}/>
       </div>
       <div className="m-3 form-group">
         <label htmlFor="password" style={{ fontWeight: 'bold', color:'skyblue' }}>Password</label>
         <input type="password" className="form-control" placeholder="Enter Password" name='password' value={sellerCredential.password} onChange={onChange}/>
       </div>

       <div className="m-3 form-group">
         <label htmlFor="PhoneNum" style={{ fontWeight: 'bold', color:'skyblue' }}>Phone Number</label>
         <input type="tel" className="form-control" placeholder="Enter Phone Number" name='PhoneNum' value={sellerCredential.PhoneNum} onChange={onChange}/>
       </div>

       <button type="submit" className="m-3 btn btn-primary">Submit</button>
       <Link to="/loginbuyer" className='m-3 btn btn-danger'>Already a user</Link>
       </div>
     </form>
    </div>
    </>
  )
}

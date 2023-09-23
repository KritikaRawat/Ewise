import React,{useState} from 'react'
import {Link} from 'react-router-dom'


export default function SellerSignup() {
 const [sellerCredential, setsellerCredential] = useState({name:"", email:"", password:"", sellerType:"", Address:"", geolocation:"", imglink:"", PhoneNum:""})
 const handleSubmit= async(e)=>{
  e.preventDefault();
  const response = await fetch("http://localhost:5000/api/createseller",{
   method:'POST',
   headers:{
    'Content-Type':'application/json'
   },
   body:JSON.stringify({name:sellerCredential.name, email:sellerCredential.email, password:sellerCredential.password, sellerType:sellerCredential.sellerType, Address:sellerCredential.Address, mapLink:sellerCredential.geolocation, imglink:sellerCredential.imglink, PhoneNum:sellerCredential.PhoneNum })
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
    <div className='container'>
    <form onSubmit={handleSubmit}>
       <div className="m-3 form-group">
         <label htmlFor="name">Name</label>
         <input type="text" className="form-control"  placeholder="Enter Name" name='name' value={sellerCredential.name} onChange={onChange}/>
       </div>
       <div className="m-3 form-group">
         <label htmlFor="email">Email</label>
         <input type="email" className="form-control" placeholder="Enter the email" name='email' value={sellerCredential.email} onChange={onChange}/>
       </div>
       <div className="m-3 form-group">
         <label htmlFor="password">Password</label>
         <input type="password" className="form-control" placeholder="Enter Password" name='password' value={sellerCredential.password} onChange={onChange}/>
       </div>

       <div className="m-3 form-group">
        <label htmlFor="sellerType">Seller Type</label>
        <select className="m-2 form-control" id="sellerType" name='sellerType' value={sellerCredential.sellerType} onChange={onChange}>
         <option value="repairers">Repairers</option>
         <option value="vendors">Vendors</option>
        </select>
       </div>

       <div className="m-3 form-group">
         <label htmlFor="Address">Address</label>
         <input type="" className="form-control" placeholder="Address" name='Address' value={sellerCredential.Address} onChange={onChange}/>
       </div>
       <div className="m-3 form-group">
         <label htmlFor="maplink">Map Link of the Shop</label>
         <input type="text" className="form-control" placeholder="Google map link of the shop" name='geolocation' value={sellerCredential.geolocation} onChange={onChange}/>
       </div>
       <div className="m-3 form-group">
         <label htmlFor="imglink">Image</label>
         <input type="file" className="form-control-file" placeholder="Image link in png/jpg format" id="image" accept="image/*" name='imglink' value={sellerCredential.imglink} onChange={onChange}/>
       </div>
       <div className="m-3 form-group">
         <label htmlFor="PhoneNum">Phone Number</label>
         <input type="tel" className="form-control" placeholder="Enter Phone Number" name='PhoneNum' value={sellerCredential.PhoneNum} onChange={onChange}/>
       </div>

       <button type="submit" className="m-3 btn btn-primary">Submit</button>
       <Link to="/loginseller" className='m-3 btn btn-danger'>Already a user</Link>
     </form>
    </div>
    </>
  )
}

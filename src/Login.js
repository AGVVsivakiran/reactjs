import React, { useState } from "react";
import axios from "axios";

function Login() {
   const [name, setName] = useState("");
   const [phoneNo, setPhoneNo] = useState("");
   const handleNameChange = (value) => {
     setName(value);
   }
   const handlePhoneNoChange = (value) => {
     setPhoneNo(value);
   }
   const handleLogin = () => {
     const data = {
       Name: name,
       PhoneNo: phoneNo, 
     };
     const url = 'https://localhost:44301/api/Test/Login';
     axios.post(url,data).then((result) => {
       alert(result.data);      
     }).catch((error)=>{
       alert(error);
     })
   }
 return (
    <>
    <input
    type="text"
    id="txtName"
    placeholder="Enter Name"
    onChange={(e) => handleNameChange(e.target.value)}
    />
    <input
    type="text"
    id="txtPhoneNo"
    placeholder="Enter Phone No"
    onChange={(e) => handlePhoneNoChange(e.target.value)}
    />

    <button onClick={() => handleLogin()}>Save</button>

    </>
 )   
}
export default Login;
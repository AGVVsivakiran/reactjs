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
    axios.post(url, data).then((result) => {
      alert(result.data);
    }).catch((error) => {
      alert(error);
    })
  }
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Login
          </h2>

          <form className="space-y-4">
            <div>
              <label className="block text-sm text-start font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="txtName"
                placeholder="Enter Name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => handleNameChange(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm text-start font-medium text-gray-700 mb-1">
                Phone No
              </label>
              <input
                type="text"
                id="txtPhoneNo"
                placeholder="Enter Phone No"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                onChange={(e) => handlePhoneNoChange(e.target.value)}
              />
            </div>
          </form>
          <button onClick={() => handleLogin()}
            type="button"
            className="w-full  bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">Save</button>
        </div>
      </div>
    </>
  )
}
export default Login;
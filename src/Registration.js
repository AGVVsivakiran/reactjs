import React, { useState } from "react";
import axios from "axios";

function Registration() {
  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [address, setAddress] = useState("");

  const handleInputChange = (value) => {
    setName(value);
  }
  const handlePhoneNoChange = (value) => {
    setPhoneNo(value);
  }
  const handleAddressChange = (value) => {
    setAddress(value);
  }
  const handleSave = () => {
    const data = {
      Name: name,
      PhoneNo: phoneNo,
      Address: address,
      IsActive: 1
    };
    const url = 'https://localhost:44301/api/Test/Registration';
    axios.post(url, data).then((result) => {
      alert(result.data);
    }).catch((error) => {
      alert(error);
    })
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Registration
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm text-start font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text" id="txtName" onChange={(e) => handleInputChange(e.target.value)}
              placeholder="Enter Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-start font-medium text-gray-700 mb-1">
              Phone No
            </label>
            <input
              type="tel" id="txtPhoneNo" onChange={(e) => handlePhoneNoChange(e.target.value)}
              placeholder="Enter Phone No"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-start font-medium text-gray-700 mb-1">
              Address
            </label>
            <input
              type="text" id="txtAddress" onChange={(e) => handleAddressChange(e.target.value)}
              placeholder="Enter Address"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button onClick={() => handleSave()}
            type="button"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default Registration;

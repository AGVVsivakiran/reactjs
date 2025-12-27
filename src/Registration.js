import React, {useState} from "react";

function Registration() {
    const [name, setName] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [address, setAddress] = useState("");
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
              type="text" id="txtName"
              placeholder="Enter Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-start font-medium text-gray-700 mb-1">
              Phone No
            </label>
            <input
              type="tel" id="txtPhoneNo"
              placeholder="Enter Phone No"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-start font-medium text-gray-700 mb-1">
              Address
            </label>
            <input
              type="text" id="txtAddress"
              placeholder="Enter Address"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
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

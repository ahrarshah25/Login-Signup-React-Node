import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/v1/auth/login", formData);
      alert(JSON.stringify(res.data));
    } catch (err) {
      alert(err.response ? err.response.data.message : "Server Error");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="email" placeholder="Email" type="email" onChange={handleChange} className="w-full p-2 border rounded" />
          <input name="password" placeholder="Password" type="password" onChange={handleChange} className="w-full p-2 border rounded" />
          <button type="submit" className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">Login</button>
        </form>
      </div>
    </div>
  );
}

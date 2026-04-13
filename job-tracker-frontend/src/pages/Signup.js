import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    await api.post("/auth/signup", form);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>

        <input className="input" placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input className="input" placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input type="password" className="input" placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="btn-green">Signup</button>
      </div>
    </div>
  );
}
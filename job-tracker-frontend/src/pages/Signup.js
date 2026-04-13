import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault(); // prevents page reload

    try {
      const res = await api.post("/auth/signup", form);

      console.log("SIGNUP RESPONSE:", res.data);

      navigate("/");
    } catch (err) {
      console.log(err);
      alert("Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSignup}
        className="bg-white p-8 rounded shadow w-80"
        
      >
        <h2 className="text-xl mb-4">Signup</h2>
        
        <input
          className="w-full p-2 mb-3 border"
          placeholder="Name"
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          className="w-full p-2 mb-3 border"
          placeholder="Email"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          type="password"
          className="w-full p-2 mb-3 border"
          placeholder="Password"
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2"
        >
          Signup
        </button>
      </form>
    </div>
  );
}
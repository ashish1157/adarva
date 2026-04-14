import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState(''); // ✅ added
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError(''); // ✅ clear previous error

    try {
      const res = await api.post("/auth/signup", form);
      console.log("SIGNUP RESPONSE:", res.data);
      navigate("/");
    } catch (err) {
      const message = err.response?.data?.error || 'Something went wrong';
      setError(message); // ✅ set error instead of alert
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
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          className="w-full p-2 mb-3 border"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          className="w-full p-2 mb-3 border"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        {/* ✅ error shows here */}
        {error && (
          <p className="text-red-500 text-sm text-center mb-3">{error}</p>
        )}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2"
        >
          Signup
        </button>

        {/* ✅ login navigation */}
        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <span
            className="text-blue-500 cursor-pointer hover:underline"
            onClick={() => navigate("/")}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
}
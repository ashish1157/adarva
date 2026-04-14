import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // prevents page reload
    setError('');

    try {
      const res = await api.post("/auth/login", form);

      console.log("LOGIN RESPONSE:", res.data);

      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err) {
        const message = err.response?.data?.error || 'Something went wrong';
        setError(message);
      }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded shadow w-81"
        
      >
        <h2 className="text-xl mb-4">Login</h2>
        
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

        {error && (
          <p className="text-red-500 text-sm text-center mb-3">{error}</p>
        )}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2"
        >
          Login
        </button>
        <p className="text-center mt-4 text-sm">
        Don't have an account?{" "}
        <span
          className="text-blue-500 cursor-pointer hover:underline"
          onClick={() => navigate("/signup")}
        >
          Sign up
        </span>
      </p>
      </form>
    </div>
  );
}
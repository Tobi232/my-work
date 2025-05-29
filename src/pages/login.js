
// === 3. Login Page ===
// File: pages/login.js
import Navbar from "../app/components/Navbar";
import { useState } from "react";

export default function Login() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    alert(data.message);
};

return (
    <div>
    <Navbar />
    <div className="flex justify-center items-center min-h-screen">
        <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded shadow-md w-full max-w-sm"
        >
        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-4">Login</h2>
        <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
        />
        <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
        />
        <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
        >
            Sign In
        </button>
        </form>
    </div>
    </div>
);
}


import Navbar from "../app/components/Navbar";
import { useState } from "react";

function RegistrationSuccess({ email }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-indigo-50">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
                <h2 className="text-3xl font-bold text-indigo-700 mb-4">Registration Successful!</h2>
                <p className="text-gray-700 mb-6">
                    Welcome, <span className="font-semibold text-indigo-600">{email}</span>! <br />
                    You can now log in to your account.
                </p>
                <img
                    src="/welcome.png"
                    alt="Welcome"
                    className="mx-auto mb-6 w-32 h-32 object-contain"
                />
                <a
                    href="/login"
                    className="inline-block bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
                >
                    Go to Login
                </a>
            </div>
        </div>
    );
}

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isRegistered, setIsRegistered] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();
        const res = await fetch("/api/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });
        const data = await res.json();
        if (res.ok) {
            setIsRegistered(true);
        } else {
            alert(data.message);
        }
    };

    if (isRegistered) {
        return <RegistrationSuccess email={email} />;
    }

    return (
        <div>
            <Navbar />
            <div className="flex justify-center items-center min-h-screen bg-indigo-50">
                <form
                    onSubmit={handleRegister}
                    className="bg-white p-6 rounded shadow-md w-full max-w-sm"
                >
                    <h2 className="text-2xl font-bold text-center text-indigo-600 mb-4">Register</h2>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 mb-4 border rounded"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 mb-4 border rounded"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
                    >
                        Create Account
                    </button>
                </form>
            </div>
        </div>
    );
}

    // === 7. Backend API Routes ===
    // File: pages/api/register.js

    let users = [];

    export default function handler(req, res) {
    if (req.method === "POST") {
        const { email, password } = req.body;
        const userExists = users.find((u) => u.email === email);
        if (userExists) {
        return res.status(400).json({ message: "User already exists" });
        }
        users.push({ email, password });
        return res.status(200).json({ message: "Registration successful" });
    }
    res.status(405).json({ message: "Method not allowed" });
    }

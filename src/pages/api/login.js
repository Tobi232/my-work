
    // File: pages/api/login.js

    export default function handler(req, res) {
    if (req.method === "POST") {
        const { email, password } = req.body;
        const user = users.find((u) => u.email === email && u.password === password);
        if (user) {
        return res.status(200).json({ message: "Login successful" });
        }
        return res.status(401).json({ message: "Invalid credentials" });
    }
    res.status(405).json({ message: "Method not allowed" });
    }
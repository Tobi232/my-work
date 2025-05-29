import fs from "fs";
import path from "path";

const usersFile = path.join(process.cwd(), "users.json");

function readUsers() {
    if (!fs.existsSync(usersFile)) return [];
    const data = fs.readFileSync(usersFile);
    return JSON.parse(data);
}

export default function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password required" });
    }

    const users = readUsers();
    const user = users.find((u) => u.email === email && u.password === password);

    if (!user) {
        return res.status(401).json({ message: "Invalid email or password" });
    }

    return res.status(200).json({ message: "Login successful" });
}
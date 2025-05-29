import fs from "fs";
import path from "path";

const usersFile = path.join(process.cwd(), "users.json");

function readUsers() {
    if (!fs.existsSync(usersFile)) return [];
    const data = fs.readFileSync(usersFile);
    return JSON.parse(data);
}

function writeUsers(users) {
    fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
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
    if (users.find((u) => u.email === email)) {
        return res.status(409).json({ message: "Email already registered" });
    }

    users.push({ email, password }); // In production, hash the password!
    writeUsers(users);

    return res.status(201).json({ message: "Registration successful" });
}
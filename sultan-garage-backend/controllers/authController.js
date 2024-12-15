import Admin from "../models/Admin.js";
import bcrypt from "bcrypt";
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const admin = await Admin.findOne({ email });
        if (!admin) {
            return res.status(404).json({ message: "Admin not found" });
        }
        const isPasswordValid = await bcrypt.compare(password, admin.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        res.status(200).json({ message: "Login successful" });
    } catch {
        res.status(500).json({ message: "Internal server error" });
    }
}
export const register = async (req, res) => {
    try {
        const { email, password } = req.body;
        const admin = await Admin.findOne({ email });
        if (admin) {
            return res.status(400).json({ message: "Admin already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newAdmin = new Admin({
            
            email,
            password: hashedPassword,
        });
        await newAdmin.save();
        res.status(201).json({ message: "Admin created successfully" });
    } catch {
        res.status(500).json({ message: "Internal server error" });
    }
}
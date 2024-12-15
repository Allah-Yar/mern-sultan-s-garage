import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
    // name: {
    //     type: String,
    //     required: true,
    // },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    // isAdmin: {
    //     type: Boolean,
    //     default: false,
    // },
    // isActive: {
    //     type: Boolean,
    //     default: true,
    // },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Admin = mongoose.model("Admin", AdminSchema);
export default Admin;
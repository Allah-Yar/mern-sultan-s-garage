// import mongoose from "mongoose";

// const AdminSchema = new mongoose.Schema({
//     // name: { 
//     //     type: String, 
//     //     required: false 
//     // },
//     //  // Set required to false
//     // username: { 
//     //     type: String,
//     //      required: true 
//     //     },
//     // email: {
//     //     type: String,
//     //     required: true,
//     //     unique: true,
//     // },
//     // password: {
//     //     type: String,
//     //     required: true,
//     // },

//     email: String,
//     password: String,
//     googleId: String,
//     secret: String,
    
//     role: {
//         type: String,
//         enum: ["user", "admin"],
//         default: "user",
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now,
//     },
// // });

// const User = mongoose.model("User", AdminSchema);
// export default User;
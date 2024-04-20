import mongoose from "mongoose";

export const doctorSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String, unique: true, required: true },
    password: { type: String }
})
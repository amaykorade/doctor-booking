import mongoose from "mongoose";
import { doctorSchema } from "./doctor.schema.js";

// creating model from schema
const doctorModel = mongoose.model('Doctor', doctorSchema);

export default class DoctorRepository {

    async signUp(user) {
        try {
            const presentUser = await doctorModel.findOne({ email: user.email });
            if (!presentUser) {
                const newUser = new doctorModel(user);
                await newUser.save();
                return "signup successful";
            } else {
                return "user exist";
            }

        } catch (err) {
            console.log("signup failed");
            console.log(err);
            throw new Error("Signup failed");
        }
    }

    async signIn(email, password) {
        try {
            return await doctorModel.findOne({ email, password });
        } catch (err) {
            console.log("signin failed");
            console.log(err);
            throw new Error("Signin failed");

        }
    }
}
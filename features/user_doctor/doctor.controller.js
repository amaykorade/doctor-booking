import DoctorRepository from "./doctor.repository.js";
import jwt from "jsonwebtoken";

export default class DoctorController {

    constructor() {
        this.doctorRepository = new DoctorRepository();
    }

    async signUp(req, res, next) {
        const { name, email, password } = req.body;
        const user = { name, email, password };
        console.log(user);
        try {
            const newUser = await this.doctorRepository.signUp(user);
            res.status(201).send(newUser);
        } catch (err) {
            console.log(err);
            res.status(500).send("Signup failed")
            next(err);
        }
    }

    async signIn(req, res, next) {
        try {
            const { email, password } = req.body;
            const user = await this.doctorRepository.signIn(email, password);

            if (user) {
                // create token
                const token = jwt.sign(
                    {
                        userID: user._id,
                        email: user.email,
                    },
                    'AIb6d35fvJM4O9pXqXQNla2jBCH9kuLz',
                    {
                        expiresIn: '10h'
                    }
                );
                // send token
                return res.status(200).send(token);
            } else {
                return res.status(400).send('Incorrect Credentials')
            }
        } catch (err) {
            console.log(err);
            res.status(400).send("Signin failed")
            next(err);
        }
    }
}
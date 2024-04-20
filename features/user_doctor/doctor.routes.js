import express from 'express';
import DoctorController from './doctor.controller.js';
import jwtAuth from '../../middleware/jwt.middleware.js';

// initializing the user router
const doctorRouter = express.Router();

const doctorController = new DoctorController();

// all the paths for the doctor
doctorRouter.post('/register', (req, res, next) => {
    doctorController.signUp(req, res, next)
})

doctorRouter.post('/login', (req, res, next) => {
    doctorController.signIn(req, res, next)
})




export default doctorRouter;
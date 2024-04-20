import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import { connectUsingMongoose } from './config/mongooseConfig.js';
import jwtAuth from './middleware/jwt.middleware.js';
// routers
import doctorRouter from './features/user_doctor/doctor.routes.js';
import patientRouter from './features/patient/patient.router.js';
import reportRouter from './features/reports/report.router.js';

// create server
const server = express();

// load all the environment variables in application
dotenv.config();

server.use(express.json());

// routes
server.use('/api/doctors', doctorRouter)

server.use('/api/patients', patientRouter);

server.use('/api/reports', jwtAuth, reportRouter);

// specify port
server.listen(3000, () => {
    console.log('Server is running on port 3000');
    // connecting to mongoDB
    connectUsingMongoose();
})
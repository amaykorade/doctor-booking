import express from 'express';
import PatientController from './patient.controller.js';

const patientRouter = express.Router();

const patientController = new PatientController();

patientRouter.post('/register', (req, res, next) => {
    patientController.register(req, res, next)
})

patientRouter.post('/:id/create_report', (req, res, next) => {
    patientController.generateReport(req, res, next)
})

patientRouter.get('/:id/all_reports', (req, res, next) => {
    patientController.getAll(req, res, next)
})


export default patientRouter;
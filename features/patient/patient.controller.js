import mongoose from "mongoose";
import PatientRepository from "./patient.repository.js";

export default class PatientController {

    constructor() {
        this.patientRepository = new PatientRepository()
    }

    async register(req, res, next) {
        try {
            const { name, num } = req.body;
            const user = await this.patientRepository.register(name, num);
            res.status(200).send(user);
        } catch (err) {
            console.log("error passing registration data")
        }
    }

    async generateReport(req, res, next) {
        try {
            const doctorid = req.params.id;
            // console.log(patientid)
            const doctorID = new mongoose.Types.ObjectId(doctorid);
            // console.log(patientID)
            const { name, num, doctor, status } = req.body;
            const data = { doctorID, name, num, doctor, status };
            const patientData = await this.patientRepository.generateReport({ data });
            res.status(200).send(patientData);
        } catch (err) {
            console.log(err);
            console.log("error in passing report data")
        }
    }

    async getAll(req, res, next) {
        try {
            const reports = await this.patientRepository.getAllReports();
            res.status(200).send(reports);
        } catch (err) {
            console.log(err);
        }
    }

    async filter(req, res, next) {
        try {
            const status = req.query.stauts;
            const reports = this.patientRepository.filter(status);
            res.status(200).send(reports);
        } catch (err) {
            console.log(err);
            console.log("Error passing the status")
        }

    }

}
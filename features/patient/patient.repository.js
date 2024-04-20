import mongoose from "mongoose";
import { patientSchema } from "./patient.schema.js";
import { reportSchema } from "./report.schema.js";

const patientModel = mongoose.model('Patient', patientSchema);
const ReportModel = mongoose.model('Reports', reportSchema);

export default class PatientRepository {

    async register(name, num) {
        try {
            const userExist = await patientModel.findOne({ name, num });
            if (!userExist) {
                const user = new patientModel({ name, num });
                await user.save();
                return "registered successfully"
            } else {
                return 'User already exist with the details'
            }

        } catch (err) {
            console.log("Registration failed")
        }
    }

    async generateReport({ data }) {
        console.log(data)
        try {
            const patientDataAlreadyExist = await ReportModel.findOne({ doctorID: data.doctorID, name: data.name, num: data.num });
            if (!patientDataAlreadyExist) {
                const report = new ReportModel(data);
                await report.save();
                return report;
            } else {
                return "Patient report already exist";
            }
        } catch (err) {
            console.log("Error generating the repost")
            console.log(err);
        }
    }

    async getAllReports() {
        try {
            const reports = ReportModel.find();
            return reports;
        } catch (err) {
            console.log(err);
            console.log('Error while getting all the reports')
        }
    }

}
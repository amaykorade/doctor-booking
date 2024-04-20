import mongoose from "mongoose";
import { reportSchema } from "../patient/report.schema.js";

const ReportModel = mongoose.model('Reports', reportSchema);

export default class ReportRepository {

    async filter(status) {
        try {
            const reports = await ReportModel.find({ status: status });
            if (reports.length === 0) {
                return "No such data"
            } else {
                return reports;
            }
        } catch (err) {
            console.log(err);
        }
    }
}
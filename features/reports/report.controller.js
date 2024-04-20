import mongoose from "mongoose";
import ReportRepository from "./report.repository.js";

export default class ReportController {

    constructor() {
        this.reportRepository = new ReportRepository();
    }

    async filter(req, res, next) {
        try {
            const status = req.query.status;
            console.log(status);
            const reports = await this.reportRepository.filter(status);
            res.status(200).send(reports);
        } catch (err) {
            console.log(err);
            console.log("Error passing the status")
        }

    }
}
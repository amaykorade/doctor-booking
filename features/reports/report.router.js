import express from 'express';
import ReportController from './report.controller.js';

const reportRouter = express.Router();

const reportController = new ReportController();

reportRouter.get('/', (req, res, next) => {
    reportController.filter(req, res, next)
})

export default reportRouter;
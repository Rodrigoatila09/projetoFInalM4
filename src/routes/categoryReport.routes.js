import express from 'express';
import { 
    createCategoryReport, 
    getAllCategoryReports, 
    getCategoryReportById, 
    updateCategoryReport, 
    deleteCategoryReport 
} from '../controllers/categoryReport.controller.js';

export const categoryReportRouter = express.Router();

categoryReportRouter.post('/categoryReports', createCategoryReport);
categoryReportRouter.get('/categoryReports', getAllCategoryReports);
categoryReportRouter.get('/categoryReports/:id', getCategoryReportById);
categoryReportRouter.put('/categoryReports/:id', updateCategoryReport);
categoryReportRouter.delete('/categoryReports/:id', deleteCategoryReport);

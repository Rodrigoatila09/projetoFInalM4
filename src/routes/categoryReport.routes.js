import express from 'express';
import { 
    createCategoryReport, 
    getAllCategoryReports, 
    getCategoryReportById, 
    updateCategoryReport, 
    deleteCategoryReport 
} from '../controllers/categoryReport.controller.js';

export const categoryReportRouter = express.Router();

categoryReportRouter.post('/categoria', createCategoryReport);
categoryReportRouter.get('/categoria', getAllCategoryReports);
categoryReportRouter.get('/categoria/:id', getCategoryReportById);
categoryReportRouter.put('/categoria/:id', updateCategoryReport);
categoryReportRouter.delete('/categoria/:id', deleteCategoryReport);

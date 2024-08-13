import { CategoryReport } from '../models/CategoryReport.model.js';


export const createCategoryReport = async (req, res) => {
    try {
        const { name, description } = req.body;
        const categoryReport = await CategoryReport.create({ name, description });
        return res.status(201).json(categoryReport);
    } catch (error) {
        return res.status(500).json({ error: 'Error creating category report' });
    }
};

export const getAllCategoryReports = async (req, res) => {
    try {
        const categoryReports = await CategoryReport.findAll();
        return res.status(200).json(categoryReports);
    } catch (error) {
        return res.status(500).json({ error: 'Error fetching category reports' });
    }
};


export const deleteCategoryReport = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await CategoryReport.destroy({ where: { id } });
        if (!deleted) {
            return res.status(404).json({ error: 'Category report not found' });
        }
        return res.status(204).json({ message: 'Category report deleted' });
    } catch (error) {
        return res.status(500).json({ error: 'Error deleting category report' });
    }
};


export const getCategoryReportById = async (req, res) => {
    try {
        const { id } = req.params;
        const categoryReport = await CategoryReport.findByPk(id);
        if (!categoryReport) {
            return res.status(404).json({ error: 'Category report not found' });
        }
        return res.status(200).json(categoryReport);
    } catch (error) {
        return res.status(500).json({ error: 'Error fetching category report' });
    }
};


export const updateCategoryReport = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description } = req.body;
        const [updated] = await CategoryReport.update({ name, description }, { where: { id } });
        if (!updated) {
            return res.status(404).json({ error: 'Category report not found' });
        }
        const updatedCategoryReport = await CategoryReport.findByPk(id);
        return res.status(200).json(updatedCategoryReport);
    } catch (error) {
        return res.status(500).json({ error: 'Error updating category report' });
    }
};


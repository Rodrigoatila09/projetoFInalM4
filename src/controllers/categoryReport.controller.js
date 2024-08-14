import { CategoryReport } from "../models/CategoryReport.model.js";

export const createCategoryReport = async (req, res) => {
  try {
    const { name, description } = req.body;
    const categoryReport = await CategoryReport.create({ name, description });
    return res.status(201).json(categoryReport);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao criar categoria" });
  }
};

export const getAllCategoryReports = async (req, res) => {
  try {
    const categoryReports = await CategoryReport.findAll();
    return res.status(200).json(categoryReports);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao buscar categoria" });
  }
};

export const deleteCategoryReport = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await CategoryReport.destroy({ where: { id } });
    if (!deleted) {
      return res.status(404).json({ error: "Categoria não encontrada" });
    }
    return res.status(204).json({ message: "Categoria deletada" });
  } catch (error) {
    return res.status(500).json({ error: "Erro ao deletar categoria" });
  }
};

export const getCategoryReportById = async (req, res) => {
  try {
    const { id } = req.params;
    const categoryReport = await CategoryReport.findByPk(id);
    if (!categoryReport) {
      return res.status(404).json({ error: "Categoria não encontrada" });
    }
    return res.status(200).json(categoryReport);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao buscar categoria" });
  }
};

export const updateCategoryReport = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    const [updated] = await CategoryReport.update(
      { name, description },
      { where: { id } }
    );
    if (!updated) {
      return res.status(404).json({ error: "Categoria não encontrada" });
    }
    const updatedCategoryReport = await CategoryReport.findByPk(id);
    return res.status(200).json(updatedCategoryReport);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao atualizar categoria" });
  }
};

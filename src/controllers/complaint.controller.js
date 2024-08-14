import { Complaint } from "../models/Complaint.model.js";
import { Whistleblower } from "../models/Whistleblower.model.js";
import { ResponsibleAuthority } from "../models/ResponsibleAuthority.model.js";
import { Evidence } from "../models/Evidence.model.js";
import { CategoryReport } from "../models/CategoryReport.model.js";
import { Resolution } from "../models/Resolution.model.js";
import { CrimeScene } from "../models/CrimeScene.model.js";

export const createComplaint = async (req, res) => {
  try {
    const {
      description,
      whistleBlowerID,
      responsibleAuthorityID,
      evidenceID,
      resolutionID,
      categoryReportID,
      crimeSceneID,
    } = req.body;

    const newComplaint = await Complaint.create({
      description,
      whistleBlowerID,
      responsibleAuthorityID,
      evidenceID,
      resolutionID,
      categoryReportID,
      crimeSceneID,
    });

    return res.status(201).json({ complaint: newComplaint });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const updateComplaint = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      description,
      whistleBlowerID,
      responsibleAuthorityID,
      evidenceID,
      resolutionID,
      categoryReportID,
      crimeSceneID,
    } = req.body;

    const complaint = await Complaint.findByPk(id);
    if (!complaint) {
      return res
        .status(404)
        .json({ message: "Nenhuma denúncia foi encontrada" });
    }
    const [updated] = await Complaint.update(
      {
        description,
        whistleBlowerID,
        responsibleAuthorityID,
        evidenceID,
        resolutionID,
        categoryReportID,
        crimeSceneID,
      },
      { where: { id } }
    );

    if (updated) {
      const updateComplaint = await Complaint.findByPk(id);
      return res.status(200).json({ message: "Sua denúncia foi atualizada" });
    }
    return res
      .status(400)
      .json({ message: "Não foi possível atualizar sua denúncia" });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Não foi possível atualizar sua denúncia" });
  }
};

export const deleteComplaint = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedSucesfull = await Complaint.destroy({ where: { id } });
    if (deletedSucesfull) {
      return res.json({ message: "Denúncia apagada com sucesso!" });
    } else {
      return res.json({ message: "Denúncia não foi encontrada" });
    }
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const getComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.findAll({
      include: [
        {
          model: Whistleblower,
          attributes: ["name", "email"],
        },
        {
          model: ResponsibleAuthority,
          attributes: ["nameAuthority"],
        },
        {
          model: Evidence,
          attributes: ["evidenceContent", "resolutionDetails"],
        },
        {
          model: CrimeScene,
          attributes: ["description", "location"],
        },
        {
          model: CategoryReport,
          attributes: ["description"],
        },

        {
          model: Resolution,
          attributes: ["resolutionDetails", "status"],
        },
      ],
    });

    return res.json({ complaints });
  } catch (error) {
    return res.status(400).json({ messageError: error.message });
  }
};

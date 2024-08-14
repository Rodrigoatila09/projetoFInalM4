import { Evidence } from "../models/Evidence.model.js";

export const createEvidence = async (req, res) => {
  try {
    const {
      resolutionId,
      responsibleAuthorityId,
      evidenceContent,
      resolutionDate,
      resolutionDetails,
    } = req.body;

    const newEvidence = await Evidence.create({
      resolutionId,
      responsibleAuthorityId,
      evidenceContent,
      resolutionDate,
      resolutionDetails,
    });

    
    return res.status(201).json({ evidence: newEvidence });
  } catch (error) {
    return res.status(400).json({ messageError: error.message });
  }
};

export const getEvidence = async (req, res) => {
  try {
    const evidence = await Evidence.findAll();
    return res.json({ evidence });
  } catch (error) {
    return res.status(400).json({ messageError: error.message });
  }
};

export const updateEvidence = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      resolutionId,
      responsibleAuthorityId,
      evidenceContent,
      resolutionDate,
      resolutionDetails,
    } = req.body;

    const evidence = await Evidence.findByPk(id);

    if (!evidence) {
      return res.status(404).json({ message: "Evidência não encontrada" });
    }

    const [updated] = await Evidence.update(
      {
        resolutionId,
        responsibleAuthorityId,
        evidenceContent,
        resolutionDate,
        resolutionDetails,
      },
      { where: { id } }
    );

    if (updated) {
      const updatedEvidence = await Evidence.findByPk(id);

      return res
        .status(200)
        .json({
          message: "Evidência atualizada com sucesso",
          evidence: updatedEvidence,
        });
    }

    return res
      .status(400)
      .json({ message: "Não foi possível atualizar a evidência" });
  } catch (error) {
    console.error(error);
    return res
      .status(400)
      .json({ messageError: "Não foi possível atualizar a evidência" });
  }
};

export const deleteEvidence = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Evidence.destroy({ where: { id } });

    if (deleted) {
      return res.json({ message: "Evidência deletada com sucesso" });
    }

    return res.status(404).json({ message: "Evidência não encontrada" });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ messageError: "Não foi possível deletar a evidência" });
  }
};
import { Resolution } from "../models/Resolution.model.js";

export const createResolution = async (req, res) => {
  try {
    const {
      resolutionId,
      responsibleAuthorityId,
      resolutionDate,
      resolutionDetails,
      status
    } = req.body;

    const newResolution = await Resolution.create({
      resolutionId,
      responsibleAuthorityId,
      resolutionDate,
      resolutionDetails,
      status
    });

    return res.status(201).json({ resolution: newResolution });
  } catch (error) {
    return res.status(400).json({ messageError: error.message });
  }
};

export const getResolutions = async (req, res) => {
  try {
    const resolutions = await Resolution.findAll();
    return res.json({ resolutions });
  } catch (error) {
    return res.status(400).json({ messageError: error.message });
  }
};

export const updateResolution = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      resolutionId,
      responsibleAuthorityId,
      resolutionDate,
      resolutionDetails,
      status
    } = req.body;

    const resolution = await Resolution.findByPk(id);

    if (!resolution) {
      return res.status(404).json({ message: "Resolução não encontrada" });
    }

    const [updated] = await Resolution.update(
      {
        resolutionId,
        responsibleAuthorityId,
        resolutionDate,
        resolutionDetails,
        status
      },
      { where: { id } }
    );

    if (updated) {
      const updatedResolution = await Resolution.findByPk(id);
      return res.status(200).json({
        message: "Resolução atualizada com sucesso",
        resolution: updatedResolution
      });
    }

    return res.status(400).json({ message: "Não foi possível atualizar a resolução" });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ messageError: "Não foi possível atualizar a resolução" });
  }
};

export const deleteResolution = async (req, res) => {
  try {
    const { id } = req.params;
    const resolution = await Resolution.findByPk(id);

    if (!resolution) {
      return res.status(404).json({ message: "Resolução não encontrada" });
    }

    await Resolution.destroy({ where: { id } });
    return res.json({ message: "Resolução deletada com sucesso" });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ messageError: error.message });
  }
};
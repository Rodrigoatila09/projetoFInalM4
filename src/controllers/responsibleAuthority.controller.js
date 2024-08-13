import { ResponsibleAuthority } from "../models/ResponsibleAuthority.model.js";

export const createResponsibleAuthority = async (req, res) => {
  try {
    const { nameAuthority, typeAuthority, activity, address, email, phone } =
      req.body;

    const newResposibleAuthority = await ResponsibleAuthority.create({
      nameAuthority,
      typeAuthority,
      activity,
      address,
      email,
      phone,
    });

    return res
      .status(201)
      .json({ responsibleAuthority: newResposibleAuthority });
  } catch (error) {
    return res.status(400).json({ messageError: error.message });
  }
};

export const getResponsibleAuthority = async (req, res) => {
  try {
    const responsibleAuthority = await ResponsibleAuthority.findAll();
    return res.json({ responsibleAuthority });
  } catch (error) {
    return res.status(400).json({ messageError: error.message });
  }
};

export const updateResponsibleAuthority = async (req, res) => {
  try {
    const { id } = req.params;
    const { nameAuthority, typeAuthority, activity, address, email, phone } =
      req.body;

    const responsibleAuthority = await ResponsibleAuthority.findByPk(id);

    if (!responsibleAuthority) {
      return res
        .status(404)
        .json({ message: "Autoridade responsável não encontrada" });
    }

    const [updated] = await ResponsibleAuthority.update(
      {
        nameAuthority,
        typeAuthority,
        activity,
        address,
        email,
        phone,
      },
      { where: { id } }
    );

    if (updated) {
      const updatedResposibleAuthority = await ResponsibleAuthority.findByPk(
        id
      );

      return res.status(200).json({
        message: "Autoridade responsável atualizada com sucesso",
        responsibleAuthority: updatedResposibleAuthority,
      });
    }

    return res
      .status(400)
      .json({ message: "Não foi possível atualizar a autoridade responsável" });
  } catch (error) {
    console.error(error);
    return res
      .status(400)
      .json({
        messageError: "Não foi possível atualizar a autoridade responsável",
      });
  }
};

export const deleteResponsibleAuthority = async (req, res) => {
  const { id } = req.params;
  await ResponsibleAuthority.destroy({ where: { id } });

  return res.json({ message: "Autoridade responsável deletada com sucesso" });
};

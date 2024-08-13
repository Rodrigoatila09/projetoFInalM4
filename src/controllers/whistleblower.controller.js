import { Whistleblower } from "../models/Whistleblower.model.js";

export const createWhistleblower = async (req, res) => {
  try {
    const { name, email, phone, isAnonymous } = req.body;
    const newWhistleblower = await Whistleblower.create({
      name,
      email,
      phone,
      isAnonymous,
    });
    return res.status(201).json({ newWhistleblower });
  } catch (error) {
    return res.status(400).json({ messageError: error.message });
  }
};

export const getWhistleblower = async (req, res) => {
  try {
    const whistleblowers = await Whistleblower.findAll();

    if (whistleblowers.length === 0) {
      return res.status(404).json({ message: "Nenhum delator encontrado" });
    }

    return res.status(200).json({ whistleblowers });
  } catch (error) {
    return res.status(400).json({ messageError: "Erro ao buscar delatores: " + error.message });
  }
};

export const updateWhistleblower = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phone, isAnonymous } = req.body;
    const whistleblower = await Whistleblower.findByPk(id);

    if (!whistleblower) {
      return res.status(404).json({ message: "Delator não encontrado" });
    }

    const [updated] = await Whistleblower.update(
      { name, email, phone, isAnonymous },
      { where: { id } }
    );

    if (updated) {
      const updatedWhistleblower = await Whistleblower.findByPk(id);
      return res.status(200).json({
        message: "Delator atualizado com sucesso",
        whistleblower: updatedWhistleblower,
      });
    }

    return res
      .status(400)
      .json({ message: "Não foi possível atualizar o delator" });
  } catch (error) {
    console.error(error);
    return res
      .status(400)
      .json({ messageError: "Não foi possível atualizar o delator" });
  }
};

export const deleteWhistleblower = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Whistleblower.destroy({ where: { id } });

    if (deleted) {
      return res.status(200).json({ message: "Delator deletado com sucesso" });
    }

    return res.status(404).json({ message: "Delator não encontrado" });
  } catch (error) {
    return res
      .status(400)
      .json({ messageError: "Erro ao deletar delator: " + error.message });
  }
};

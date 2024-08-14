import { CrimeScene } from "../models/CrimeScene.model.js";

export const createCrimeScene = async (req, res) => {
  try {
    const {
      location,
      description,
      dateOfCrime,
      whistleblowerId,
      responsibleAuthorityId
    } = req.body;

    const newCrimeScene = await CrimeScene.create({
        location,
        description,
        dateOfCrime,
        whistleblowerId,
        responsibleAuthorityId
    });

    return res.status(201).json({ crimeScene: newCrimeScene });
  } catch (error) {
    return res.status(400).json({ messageError: error.message });
  }
};

export const getCrimeScene = async (req, res) => {
  try {
    const crimeScene = await CrimeScene.findAll();
    return res.json({ crimeScene });
  } catch (error) {
    return res.status(400).json({ messageError: error.message });
  }
};

export const updateCrimeScene = async (req, res) => {
  try {
    const { id } = req.params;
    const {
        location,
        description,
        dateOfCrime,
        whistleblowerId,
        responsibleAuthorityId
    } = req.body;

    const crimeScene = await CrimeScene.findByPk(id);

    if (!crimeScene) {
      return res.status(404).json({ message: "Cena do crime não encontrada" });
    }

    const [updated] = await CrimeScene.update(
      {
        location,
        description,
        dateOfCrime,
        whistleblowerId,
        responsibleAuthorityId
      },
      { where: { id } }
    );

    if (updated) {
      const updateCrimeScene = await CrimeScene.findByPk(id);

      return res
        .status(200)
        .json({
          message: "Cena do Crime atualizada com sucesso",
          crimeScene: updateCrimeScene,
        });
    }

    return res
      .status(400)
      .json({ message: "Não foi possível atualizar a cena do crime" });
  } catch (error) {
    console.error(error);
    return res
      .status(400)
      .json({ messageError: "Não foi possível atualizar cena do crime" });
  }
};

export const deleteCrimeScene = async (req, res) => {
  try {
    const { id } = req.params;
    const crimeScene = await CrimeScene.findByPk(id);

    if (!crimeScene) {
      return res.status(404).json({ message: "Cena do crime não encontrada" });
    }

    await CrimeScene.destroy({ where: { id } });
    return res.json({ message: "Cena do crime deletada com sucesso" });
  } catch (error) {
    return res.status(400).json({ messageError: error.message });
  }
}
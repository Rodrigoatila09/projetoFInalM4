
import { Evidence } from "../models/Evidence.model.js";

export const createEvidence = async (req, res) => {
  try {
    const { resolutionId, responsibleAuthorityId,  evidenceContent,resolutionDate, resolutionDetails } = req.body;
    const newEvidence = await Evidence.create({ resolutionId, responsibleAuthorityId,  evidenceContent,resolutionDate, resolutionDetails  });
    return res.status(201).json({ newEvidence });
  } catch (error) {
    return res.status(400).json({ messageError: error.message });
  }
};

export const getEvidence = async (req, res) => {
    try {
        const Evidence = await Evidence.findAll()
        return res.json({ Evidence })
    }catch(error){
        return res.status(400).json({ messageError: error.message })
    }
}

export const updateEvidence = async (req, res) => {
    try{
        const { id } = req.params
        const { responsibleAuthorityId,  evidenceContent,resolutionDate, resolutionDetails  } = req.body
        const Evidence = await Evidence.findByPk(id)
        if(!Evidence){
            return res.status(404).json({ message: 'Evidencia não encontrada'})
        }

        const [updated] = await Evidence.update({ responsibleAuthorityId,  evidenceContent,resolutionDate, resolutionDetails  }, { where: { id } })
        
        if (updated){
            const updatedEvidence = await Evidence.findByPk(id)
            return res.status(200).json({ message: "Evidencia atualizada com sucesso", Evidence: updatedEvidence })
        }
        
        return res.status(400).json({ message: "Não foi possível atualizar a Evidencia" })

    }catch (error) {
        console.error(error)
        return res.status(400).json({ messageError: "Não foi possível atualizr a Evidencia" })
    }

    
}
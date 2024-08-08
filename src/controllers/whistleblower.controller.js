import { Whistleblower } from "../models/Whistleblower.model.js";

export const createWhistleblower = async (req, res) => {
  try {
    const { name, email, phone, is_anonymous } = req.body;
    const newWhistleblower = await Whistleblower.create({ name, email, phone, is_anonymous });
    return res.status(201).json({ newWhistleblower });
  } catch (error) {
    return res.status(400).json({ messageError: error.message });
  }
};

export const getWhistleblower = async (req, res) => {
    try {
        const whistleblower = await Whistleblower.findAll()
        return res.json({ whistleblower })
    }catch(error){
        return res.status(400).json({ messageError: error.message })
    }
}

export const updateWhistleblower = async (req, res) => {
    try{
        const { id } = req.params
        const { name, email, phone, is_anonymous } = req.body
        const whistleblower = await Whistleblower.findByPk(id)
        if(!whistleblower){
            return res.status(404).json({ message: 'Delator não encontrado'})
        }

        const [updated] = await Whistleblower.update({ name, email, phone, is_anonymous }, { where: { id } })
        
        if (updated){
            const updatedWhistleblower = await Whistleblower.findByPk(id)
            return res.status(200).json({ message: "Delator atualizado com sucesso", whistleblower: updatedWhistleblower })
        }
        
        return res.status(400).json({ message: "Não foi possível atualizar o delator" })

    }catch (error) {
        console.error(error)
        return res.status(400).json({ messageError: "Não foi possível atualizar o delator" })
    }

    
}
// import { where } from "sequelize";
import { Complaint, Message } from "../models/Complaint.model.js";
import { Whistleblower } from "../models/Whistleblower.model.js";

export const createComplaint = async (req,res) =>{
    try {
        const {
        title, description, evidencesID, whistlebowerID
        } = req.body;
    
        const newComplaint = await Complaint.create({
            title, description, evidencesID, whistlebowerID
        });

    return res.status(201).json({ complaint : newComplaint });
    } catch (error) {
        return res.status(400).json({Message:error})
    }   
};

export const getComplaint = async (req, res) => {
    try {
      const complaint = await Complaint.findAll();
      return res.json({ complaint });
    } catch (error) {
      return res.status(400).json({ messageError: error.message });
    }
  };


export const updateComplaint = async (req,res) =>{
    try {
        const {id} = req.params;
        const{title, description, evidencesID, whistlebowerID} = req.body;

        const complaint = await Complaint.findByPk(id);
        if(!complaint){
            return res.status(404).json({message:"Nenhuma denúncia foi encontrada"})
        }
        const [updated] = await Complaint.update(
            {title, description},
            {where: {id}}
        );

    if (updated){
        const updateComplaint = await Complaint.findByPk(id);
        return res.status(200).json({message:"Sua denúncia foi atualizada"})
    }
    return res.status(400).json({message:"Não foi possível atualizar sua denúncia", complaint: updateComplaint});

    } catch (error) {
        return res.status(200).json({message:"Não Não foi possível atualizar sua denúncia", complaint: updateComplaint})   }
}

export const deleteComplaint = async(req,res) => {
    const {id} = req.params;
    await Complaint.destroy({where: {id}});
    
    return res.json({message: "Sua denúncia foi apagada"})
}
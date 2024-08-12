import { Router } from "express";
import { createResponsibleAuthority, deleteResponsibleAuthority, getResponsibleAuthority, updateResponsibleAuthority } from "../controllers/responsibleAuthority.controller.js";

const responsibleAuthorityRouter = Router();

responsibleAuthorityRouter.post('/resposibleAuthority', createResponsibleAuthority);
responsibleAuthorityRouter.get('/resposibleAuthority', getResponsibleAuthority);
responsibleAuthorityRouter.put('/resposibleAuthority/:id', updateResponsibleAuthority);
responsibleAuthorityRouter.delete('/resposibleAuthority/:id', deleteResponsibleAuthority);



export { responsibleAuthorityRouter }
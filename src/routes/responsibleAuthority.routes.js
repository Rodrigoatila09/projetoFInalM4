import { Router } from "express";
import { createResponsibleAuthority, deleteResponsibleAuthority, getResponsibleAuthority, updateResponsibleAuthority } from "../controllers/responsibleAuthority.controller.js";

const responsibleAuthorityRouter = Router();

responsibleAuthorityRouter.post('/responsibleAuthority', createResponsibleAuthority);
responsibleAuthorityRouter.get('/responsibleAuthority', getResponsibleAuthority);
responsibleAuthorityRouter.put('/responsibleAuthority/:id', updateResponsibleAuthority);
responsibleAuthorityRouter.delete('/responsibleAuthority/:id', deleteResponsibleAuthority);



export { responsibleAuthorityRouter }


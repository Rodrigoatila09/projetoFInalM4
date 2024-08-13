import { Router } from "express";
import { createResponsibleAuthority, deleteResponsibleAuthority, getResponsibleAuthority, updateResponsibleAuthority } from "../controllers/responsibleAuthority.controller.js";

const responsibleAuthorityRouter = Router();

responsibleAuthorityRouter.post('/autoridade-responsavel', createResponsibleAuthority);
responsibleAuthorityRouter.get('/autoridade-responsavel', getResponsibleAuthority);
responsibleAuthorityRouter.put('/autoridade-responsavel/:id', updateResponsibleAuthority);
responsibleAuthorityRouter.delete('/autoridade-responsavel/:id', deleteResponsibleAuthority);



export { responsibleAuthorityRouter }
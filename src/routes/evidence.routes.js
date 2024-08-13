import { Router } from "express";
import { createEvidence, deleteEvidence, getEvidence, updateEvidence } from "../controllers/evidence.controller.js";

const evidenceRouter = Router();

evidenceRouter.post('/evidencia', createEvidence);
evidenceRouter.get('/evidencia', getEvidence);
evidenceRouter.put('/evidencia/:id', updateEvidence);
evidenceRouter.delete('/evidencia/:id', deleteEvidence);



export { evidenceRouter }
import { Router } from "express";
import { createEvidence, deleteEvidence, getEvidence, updateEvidence } from "../controllers/evidence.controller.js";

const evidenceRouter = Router();

evidenceRouter.post('/evidence', createEvidence);
evidenceRouter.get('/evidence', getEvidence);
evidenceRouter.put('/evidence/:id', updateEvidence);
evidenceRouter.delete('/evidence/:id', deleteEvidence);



export { evidenceRouter }
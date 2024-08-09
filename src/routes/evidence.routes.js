import { Router } from "express";
import { createEvidence, getEvidence, updateEvidence } from "../controllers/evidence.controller.js";

const evidenceRouter = Router();

evidenceRouter.post('/evidence', createEvidence);
evidenceRouter.get('/evidence', getEvidence);
evidenceRouter.put('/evidence/:id', updateEvidence);



export { evidenceRouter }
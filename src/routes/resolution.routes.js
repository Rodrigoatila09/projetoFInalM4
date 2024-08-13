import { Router } from "express";
import { createResolution, getResolutions, updateResolution, deleteResolution } from "../controllers/resolution.controller.js";

const resolutionRouter = Router();

resolutionRouter.post('/resolucao', createResolution);
resolutionRouter.get('/resolucao', getResolutions);
resolutionRouter.put('/resolucao/:id', updateResolution);
resolutionRouter.delete('/resolucao/:id', deleteResolution);

export { resolutionRouter };

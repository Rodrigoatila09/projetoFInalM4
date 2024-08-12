import { Router } from "express";
import { createResolution, getResolutions, updateResolution, deleteResolution } from "../controllers/resolution.controller.js";

const resolutionRouter = Router();

resolutionRouter.post('/resolution', createResolution);
resolutionRouter.get('/resolutions', getResolutions);
resolutionRouter.put('/resolution/:id', updateResolution);
resolutionRouter.delete('/resolution/:id', deleteResolution);

export { resolutionRouter };

import { Router } from "express";
import { createCrimeScene, getCrimeScene, updateCrimeScene, deleteCrimeScene } from "./controllers/crimeScene.controller.js";

const crimeSceneRouter = Router();

crimeSceneRouter.post('/crimeScene', createCrimeScene);
crimeSceneRouter.get('/crimeScene', getCrimeScene);
crimeSceneRouter.put('/crimeScene/:id', updateCrimeScene);
crimeSceneRouter.delete('/crimeScene/:id', deleteCrimeScene);



export { crimeSceneRouter }
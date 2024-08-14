import { Router } from "express";
import { createCrimeScene, getCrimeScene, updateCrimeScene, deleteCrimeScene } from "../controllers/crimeScene.controller.js";

const crimeSceneRouter = Router();

crimeSceneRouter.post('/cena-crime', createCrimeScene);
crimeSceneRouter.get('/cena-crime', getCrimeScene);
crimeSceneRouter.put('/cena-crime/:id', updateCrimeScene);
crimeSceneRouter.delete('/cena-crime/:id', deleteCrimeScene);



export { crimeSceneRouter }
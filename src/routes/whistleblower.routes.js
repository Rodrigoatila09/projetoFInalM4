import { Router } from "express";
import { createWhistleblower, getWhistleblower, updateWhistleblower, deleteWhistleblower } from "../controllers/whistleblower.controller.js";

const whistleblowerRouter = Router();

whistleblowerRouter.post('/whistleblower', createWhistleblower);
whistleblowerRouter.get('/whistleblower', getWhistleblower);
whistleblowerRouter.put('/whistleblower/:id', updateWhistleblower);
whistleblowerRouter.delete('/whistleblower/:id', deleteWhistleblower);


export { whistleblowerRouter };

import { Router } from "express";
import { createWhistleblower, getWhistleblower, updateWhistleblower } from "../controllers/whistleblower.controller.js";

const whistleblowerRouter = Router();

whistleblowerRouter.post('/whistleblower', createWhistleblower);
whistleblowerRouter.get('/whistleblower', getWhistleblower);
whistleblowerRouter.put('/whistleblower/:id', updateWhistleblower);



export { whistleblowerRouter }
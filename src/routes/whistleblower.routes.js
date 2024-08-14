import { Router } from "express";
import { createWhistleblower, getWhistleblower, updateWhistleblower, deleteWhistleblower } from "../controllers/whistleblower.controller.js";

const whistleblowerRouter = Router();

whistleblowerRouter.post('/delator', createWhistleblower);
whistleblowerRouter.get('/delator', getWhistleblower);
whistleblowerRouter.put('/delator/:id', updateWhistleblower);
whistleblowerRouter.delete('/delator/:id', deleteWhistleblower);


export { whistleblowerRouter };

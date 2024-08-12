// import {  } from "../controllers/complaint.controller.js";

import { Router } from "express";
import { createComplaint} from "../controllers/complaint.controller.js";

const complaimantRouter = Router()

complaimantRouter.post("/complaint", createComplaint)
// complaimantRouter.p


export{complaimantRouter}
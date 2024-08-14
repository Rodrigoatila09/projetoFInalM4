
import { Router } from "express";
import { createComplaint, getComplaints, deleteComplaint, updateComplaint} from "../controllers/complaint.controller.js";

const complaimantRouter = Router()

complaimantRouter.post("/complaint", createComplaint);
complaimantRouter.get("/complaints", getComplaints);
complaimantRouter.delete("/complaint/:id", deleteComplaint);
complaimantRouter.put('/complainte',updateComplaint)


export{complaimantRouter}




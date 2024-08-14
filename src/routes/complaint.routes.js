
import { Router } from "express";
import { createComplaint, getComplaints, deleteComplaint, updateComplaint} from "../controllers/complaint.controller.js";

const complaintRouter = Router()

complaintRouter.post("/denuncia", createComplaint);
complaintRouter.get("/denuncia", getComplaints);
complaintRouter.delete("/denuncia/:id", deleteComplaint);
complaintRouter.put('/denuncia',updateComplaint)


export{complaintRouter}




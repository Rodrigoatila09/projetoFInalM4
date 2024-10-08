import express from "express"
import cors from "cors"
import { connection } from "./database/connection.db.js"
import { whistleblowerRouter } from "./routes/whistleblower.routes.js"
import { evidenceRouter } from "./routes/evidence.routes.js"
import { responsibleAuthorityRouter } from "./routes/responsibleAuthority.routes.js"
import { resolutionRouter } from "./routes/resolution.routes.js"
import { complaintRouter } from "./routes/complaint.routes.js"
import { crimeSceneRouter } from "./routes/crimeScene.routes.js"
import { categoryReportRouter } from "./routes/categoryReport.routes.js"


const app = express()
const port = 4000
const corsConfig = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}

app.use(cors(corsConfig))

app.use(express.json())

app.use(responsibleAuthorityRouter)
app.use(complaintRouter)
app.use(whistleblowerRouter)
app.use(evidenceRouter)
app.use(resolutionRouter)
app.use(crimeSceneRouter)
app.use(categoryReportRouter)

app.listen(port, () => {
  connection()
  console.log(`Server is running on port ${port}`);
});


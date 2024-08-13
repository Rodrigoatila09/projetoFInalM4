import express from "express"
import { whistleblowerRouter } from "./routes/whistleblower.routes.js"
import { evidenceRouter } from "./routes/evidence.routes.js"
import { responsibleAuthorityRouter } from "./routes/responsibleAuthority.routes.js"
import { crimeSceneRouter } from "./routes/crimeScene.routes.js"
import { resolutionRouter } from "./routes/resolution.routes.js"

const app = express()
const port = 4000

app.use(express.json())

app.use(whistleblowerRouter)
app.use(evidenceRouter)
app.use(responsibleAuthorityRouter)
app.use(crimeSceneRouter)
app.use(resolutionRouter)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

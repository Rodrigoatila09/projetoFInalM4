import express from "express"
import { whistleblowerRouter } from "./routes/whistleblower.routes.js"
import { evidenceRouter } from "./routes/evidence.routes.js"




const app = express()
const port = 4000

app.use(express.json())

app.use(whistleblowerRouter)


app.use(evidenceRouter)





app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

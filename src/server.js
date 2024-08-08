import express from "express"
import { whistleblowerRouter } from "./routes/whistleblower.routes.js"



const app = express()
const port = 4000

app.use(express.json())

app.use(whistleblowerRouter)




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

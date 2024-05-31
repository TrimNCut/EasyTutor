import cors from "cors"
import express from "express"
import routes from "~/routes/index.js"

const app = express()
const bodyParser = express.json

// !cors
app.use(cors())
// !For accepting post form data
app.use(bodyParser())
// !registering routes
app.use(routes)


export default app
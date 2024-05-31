import express from "express"
import { validateUserName } from "./controller.js"

const router = express.Router()

router.post("/signin",async function (_require,_response){
  const isUserNameValid = validateUserName("")
  console.log(isUserNameValid)
})
router.post("/login",async function (_require,_response){})

export default router
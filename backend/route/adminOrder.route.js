import { Router } from "express"
import auth from "../middleware/auth.js"
import { admin }  from "../middleware/Admin.js"
import { getAllOrdersAdmin } from "../controllers/adminOrder.controller.js"

const adminRouter = Router()

adminRouter.get("/orders", auth, admin, getAllOrdersAdmin)

export default adminRouter

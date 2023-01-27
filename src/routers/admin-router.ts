import { Router } from "express";

import { createAdmin } from "@/controllers/admin-controller";
import { validationSignUp } from "@/middlewares/validations/admin-validation-middleware";

const adminRouter = Router();

adminRouter
    .post("/", validationSignUp, createAdmin)

export { adminRouter }
import { getPeriods } from "@/controllers/periods-controller";
import { Router } from "express";


const periodsRouter = Router();

periodsRouter
    .get("/:courseId", getPeriods)


export { periodsRouter };
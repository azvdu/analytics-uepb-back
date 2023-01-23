import { Router } from "express";
import { getCourses } from "@/controllers/courses-controller";


const coursesRouter = Router();

coursesRouter
    .get("/", getCourses)


export { coursesRouter };
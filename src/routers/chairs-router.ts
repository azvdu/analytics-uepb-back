import { Router } from "express";

import { getChairs } from "@/controllers/chairs-controller";

const chairsRouter = Router();

chairsRouter
    .get("/:courseId", getChairs)


export { chairsRouter };
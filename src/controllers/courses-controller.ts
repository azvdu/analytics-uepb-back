import { Request, Response } from "express";
import httpStatus from "http-status";

import coursesService from "@/services/courses-service";

export async function getCourses(req: Request, res: Response) {
    try {
        const courses = await coursesService.getCourses()
        return res.status(httpStatus.OK).send(courses);
    } catch (error) {
        if(error.name === "NotFoundError") {
            return res.sendStatus(httpStatus.NOT_FOUND);
        }
    }
}
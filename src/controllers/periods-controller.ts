import { Request, Response } from "express";

import periodsService from "@/services/periods-service";
import httpStatus from "http-status";

export async function getPeriods(req: Request, res: Response) {
    const courseId = Number(req.params.courseId)
    
    try {
        const periods = await periodsService.getPeriods(Number(courseId));
        return res.status(httpStatus.OK).send(periods);
    } catch (error) {
        if(error.name === "NotFoundError") {
            return res.sendStatus(httpStatus.NOT_FOUND);
        }
    }
}
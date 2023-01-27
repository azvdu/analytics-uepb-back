import { Request, Response } from "express";

import chairsService from "@/services/chairs-service";
import httpStatus from "http-status";

export async function getChairs(req: Request, res: Response) {
    const courseId = Number(req.params.courseId)
    
    try {
        const chairs = await chairsService.getChairs(courseId);
        return res.status(httpStatus.OK).send(chairs);
        
    } catch (error) {
        if(error.name === "NotFoundErrpr") {
            return res.sendStatus(httpStatus.NOT_FOUND);
        }
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}
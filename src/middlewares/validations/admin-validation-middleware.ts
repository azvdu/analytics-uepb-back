import { signUpSchema } from "@/schemas/admin-schema";
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

export async function validationSignUp(req: Request, res: Response, next: NextFunction){
    const admin = req.body;
    const validation = signUpSchema.validate(admin, {abortEarly: false});

    if(validation.error){
        return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(validation.error.details.map(detail => detail.message));
    }
    next();
}
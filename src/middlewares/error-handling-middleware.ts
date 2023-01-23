import { ApplicationError } from "@/utils/protocols";
import { Request, Response } from "express";
import httpStatus from "http-status";

export function handleApplicationError(err: ApplicationError | Error, _req: Request, res: Response) {
    if(err.name === "NotFoudError") {
        return res.status(httpStatus.NOT_FOUND).send({
            message: err.message,
        });
    }
}
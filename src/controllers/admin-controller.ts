import { Request, Response } from "express";
import httpStatus from "http-status";

import { Admin } from "@prisma/client";
import adminService from "@/services/admin-service";

export type CreateAdminType = Omit<Admin, "id" | "createdAt" | "updatedAt" >

export async function createAdmin(req: Request, res: Response){
    const admin: CreateAdminType = req.body;
    const findAdminByEmaiAndName = await adminService.findUserAdmin(admin);
    console.log(findAdminByEmaiAndName)
    
    if(findAdminByEmaiAndName){
        console.log("foi")
        throw{type: httpStatus.CONFLICT, message: "E-mail or Name already registered"};
    }

    await adminService.createAdmin(admin);

    return res.sendStatus(httpStatus.CREATED);
}
import bcrypt from "bcrypt";

import adminRepository from "@/repositories/admin-repository";
import { CreateAdminType } from "@/controllers/admin-controller";

async function findUserAdmin(admin: CreateAdminType){
    const findAdmin = await adminRepository.findAdminByEmailAndName(admin)

    return findAdmin;
}

async function createAdmin(admin: CreateAdminType){
    const SALT = Number(process.env.SALT);
    const passwordCrypt = bcrypt.hashSync(admin.password, SALT);

    const createAdmin = await adminRepository.createAdmin({... admin, password: passwordCrypt});
    return createAdmin
}

const adminService = {
    findUserAdmin,
    createAdmin,
};

export default adminService;
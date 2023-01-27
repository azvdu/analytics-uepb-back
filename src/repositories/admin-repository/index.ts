import { prisma } from "@/config/database";
import { CreateAdminType } from "@/controllers/admin-controller";

async function findAdminByEmailAndName({ email, name }: CreateAdminType){
    return prisma.admin.findFirst({
        where: {
            email,
            name,
        },
    });
}

async function createAdmin({ name, email, password }: CreateAdminType){
    return prisma.admin.create({
        data: {
            name,
            email,
            password,
        },
    });
}

const adminRepository = {
    findAdminByEmailAndName,
    createAdmin,
};

export default adminRepository;
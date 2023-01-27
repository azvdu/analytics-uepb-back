import { prisma } from "@/config/database";

async function findChairs(courseId: number){
    return prisma.chairs.findMany({
        where: {
            courseId,
        },
        orderBy: {
            id: "asc"
        }
    })
}

const chairsRepository = {
    findChairs,
};

export default chairsRepository;
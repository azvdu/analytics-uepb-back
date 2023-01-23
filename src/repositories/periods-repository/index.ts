import { prisma } from "@/config/database";

async function findPeriodsAndChairs(courseId: number){
    return prisma.periods.findMany({
        where: {
            courseId: courseId
        },
        orderBy: {
            period: "asc",
        }
    });
}

const periodsRepository = {
    findPeriodsAndChairs,
};

export default periodsRepository;
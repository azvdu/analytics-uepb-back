import { prisma } from "./config/database";

export async function cleanDb(){
    await prisma.course.deleteMany({});
    await prisma.courses.deleteMany({});
    await prisma.periods.deleteMany({});
}
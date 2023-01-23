import { prisma } from "@/config/database"

async function findCourses(){
    return prisma.course.findMany({
        orderBy: {
            course: "asc"
        }
    });
}


const coursesRepository = {
    findCourses,
}

export default coursesRepository;
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    let course = await prisma.course.findFirst()
    if(!course){
        course = await prisma.course.create({
            data: {
                course: "CIÊNCIAS DA COMPUTAÇÃO",
                classShift: "INTEGRAL"
            },
        });
        course = await prisma.course.create({
            data: {
                course: "PSICOLOGIA",
                classShift: "INTEGRAL"
            },
        });
        course = await prisma.course.create({
            data: {
                course: "HISTÓRIA",
                classShift: "INTEGRAL"
            },
        });
        course = await prisma.course.create({
            data: {
                course: "ADMINISTRAÇÃO",
                classShift: "INTEGRAL"
            },
        });
        course = await prisma.course.create({
            data: {
                course: "DIREITO",
                classShift: "INTEGRAL"
            },
        });
        course = await prisma.course.create({
            data: {
                course: "ODONTOLOGIA",
                classShift: "INTEGRAL"
            },
        });
    }

    let chairs = await prisma.chairs.findFirst()
    if(!chairs){
        chairs = await prisma.chairs.create({
            data: {
                courseId: 1,
                period: 1,
                chair: "ÉTICA EM COMPUTAÇÃO"
            }
        })
        chairs = await prisma.chairs.create({
            data: {
                courseId: 1,
                period: 1,
                chair: "INTRODUÇÃO À COMPUTAÇÃO"
            }
        })
        chairs = await prisma.chairs.create({
            data: {
                courseId: 1,
                period: 1,
                chair: "MATEMÁTICA DISCRETA I"
            }
        })
        chairs = await prisma.chairs.create({
            data: {
                courseId: 1,
                period: 1,
                chair: "ALGORITMOS"
            }
        })
        chairs = await prisma.chairs.create({
            data: {
                courseId: 1,
                period: 1,
                chair: "METODOLOGIA CIENTÍFICA"
            }
        })
        chairs = await prisma.chairs.create({
            data: {
                courseId: 1,
                period: 1,
                chair: "PORTUGUÊS INSTRUMENTAL"
            }
        })
        chairs = await prisma.chairs.create({
            data: {
                courseId: 1,
                period: 1,
                chair: "LÓGICA PARA COMPUTAÇÃO"
            }
        })
    }
    
    console.log({ course, chairs });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

import { notFoundError } from "@/errors";
import periodsRepository from "@/repositories/periods-repository";

async function getPeriods(courseId: number){
    const periods = await periodsRepository.findPeriodsAndChairs(courseId)
    if(!periods){
        throw notFoundError();
    }

    return periods;
}


const periodsService = {
    getPeriods,
}

export default periodsService;
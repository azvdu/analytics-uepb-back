import httpStatus from "http-status";

import chairRepository from "@/repositories/chairs-repository";

async function getChairs(courseId: number){
    const chairs = await chairRepository.findChairs(courseId);
    if(!chairs){
        throw{type: httpStatus.NOT_FOUND, message: "No result for this search!"};
    }

    return chairs;
}

const chairsService = {
    getChairs,
}

export default chairsService;
import coursesRepository from "@/repositories/courses-repository";
import httpStatus from "http-status";

async function getCourses(){
    const courses = await coursesRepository.findCourses();
    if(!courses){
        throw{type: httpStatus.NOT_FOUND, message: "No result for this search!"};
    }
    return courses;
}


const coursesService = {
    getCourses,
}

export default coursesService;
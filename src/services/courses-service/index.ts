import { notFoundError } from "@/errors";
import coursesRepository from "@/repositories/courses-repository";

async function getCourses(){
    const courses = await coursesRepository.findCourses();
    if(!courses){
        throw notFoundError();
    }
    return courses;
}


const coursesService = {
    getCourses,
}

export default coursesService;
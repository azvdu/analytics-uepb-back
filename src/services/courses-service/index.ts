import coursesRepository from "@/repositories/courses-repository";
import httpStatus from "http-status";

async function getCourses(){
    const courses = await coursesRepository.findCourses();
    if(!courses){
        throw{type: httpStatus.NOT_FOUND, message: "No result for this search!"};
    }
    
    for(let i = 0; i < courses.length; i++){
        const allCourses = []
       if(courses[i]){
        allCourses.push(courses[i])
       }
       return courses
    }
}


const coursesService = {
    getCourses,
}

export default coursesService;
import { API } from "../app.utils";
import axios from "axios";

const headers = {
  headers: {
    Authorization:localStorage.getItem("token"),
  },
};

export async function getAllCourses() {
  return await (await axios.get(`${API}/courses/all`, headers)).data.data;
}

export async function getAllJobOffers() {
  return await (await axios.get(`${API}/jobOffers/all`, headers)).data.data;
}

export async function creatingCourse() {
  return await (await axios.post(`${API}/course`, headers)).data.data;
}

export async function getGraduatesByCourse(courseId: string){

  return await (await axios.get(`${API}/students/getByCourseId/${courseId}`,headers)).data.data;

}


export async function getStudentById(Id: string) {
  try {
      if (Id.length === 24) {
          return await(await axios.get(`${API}/students/student/${Id}`,headers)).data.data;
      }
      return 'bad id, check id'
  }
  catch (err) { console.error(err) }
}


import { setStudentFormResponse } from "@/redux/slices/StudentSlice";
import { store } from "@/redux/store";
import axios from "axios";
import { Student, StudentRepository } from "../domain/Student";

export const studentRepository: StudentRepository = {
    sendMail: async (rut: Student["rut"]): Promise<void>  => { 
        await axios.post(`/api/student/sendMail/${rut}`);
    },
    getByRut: async (rut: Student["rut"]): Promise<Student[]> => {
        const { data } = await axios.get(`http://localhost:3000/student/${rut}`);
        store.dispatch(setStudentFormResponse(data));
        return data;
    },
    save: async (student: Student): Promise<void> => {
        await axios.post(`/api/student`, student);
    }
} 
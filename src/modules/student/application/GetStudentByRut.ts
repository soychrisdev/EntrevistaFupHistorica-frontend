import { Student, StudentRepository } from "../domain/Student";

export const getStudentByRut = (studentRepository: StudentRepository) => (rut: Student["rut"] ): Promise<Student[]> => { 
   return studentRepository.getByRut(rut)
}
import { Student, StudentRepository } from "../domain/Student";

export const sendMail = async (
    studentRepository: StudentRepository,
    rut: Student["rut"],
): Promise<void> => { 

    await studentRepository.sendMail(rut)
}
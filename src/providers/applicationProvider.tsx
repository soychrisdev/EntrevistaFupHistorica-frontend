import { getStudentByRut } from "@/modules/student/application/GetStudentByRut";
import { StudentRepository } from "@/modules/student/domain/Student";
import { createContext, useContext } from "react";

interface ContextValue {
    getStudentByRut: ReturnType<typeof getStudentByRut>;
  }
  
  const ApplicationContext = createContext<ContextValue>({} as ContextValue);
  
  export const useApplication = (): ContextValue => {
    return useContext(ApplicationContext);
  };
  
  interface Props {
    children: React.ReactNode;
    dependencies: {
      studentRepository: StudentRepository;
    };
  }
  
  export const ApplicationProvider = ({ children, dependencies }: Props) => {
    const { studentRepository } = dependencies;
    return (
      <ApplicationContext.Provider
        value={{
          getStudentByRut: getStudentByRut(studentRepository),
        }}
      >
        {children}
      </ApplicationContext.Provider>
    );
  };
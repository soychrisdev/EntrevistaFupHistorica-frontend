import { Student } from "@/modules/student/domain/Student";
import { createSlice } from "@reduxjs/toolkit";

const StudentSlice = createSlice({
    name: 'student',
    initialState: [] as Array<Student>,
    reducers: {
        setStudentFormResponse: (state, action) => { 
            state.push(action.payload)
        },  
        getStudentState: (state) => {  
            return state;
        }
    },
})

export const { setStudentFormResponse, getStudentState } = StudentSlice.actions

export default StudentSlice.reducer

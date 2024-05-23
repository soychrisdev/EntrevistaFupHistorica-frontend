import { configureStore } from "@reduxjs/toolkit";
import StudentSlice from "./slices/StudentSlice";

export const store = configureStore({
    reducer: StudentSlice
})
    
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
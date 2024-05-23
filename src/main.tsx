import routerProvider from '@/providers/routerProvider'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { studentRepository } from './modules/student/infrastructure/StudentRepository'
import { ApplicationProvider } from './providers/applicationProvider'


const createDependencies = () => {
  return {
    studentRepository: studentRepository,
  }
}


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApplicationProvider dependencies={createDependencies()}>
    {/* <Provider store={store}> */}
    <RouterProvider router={routerProvider} />
    {/* </Provider> */}
    </ApplicationProvider>
  </React.StrictMode>,
)

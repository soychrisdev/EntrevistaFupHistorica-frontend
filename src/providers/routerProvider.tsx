import MainLayout from "@/layouts/MainLayout/MainLayout"
import { createBrowserRouter } from "react-router-dom"

const routerProvider = createBrowserRouter([
    {
      path: '/',
      element:<MainLayout/>,
      children: [
        {
            index: true,
            element: <div>Home</div>
        }
      ]
    },
  ])


  export default routerProvider
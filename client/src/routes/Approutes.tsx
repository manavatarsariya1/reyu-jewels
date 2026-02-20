import { createBrowserRouter } from "react-router-dom"
import LandingPage from "../Pages/LandingPage"




const AppRoutes = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
    },
])

export default AppRoutes
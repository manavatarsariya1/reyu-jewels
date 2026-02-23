import { createBrowserRouter } from "react-router-dom"
import LandingPage from "../pages/LandingPage"




const AppRoutes = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
    },
])

export default AppRoutes
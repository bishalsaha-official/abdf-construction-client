import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import RootLayouts from "../Layouts/RootLayouts";
import About from "../Pages/About/About";
import Team from "../Pages/Team/Team";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayouts,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/about',
                Component: About
            },
            {
                path: '/team',
                Component: Team
            }
        ]
    },
]);
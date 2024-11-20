import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../component/MainLayout/MainLayout";
import Home from "../component/home/Home";
import StartLearning from "../component/StartLearning/StartLearning";
import Tutorials from "../component/Tutorials/Tutorials";
import AboutUs from "../component/AboutUs/AboutUs"
import Lessons from "../component/StartLearning/Lessons/Lessons";
import Login from "../component/Login/Login";
import Register from "../component/Register/Register";

const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/StartLearning",
                element:<StartLearning></StartLearning>,
                loader:() => fetch("/language.json"),
            },
            {
                path:"/Tutorials",
                element:<Tutorials></Tutorials>
            },
            {
                path:"/AboutUs",
                element:<AboutUs></AboutUs>
            },
            {
                path: "/lesson",
                element: <Lessons />,
                loader:() => fetch("/vocabulary.json"),
            },
            
        ]
    },
    {
        path:"/login",
        element:<Login></Login>
    }, 
    {
        path:"/register",
        element:<Register></Register>
    }
])

export default router;
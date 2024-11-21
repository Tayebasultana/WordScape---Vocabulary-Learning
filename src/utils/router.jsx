import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../component/MainLayout/MainLayout";
import Home from "../component/home/Home";
import StartLearning from "../component/StartLearning/StartLearning";
import Tutorials from "../component/Tutorials/Tutorials";
import AboutUs from "../component/AboutUs/AboutUs"
import Lessons from "../component/StartLearning/Lessons/Lessons";
import Login from "../component/Login/Login";
import Register from "../component/Register/Register";
import PrivetRoute from "../component/PrivetRoute/PrivetRoute";
import Profile from "../component/Profile/Profile";
import MyProfile from "../component/Profile/MyProfile";
import UpdateProfile from "../component/Profile/UpdateProfile";
import ForgetPassword from "../component/ForgetPassword/ForgetPassword";
import ErrorPage from "../component/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
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
                element:<PrivetRoute>
                    <Tutorials></Tutorials>
                </PrivetRoute>
            },
            {
                path:"/AboutUs",
                element:<AboutUs></AboutUs>
            },
            {
                path: "/lesson/:id",
                element: <PrivetRoute><Lessons /></PrivetRoute>,
                loader:async ({params}) => {
                    const res = await fetch("/language.json")
                    const data = await res.json()
                    
                    const singleData = data.find(d => d.id == params.id)
                    console.log(singleData)
                    return singleData
                }
            },
            {
                path:"/profile",
                element:<Profile></Profile>,
                children:[
                    {
                        path:"/profile",
                        element:<MyProfile></MyProfile>
                    },
                    {
                        path:"/profile/updateProfile",
                        element:<UpdateProfile></UpdateProfile>
                    }
                ]
            }
        ]
    },
    {
        path:"/login",
        element:<Login></Login>
    },
    {
        path:"/forgetPassword",
        element:<ForgetPassword></ForgetPassword>
    }, 
    {
        path:"/register",
        element:<Register></Register>
    }
])

export default router;
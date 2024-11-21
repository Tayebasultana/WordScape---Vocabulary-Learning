import { Outlet } from "react-router-dom";


const Profile = () => {
    

    return (
        <div className="bg-gradient-to-r from-blue-200 via-white to-blue-300 py-20">
        <Outlet></Outlet>
        </div>
    );
};

export default Profile;
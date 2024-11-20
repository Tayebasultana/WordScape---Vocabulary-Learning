import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";

const Profile = () => {
    const { user } = useContext(authContext);

    return (
        <div className="bg-gradient-to-r from-blue-200 via-white to-blue-300 py-20">
            <div className="max-w-md mx-auto  p-6 bg-white shadow-md rounded-lg">
            {user ? (
                <>

               {/* <div className="absolute inset-0 flex justify-center items-center z-0">
                   <div className="animate-snow fall">
                     <div className="snowflake">&#10052;</div>
                     <div className="snowflake">&#10052;</div>
                     <div className="snowflake">&#10052;</div>
                   </div>
                 </div> */}
  
                    <h1 className="text-2xl font-bold text-center mb-4">
                        Welcome, {user.displayName || "User"}!
                    </h1>
                    <div className="text-center space-y-4">
                        {user.photoURL && (
                            <img
                                src={user.photoURL}
                                alt="Profile"
                                className="mx-auto w-24 h-24 rounded-full shadow-md"
                            />
                        )}
                        <p className="text-lg">
                            <strong>Name:</strong> {user.displayName || "N/A"}
                        </p>
                        <p className="text-lg">
                            <strong>Email:</strong> {user.email}
                        </p>
                        <button onClick={updateProfile} className="btn w-full bg-blue-950 text-white">Update Profile</button>
                    </div>
                </>
            ) : (
                <p className="text-center text-red-500">
                    No user is logged in. Please log in first.
                </p>
            )}
        </div>
        </div>
    );
};

export default Profile;
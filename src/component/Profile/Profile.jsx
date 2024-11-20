import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { NavLink } from "react-router-dom";
import { updateProfile } from "firebase/auth";

const Profile = () => {
    const { user } = useContext(authContext);

    return (
        <div className="max-w-md mx-auto my-20 p-6 bg-white shadow-md rounded-lg">
            {user ? (
                <>
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
    );
};

export default Profile;
import { updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useNavigate } from "react-router-dom";


const UpdateProfile = () => {
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const image = e.target.image.value;

        try {
            
            await updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: image,
            });

            console.log("Profile updated successfully");
            alert("Profile updated successfully!");
            navigate("/profile"); 
        } catch (error) {
            console.error("Error updating profile:", error.message);
            alert("Failed to update profile. Please try again.");
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
            <form action="" onSubmit={handleSubmit}>
               <div className="space-y-4">
               <label className="input input-bordered flex items-center gap-2 ">
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 16 16"
                 fill="currentColor"
                 className="h-4 w-4 opacity-70">
                 <path
                   d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
               </svg>
               <input type="text" name="name" className="grow" placeholder="Username" />
             </label>

             <label className="input input-bordered flex items-center gap-2">
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 16 16"
                 fill="currentColor"
                 className="h-4 w-4 opacity-70">
                 <path
                   d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
               </svg>
               <input type="text" name="image" className="grow" placeholder="Image" />
             </label>

             <button type="submit" className="btn w-full text-white text-bold text-lg bg-blue-950 hover:text-black">Update</button>
               </div>
            </form>
        </div>
    );
};

export default UpdateProfile;
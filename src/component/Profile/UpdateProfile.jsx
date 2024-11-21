import { updateProfile } from "firebase/auth";

const handleSubmit = (e) =>{
    e.preventDefault()
    updateProfile()
    console.log(updateProfile)
}

const UpdateProfile = () => {
    return (
        <div className="max-w-md mx-auto  p-6 bg-white shadow-md rounded-lg">
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
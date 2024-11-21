import { NavLink, useRouteError } from "react-router-dom";
import img from "../../assets/3814269.jpg"

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="bg-cover bg-center h-screen relative " style={{ backgroundImage: `url(${img})` }}>
      <div className="absolute right-[25%]  md:right-20 lg:right-40 bottom-[90%] md:bottom-16 lg:bottom-40">
        <NavLink to="/" className="mt-6 px-7 md:px-16 lg:px-36 py-3 bg-[#aaff00] border-2 border-black text-black font-bold text-xl rounded-lg shadow-md hover:bg-[#a9f909] transition">
          Go Back to Home
        </NavLink>
      </div>
    </div>
  );
}

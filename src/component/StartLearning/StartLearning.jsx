import { NavLink } from "react-router-dom";

import { useLoaderData } from "react-router-dom";
import LanguageCard from "./LanguageCard/LanguageCard";

const StartLearning = () => {

    const languages = useLoaderData()
    console.log(languages)

    return (
        <div className="py-20">
          <div className="pb-20">
            <h1 className="text-4xl font-extrabold text-gray-800 text-center">I want to learn....</h1>
          </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-36 px-2 md:px-7 lg:px-24 mx-auto ">
        {
             languages.map(tongue => <LanguageCard tongue={tongue} ></LanguageCard>)
        }
    </div>

      
      <div className="text-center mb-20">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Tutorial: Learn the Alphabet</h2>
        <p className="max-w-3xl mx-auto">Learn the building blocks of the language and start recognizing and using letters or characters.Tutorials focused on correct pronunciation and phonetics.</p>
        <div className="mt-6 flex justify-center">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/qYsHLUAlH_8?si=UeWfPZGHgzzILvw4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>

     
      {/* {isLoggedIn && ()} */}
        <div className="text-center mt-8">
          <NavLink to="/Tutorials" className="px-16 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition"
          >
            View More Tutorials
          </NavLink>
        </div>
      
    </div>
    );
};

export default StartLearning;
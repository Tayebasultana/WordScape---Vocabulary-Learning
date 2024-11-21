import { NavLink } from "react-router-dom";
import banner from "../../assets/6157501.jpg"
import "./Banner.css"
import 'animate.css';

const Banner = () => {
    return (
      <div className="hero py-4 md:py-20 relative p-8 shadow-lg bg-gradient-to-r from-blue-300 to-white overflow-hidden">
  {/* Decorative Snowflakes */}
  <div className="absolute inset-0 flex justify-center items-center z-0">
    <div className="animate-snow fall">
      <div className="snowflake">&#10052;</div>
      <div className="snowflake">&#10052;</div>
      <div className="snowflake">&#10052;</div>
    </div>
  </div>

  {/* Decorative Shape */}
  <div className="absolute -top-10 -left-10 w-60 h-60 bg-white opacity-10 rounded-full"></div>
  <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-indigo-400 opacity-20 rounded-full"></div>

  <div className="relative z-10 flex flex-col md:flex-row items-center gap-7 md:gap-28 justify-center">
    <div className="max-w-2xl text-center md:text-left z-20 animate__animated animate__fadeInLeft slow-animation">
      <h2 className="font-extrabold text-4xl md:text-5xl text-white leading-tight">
        Level Up Your Language with <span className="bg-gradient-to-r text-transparent bg-clip-text from-cyan-400 via-blue-300 to-sky-500">Word Scape</span>
      </h2>
      <p className="mt-4 text-lg text-white mb-7 mx-auto">
        Learn new words every day and enhance your communication skills with a touch of winter magic.
      </p>
      <NavLink to="/StartLearning" className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-blue-100 transition">
        Get Started
      </NavLink>
    </div>
    <div className="z-10">
      <img
        src={banner}
        alt="Vocabulary Banner"
        className="max-h-80 w-auto rounded-lg shadow-lg opacity-90" // Increased opacity for better visibility
      />
    </div>
  </div>
</div>

    );
};

export default Banner;
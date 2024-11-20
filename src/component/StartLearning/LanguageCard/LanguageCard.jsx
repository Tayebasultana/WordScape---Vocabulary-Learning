import { NavLink } from "react-router-dom";


const LanguageCard = ({tongue}) => {
    console.log(tongue)
    const{language, flag, learners}=tongue


    return (
        <div className="card bg-base-100 shadow-xl transition hover:scale-105">
          <figure className="px-10 pt-10">
            <img
              src={flag}
              alt="Shoes"
              className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{language}</h2>
            <p>{learners}</p>
            <NavLink to={`/lesson/${tongue.id}`}> go to vocabulary</NavLink>
          </div>
        </div>
    );
};

export default LanguageCard;
import { useNavigate } from "react-router-dom";

const LanguageCard = ({ tongue }) => {
    const { language, flag, learners } = tongue;
    const navigate = useNavigate();

    const handleToGoToVocabulary = () => {
        navigate(`/lesson/${tongue.id}`);
    };

    return (
        <div 
            onClick={handleToGoToVocabulary} 
            className="card bg-base-100 shadow-xl transition hover:scale-105 mx-4 cursor-pointer"
        >
            <figure className="px-10 pt-10">
                <img
                    src={flag}
                    alt={language}
                    className="rounded-xl"
                />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{language}</h2>
                <p>{learners}</p>
            </div>
        </div>
    );
};

export default LanguageCard;

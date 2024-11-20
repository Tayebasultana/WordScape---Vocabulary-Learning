import { useLoaderData } from "react-router-dom";
import VocabularyCard from "./VocabularyCard/VocabularyCard";



const Lessons = () => {
    const vocabularies = useLoaderData()
    console.log(vocabularies)
    
    return (
     <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-20 px-2 md:px-7 lg:px-24 mx-auto ">
        {
             vocabularies.map(vocabulary => <VocabularyCard  vocabulary={vocabulary} ></VocabularyCard>)
        }
    </div>
     </div>

    );
};

export default Lessons;
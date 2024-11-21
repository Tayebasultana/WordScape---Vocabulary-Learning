import { useLoaderData } from "react-router-dom";
import Modal from "../../Modal/Modal";


const Lessons = () => {
    const {vocabulary, language} = useLoaderData()
    console.log(vocabulary,language)
    
    return (
    <div>
              <h2 className="text-center font-bold text-3xl text-black py-10">{language}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-36 px-2 pb-20 md:px-7 lg:px-24 mx-auto">
        {
            vocabulary.map(singleVocabulary => (
              <div key={singleVocabulary.id} className="card bg-base-100 shadow-xl transition hover:scale-105 bg-gradient-to-r from-blue-200 via-white to-blue-300">
                 <div className="card-body items-center text-center space-y-2 text-blue-950">
                 <h2 className="card-title">Word: {singleVocabulary.word}</h2>
                   <h2 className="text-xl">Meaning: {singleVocabulary.meaning}</h2>
                   <p> When to say: {singleVocabulary.when_to_say}</p>
                   <p> Example: {singleVocabulary.example}</p>
                   <button className="btn bg-blue-950 text-white hover:bg-white hover:text-black hover:font-bold hover:border-none"
                    onClick={()=>document.getElementById('my_modal_2').showModal()}>Learn more
                   </button>
                   <Modal></Modal>
                 </div>
          
              </div>
            ))
            
        }

          
       </div>
    </div>

    );
};

export default Lessons;
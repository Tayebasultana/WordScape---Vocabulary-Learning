import { NavLink, useLoaderData } from "react-router-dom";


const Modal = () => {
  const {vocabulary} = useLoaderData()
    console.log(vocabulary)
    

    return (
        <div>
           
          {
            vocabulary.map(learnMore =>(
              <div key={learnMore.id}>
                <dialog id="my_modal_2" className="modal">
               <div className="modal-box">
                 <h3 className="font-bold text-lg">Word: {learnMore.word}</h3>
                 <p className="py-2 text-xl"> Meaning: {learnMore.meaning}</p>
                 <p className="py-2">When to say: {learnMore.when_to_say}</p>
                 <p className="py-2">Example: {learnMore.example}</p>
                 
               </div>
               <form method="dialog" className="modal-backdrop">
                 <button>close</button>
               </form>
             </dialog>
              </div>
            ))
          }

        </div>
    );
};

export default Modal;
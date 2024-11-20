import Modal from "../../../Modal/Modal";



const VocabularyCard = ({vocabulary}) => {
    console.log(vocabulary)
    const{word, meaning, pronunciation, part_of_speech}=vocabulary

    return (
        <div className="card bg-base-100 shadow-xl transition hover:scale-105">
          <div className="card-body items-center text-center">
            <h2 className="card-title">{word}</h2>
            <p> {meaning} </p>
            <p> {pronunciation} </p>
            <p> {part_of_speech} </p>
            <button className="btn" onClick={()=>document.getElementById('my_modal_2').showModal()}>Learn more</button>
            <Modal vocabulary={vocabulary}></Modal>
          </div>
       </div>
    );
};

export default VocabularyCard;
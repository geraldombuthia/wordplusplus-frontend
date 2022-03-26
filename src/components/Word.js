import { FaEllipsisV } from "react-icons/fa";
const Word = ({ word, onView, onOpen}) => {
  return (
    <div className="task" onClick = {() => onOpen(word._id, "word")} >
      <div className="sub-task">
      <h3 style={{ color: "red", cursor: "pointer" }} className = "header-width">
        {word.word.charAt(0).toUpperCase() + word.word.slice(1)}
      </h3>
      <p className ="word_type">{word.word_type}</p>
      </div>
      <FaEllipsisV onClick = {() => onOpen(word._id, "word")} className = "ellipsis"/>
    </div>
  );
};

export default Word;
//style = {{color: "red", cursor: "pointer"}}

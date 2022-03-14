import { FaEllipsisV } from "react-icons/fa";
const Word = ({ word, onView, onOpen}) => {
  return (
    <div className="task search-perimeter">
      <div onClick = {onView} className="sub-task">
      <h3 style={{ color: "red", cursor: "pointer" }} >
        {word.word.charAt(0).toUpperCase() + word.word.slice(1)}
      </h3>
      <p>{word.word_type}</p>
      </div>
      <FaEllipsisV onClick = {() => onOpen(word._id, "search")} className = "ellipsis"/>
    </div>
  );
};

export default Word;
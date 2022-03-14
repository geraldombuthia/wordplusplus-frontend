import Button from "./Button";
import { FaSearch, FaPlus } from "react-icons/fa";
const Header = ({ onClick, showAdd, onClickSearch }) => {
  return (
    <header className="header">
      <h1>Word++</h1>
      <div className="icons">
        <FaSearch style={{"color": "grey"}} onClick = {onClickSearch}/>
        <FaPlus
          color={showAdd ? "red" : "grey"}
          text={showAdd ? "Close" : "Add"}
          onClick={onClick}
        />
      </div>

      {/* <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onClick}
        style={{ width: "6em" }}
      /> */}
    </header>
  );
};

export default Header;

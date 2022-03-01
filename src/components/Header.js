import Button from "./Button";

const Header = ({ onClick, showAdd }) => {
  return (
    <header className="header">
      <h1>Word++</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onClick}
        style={{ width: "6em" }}
      />
    </header>
  );
};

export default Header;

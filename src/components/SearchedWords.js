import SearchedWord from "./SearchedWord";

const SearchedWords = ({ searchedWords, onOpen }) => {
    console.log(searchedWords[0], "search")
  return (
      <>
      {searchedWords.length !== 0 ? searchedWords.map((word) => (
        <SearchedWord key = {word._id} id = {word._id} word = {word} onOpen={onOpen} />
      )) : "Nothing to search"}
      </>
    
  );
};

export default SearchedWords;

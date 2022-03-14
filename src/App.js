import { useState, useEffect } from "react";

import Header from "./components/Header";
import Words from "./components/Words";
import AddWord from "./components/AddWord";
import ViewWord from "./components/ViewWord";
import Search from "./components/Search";
import SearchedWords from "./components/SearchedWords";

const App = () => {
  const [word, setWord] = useState("");
  const [showAdd, setShowAdd] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [words, setWords] = useState([]);
  const [searchedWords, setSearchedWords] = useState([]);

  useEffect(() => {
    const getWords = async () => {
      const wordsFromServer = await fetchWords();
      setWords(wordsFromServer);
    };

    getWords();
  }, []);

  //FetchWords
  const fetchWords = async () => {
    const res = await fetch("https://wordplusplus-api.herokuapp.com/words");
    const data = await res.json();
    return data;
  };
  //search single word
  const onSearch = async (toSearch) => {
    setSearchedWords("");
    const res = await fetch(
      `https://wordplusplus-api.herokuapp.com/words/single/${toSearch}`
    );
    const data = await res.json();
    if (data.length === 0) {
      alert("not present");
      return;
    }
    setSearchedWords(data);
  };
  //Adding a word
  const addWord = async (word) => {
    console.log(word);
    const newWord = { ...word };
    const res = await fetch("https://wordplusplus-api.herokuapp.com/words", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newWord),
    });
    const data = await res.json();
    setWords([...words, data]);
    setShowAdd(false);
  };

  const onClick = () => {
    //add button
    setShowAdd(!showAdd);
    setShowSearch(false)
  };
  const onClickSearch = () => {
    setShowSearch(!showSearch);
    setShowAdd(false)
  };
  const onOpen = (id, type) => {
    //View menu for each word
    //need for ids for edits etc...
    type === "search"?
    setWord(searchedWords.filter((word) => word._id === id)):
    setWord(words.filter((word) => word._id === id))
  };

  const onView = () => {
    console.log("View Word");
  };

  return (
    <div className="container">
      <Header
        onClick={onClick}
        showAdd={showAdd}
        onClickSearch={onClickSearch}
        showSearch={showSearch}
      />
      {showSearch ? (
        <>
          <Search onSearch={onSearch} />
          <SearchedWords searchedWords={searchedWords} onOpen={onOpen} />
        </>
      ) : (
        ""
      )}

      {showAdd ? <AddWord onAdd={addWord} /> : ""}
      {word ? (
        <ViewWord word={word} onClick={() => setWord("")} />
      ) : (
        <Words words={words} onView={onView} onOpen={onOpen} />
      )}
    </div>
  );
};
export default App;

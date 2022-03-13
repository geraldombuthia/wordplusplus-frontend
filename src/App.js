import { useState, useEffect } from "react";

import Header from "./components/Header";
import Words from "./components/Words";
import AddWord from "./components/AddWord";
import ViewWord from "./components/ViewWord";
import Search from "./components/Search";

const App = () => {
  const [word, setWord] = useState("");
  const [showAdd, setShowAdd] = useState(false);
  const [words, setWords] = useState([]);

  useEffect(() => {
    const getWords = async() => {
      const wordsFromServer = await fetchWords()
      setWords(wordsFromServer)

      console.log(wordsFromServer)
    }

    getWords();
  }, []);

  //FetchWords
  const fetchWords = async () => {
    const res = await fetch("https://wordplusplus-api.herokuapp.com/words");
    const data = await res.json();
    return data;
  };

  fetchWords();
  //Adding a word
  const addWord = async(word) =>{
    console.log(word)
    const newWord = {...word}
    const res = await fetch("https://wordplusplus-api.herokuapp.com/words", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newWord),
    })
    const data = await res.json()
    setWords([...words, data])
    setShowAdd(false)
  }
 //Search word
 const onSearch = (searchedWord) => {
   console.log("searched for", searchedWord)
 }
  const onClick = () => {
    //add button
    setShowAdd(!showAdd);
  };

  const onOpen = (id) => {
    //View menu for each word
    //need for ids for edits etc...
    setWord(words.filter((word) => word._id === id));
  };

  const onView = () => {
    console.log("View Word");
  };

  return (
    <div className="container">
      <Header onClick={onClick} showAdd={showAdd} />
      <Search onSearch = {onSearch}/>
      {showAdd ? <AddWord onAdd = {addWord}/> : ""}
      {word ? (
        <ViewWord word={word} onClick={() => setWord("")} />
      ) : (
        <Words words={words} onView={onView} onOpen={onOpen} />
      )}
    </div>
  );
};
export default App;

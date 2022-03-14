import Button from "./Button"

const ViewWord = ({word, onClick}) => {
  console.log(word[0])
  // Doesnot consider when a word has more than one word type
  return (
    <div >
      <div className="header">
        <h3 >{word[0].word.charAt(0).toUpperCase() + word[0].word.slice(1)}</h3>
        <Button color = {"red"} text = {"Back"} onClick = {onClick} style={{width: "2em"}}/>
      </div>
      <p>{word[0].word_type.charAt(0).toUpperCase() + word[0].word_type.slice(1)}</p>
      <p>{word[0].plural.charAt(0).toUpperCase() + word[0].plural.slice(1)}</p>
      <i>"{word[0].definition.charAt(0).toUpperCase() + word[0].example.slice(1)}."</i>
      <p>{word[0].example.charAt(0).toUpperCase() + word[0].definition.slice(1)}</p>
      <p>{word[0].synonyms.forEach((syn) => <div>{syn}</div>)}</p>
    </div>
  )
}

export default ViewWord
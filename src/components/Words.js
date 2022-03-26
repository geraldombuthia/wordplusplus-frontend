import Word from './Word'

const Words = ({words, onClick, onView, onOpen}) => {
  return (
    <div className="words-tab">
    {words.length !== 0 ? words.map((word) => (
      <Word key = {word._id} id = {word._id} word = {word}  onOpen = {onOpen} onView = {onView}/>
    )) : "Nothing to show"}
    </div>
    
  )
}

export default Words
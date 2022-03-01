import {useState} from 'react'

const AddWord = ({ onAdd }) => {
  const newSynonyms = []
  const [word, setWord] = useState("")
  const [definition, setDefinition] = useState("")
  const [plural, setPlural] = useState("")
  const [word_type, setWord_type] = useState("")
  const [example, setExample] = useState("")
  let   [synonyms, setSynonyms] = useState([])
  const [verified, setVerified] = useState(false)
  
  const onSubmit = (e) => {
    e.preventDefault()
    if (!word){
      alert("Please add task")
      return
    }
    if(synonyms){
      synonyms.forEach((i) => {
        newSynonyms.push(i.trim())
      })
    }
    console.log(newSynonyms)
    onAdd({
      word,
      definition,
      plural,
      word_type,
      example,
      newSynonyms,
      verified
    })
    setWord("")
    setDefinition("")
    setPlural("")
    setWord_type("")
    setExample("")
    setSynonyms([])
  }


  // onAdd({word, definition, plural, word_type, example, })
  return (
    <form className='add-form' onSubmit = {onSubmit}>
      <div className='form-control'>
        <label>Word</label>
        <input
          type='text'
          placeholder='Add Word'
          value={word}
          onChange={(e) => setWord(e.target.value)}
        required/>
      </div>
      <div className='form-control'>
        <label>Definition</label>
        <input
          type='text'
          placeholder='Add Definition'
          value={definition}
          onChange={(e) => setDefinition(e.target.value)}
        required/>
      </div>
      <div className='form-control'>
        <label>Plural</label>
        <input
          type='text'
          placeholder='Add Plural'
          value={plural}
          onChange={(e) => setPlural(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Word Type</label>
        <input
          type='text'
          placeholder='Add Word Type'
          value={word_type}
          onChange={(e) => setWord_type(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Example</label>
        <input
          type='text'
          placeholder='Add Example'
          value={example}
          onChange={(e) => setExample(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Synonyms</label>
        <input
          type='text'
          placeholder='Add Synonyms i.e good, nice, wholesome'
          value={synonyms}
          onChange={(e) => setSynonyms(e.target.value.split(","))}
        />
      </div>
      <input type='submit' value='Save Word' className='btn btn-block' />
    </form>
  )
}

export default AddWord
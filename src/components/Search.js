import { useState } from 'react'

const Search = ({onSearch}) => {
  const [searchWord, setSearchWord] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (!searchWord){
      alert("Type what to search");
      return;
    }
    if (searchWord){
      onSearch(searchWord)
    }

    setSearchWord("")
  }
  // console.log(searchWord);
  return (
    <form onSubmit = {onSubmit}>
        <div className='search-div'>
        <input
          className="input"
          type='text'
          placeholder='Search'
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
        />
        <input type='submit' value='Search' className='input_btn' />
      </div>
    </form>
  )
}

export default Search
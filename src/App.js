import React, { useState, useEffect, useImperativeHandle } from 'react'
import './App.css';
import axios from 'axios'

function App() {
  const [drinks, setDrinks] = useState([])
  const [searchTerm, setSearchTerm] = useState('whiskey')

 const handleSearch = (evt) => {
      evt.preventDefault();
      setSearchTerm(evt.target.value)
  }

  useEffect(() => {
    const loadPost = async () => {
      const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`)
      setDrinks(response.data.drinks)
    }
    loadPost()
    console.log(drinks)
  }, [searchTerm])

  return (
    <div className="App">
      <h1>Find a drink!</h1>
        <input 
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="search"/>
          <button>Search</button>
      {
       (drinks.map((drink) => 
      <h4 key={drink.idDrink}>{drink.strDrink}</h4>
      ))
    }
    </div>
  )
}

export default App;



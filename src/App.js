import React, { useState, useEffect} from 'react';
import logo from './logo.svg';
import Recipe from './Recipe';
import './App.css';


const App= ()=> {
  const APP_ID = "b4ed7552";
  const APP_KEY= "0db6cfdcdd3946c0da67de3c8b1735eb"
  // const getReq =`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')

   useEffect(() => {
    getRecipes()
  }, [])

  const getRecipes = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits)
  }
 const updateSearch = e => {
   setSearch(e.target.value)
 }
  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" onChange={updateSearch} type="text"></input>
        <button  className="search-button" type="submit">Search</button>
        </form> 
        {recipes.map(recipe =>(
          <Recipe 
          key={recipe.recipe.label}
          dietLabels={recipe.recipe.dietLabels}
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}/>
        ))}
    </div>
  );
};

export default App;

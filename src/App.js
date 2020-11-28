import React, { useState, useEffect} from 'react';
import logo from './logo.svg';
import Recipe from './Recipe';
import './App.css';
import Header from './Header';
import Blog from './Pages/Blog';
import Database from './Pages/Database';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home';


const App= ()=> {
  const APP_ID = "b4ed7552";
  const APP_KEY= "0db6cfdcdd3946c0da67de3c8b1735eb"
  // const getReq =`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chicken')
  

   useEffect(() => {
    getRecipes()
  }, [query])

  const getRecipes = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits)
  }
 const updateSearch = e => {
   setSearch(e.target.value)
 }
 const getSearch = e =>{
   e.preventDefault()//stop the fetch
   setQuery(search)
    }
  return (
  <Router>
    <div className="App">
      
      <Header />
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" onChange={updateSearch} type="text"></input>
        <button  className="search-button" type="submit">Search</button>
        </form> 
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/blog" component={Blog}> </Route>
        <Route path ="/Database" component={Database}> 
        {recipes.map(recipe =>(
          <div className="recipe">
          <Recipe 
          key={recipe.recipe.label}
          dietLabels={recipe.recipe.dietLabels}
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}

          ingredients={recipe.recipe.ingredients}
                  />
                  </div>
        ))}</Route>
    </Switch>
    </div>
    
    </Router>
  );
};

export default App;

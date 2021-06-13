import React, { useEffect, useState } from 'react'
import "./App.css";

const App = () => {

  const APP_ID ="13da73c0";
  const APP_KEY ="bd93438cb61090829657d861f0109ef2";
  
  const [recipes,setRecipes] = useState([]);

 useEffect(()=>{
  getRecipes();
 }, []);

 const getRecipes = async () => {
   const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
   const data = await response.json();
   setRecipes(data.hits);
 }

  return (
    <div className = "App">
      <form className = "search-form">
        <input className = "search-bar" type="text" />
        <button className = "search-button" type="submit">Search</button>
      </form>
    </div>
  )
}

export default App


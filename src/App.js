import React, { useEffect, useState } from 'react'
import "./App.css";

const App = () => {

  const APP_ID = "36483bb2";
  const APP_KEY = "b263639c38e1cac8c5849451cffb232c";
  const ExampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;


 const [counter, setCounter] = useState(0);

 useEffect(()=>{
  console.log('Effect has been run');
 });

  return (
    <div className = "App">
      <form className = "search-form">
        <input className = "search-bar" type="text" />
        <button className = "search-button" type="submit">Search</button>
      </form>
      <h1 onClick={() => setCounter(counter + 1)} >{counter}</h1>
    </div>
  )
}

export default App


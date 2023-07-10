import logo from './logo.svg';
import './App.css';
import Post from './components/post';
import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {
  const [pokemonName, setPokemonName] = useState([])


  const getList = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=808&offset=0')
    .then(res=>setPokemonName(res.data))
    .catch(err=>console.log(err))

  }


  return (
    <div className="App">
    <h1>Pokemon List</h1>


    <button onClick={getList} className='bigButton' >Catch em All</button>

    <Post name={pokemonName}/>
    
    </div>
  );
}

export default App;

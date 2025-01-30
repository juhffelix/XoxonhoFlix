import logo from './logo.svg';
import Header from './components/Header'
import RoutesApp from './routes';
import './App.css';
import Home from './pages/home'
import Sobre from './pages/sobre'

import { useEffect, useState } from 'react';

function App() {
  const [movies, setMovies] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
       Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_KEY}`
    }
  };
  
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1', options);
        const data = await response.json();
        setMovies(data.results); 
        console.log(data);
      } catch (err) {
        console.error(err); 
      }
    };

    fetchMovies(); 
  }, [])
  return (

    <div> <nav><Header/></nav>
    <div className="container">
    <Home movies={movies} />
    
      </div>
      </div>
  );
}

export default App;

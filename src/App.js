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
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NWJlZTJjZTczM2ZjNzZiZTZjZDA3NzIzNTRmYjMwYiIsIm5iZiI6MTczNjA5MzU2MC40MTkwMDAxLCJzdWIiOiI2NzdhYWY3OGE2ZGVmMDExMWE3NGEyODAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.cg7r0YMpVgb_z9E9m-yhyY6ygqduoW9uYVzyrzzug6Q'
    }
  };
  
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);
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

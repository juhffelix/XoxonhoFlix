// src/App.js
import React, { useEffect, useState } from 'react';
import { fetchMovies } from './services/api'; 
import RoutesApp from './routes';
import Header from './components/Header';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  

  useEffect(() => {
    const getMovies = async () => {
      const fetchedMovies = await fetchMovies(); 
      setMovies(fetchedMovies); 
      
    };

    getMovies();
  }, []);



  return (
    <div>
      <Header />
      <RoutesApp movies={movies} /> 
    </div>
  );
}

export default App;

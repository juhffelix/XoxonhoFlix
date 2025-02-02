import React, { useEffect, useState } from 'react';
import { fetchMovies } from './services/api'; // Importa a função de fetch
import RoutesApp from './routes';
import Header from './components/Header';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  const updateMovies = (newMovie) => {
    const updatedMovies = [...movies, newMovie];
    setMovies(updatedMovies); // Atualiza o estado
    localStorage.setItem('movies', JSON.stringify(updatedMovies)); // Atualiza o localStorage
  };

  useEffect(() => {
    const storedMovies = localStorage.getItem('movies');
    if (storedMovies) {
      setMovies(JSON.parse(storedMovies));
    } else {
      const getMovies = async () => {
        const fetchedMovies = await fetchMovies();
        setMovies(fetchedMovies);
        localStorage.setItem('movies', JSON.stringify(fetchedMovies));
      };
      getMovies();
    }
  }, []);

  return (
    <div>
      <Header />
      <RoutesApp movies={movies} updateMovies={updateMovies} /> {/* Passando o setMovies para os componentes filhos */}
    </div>
  );
}


export default App;

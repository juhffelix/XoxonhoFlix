// src/services/api.js

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_KEY}`,
    },
  };
  
  export const fetchMovies = async () => {
    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1',
        options
      );
      const data = await response.json();
      return data.results || []; 
    } catch (err) {
      console.error('Erro ao buscar filmes:', err);
      return []; 
    }
  };
  
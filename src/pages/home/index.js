import React from 'react';

const Home = ({ movies }) => {
  return (
    <div className="movies-container">
      {movies.map((movie) => (
        <article key={movie.id} className="mvs">
          <div className="movie-header">
            <h2 className='movieTitle'>{movie.original_title}</h2>
          </div>
          
          <div className='image-container'>
            <img 
              className='movie-image'
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
              alt={movie.original_title} 
            />
          </div>
          
          <div className="movie-details">
            <p className="overview">{movie.overview}</p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Home;

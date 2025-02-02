import { useParams, Link } from "react-router-dom";



const Sobre = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find(movie => movie.id === Number(id));

  if (!movie) {
    return <h2>Filme não encontrado</h2>;
  }

  return (
    <div className="about-container">
      <h2 className="about-title">{movie.title}</h2>
      <p className="about-rating">⭐ {movie.vote_average.toFixed(1)}</p>

      <div className="image-about">
        <img
          className="movie-about"
          src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
          alt={movie.original_title}
        />
      </div>

      <p className="about-info">📊 Popularidade: {movie.popularity.toFixed(0)}</p>
      <p className="about-date">📅 Lançamento: {new Date(movie.release_date).toLocaleDateString()}</p>

      <Link to="/" className="back-button">🔙 Voltar</Link>
    </div>
  );
};

export default Sobre;

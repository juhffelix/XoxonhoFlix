import React from "react";
import { Link } from "react-router-dom";

const Home = ({ movies }) => {
	return (
		<div className="movies-container">
			{movies.map((movie) => (
				<article key={movie.id} className="mvs">
					<div className="movie-header">
						<h2 className="movieTitle">
							{movie.title || movie.original_title}
						</h2>
					</div>

					<div className="image-container">
						<img
							className="movie-image"
							src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
							alt={movie.original_title}
						/>
					</div>

					<div className="movie-details">
						<div>
							<Link to={`../about/${movie.id}`} className="movie-link">
								Detalhes
							</Link>
						</div>
						<p className="overview">{movie.overview}</p>
					</div>
				</article>
			))}
		</div>
	);
};

export default Home;

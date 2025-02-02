import React, { useEffect, useState } from "react";
import { fetchMovies } from "./services/api";
import RoutesApp from "./routes";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

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
			<ToastContainer autoClose={4000} />
			<Header />
			<RoutesApp movies={movies} />
		</div>
	);
}

export default App;

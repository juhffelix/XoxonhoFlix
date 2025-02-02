import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Sobre from "./pages/about";
import Favorite from "./pages/favorite";

function RoutesApp({ movies }) {

	return (
		<Routes>
			<Route path="/" element={<Home movies={movies} />} />
			<Route path="/favorite" element={<Favorite movies={movies} />} />
			<Route path="/about/:id" element={<Sobre movies={movies} />} />
		</Routes>
	);
}

export default RoutesApp;

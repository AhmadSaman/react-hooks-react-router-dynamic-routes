import React from "react";
import { Link } from "react-router-dom";

function MovieList({ movies }) {
	const moviesList = Object.keys(movies).map((movieID) => (
		<li key={movieID}>
			<Link to={`/movies/${movieID}`}>{movies[movieID].title}</Link>
		</li>
	));
	return <div>{moviesList}</div>;
}

export default MovieList;

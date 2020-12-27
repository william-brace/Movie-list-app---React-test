export function filterByGenre(currentGenre, allMovies) {
  const movies = allMovies.filter((movie) => movie.genre.name === currentGenre);
  return movies;
}

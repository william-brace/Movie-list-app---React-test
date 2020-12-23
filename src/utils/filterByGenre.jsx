export function filterByGenre(currentGenre, allMovies) {
  console.log(currentGenre, allMovies);
  const movies = allMovies.filter((movie) => movie.genre.name === currentGenre);
  console.log(movies);
  return movies;
}

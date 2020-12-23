import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Movie from "./movie";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import { getGenres } from "../services/fakeGenreService";
import { filterByGenre } from "../utils/filterByGenre";

class MovieList extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4,
    currentPage: 1,
    genres: getGenres(),
    currentGenre: "AllMovies",
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m !== movie);
    this.setState({ movies });
  };

  handlePageChange = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };

  handleGenreSelect = (genre) => {
    this.setState({ currentGenre: genre, currentPage: 1 });
  };

  render() {
    let { length: count } = this.state.movies;
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      genres,
      currentGenre,
    } = this.state;

    let movies;
    let movieCount;

    if (currentGenre !== "AllMovies") {
      console.log("Running!");
      movies = filterByGenre(currentGenre, allMovies);
      console.log(movies);
      movies = paginate(movies, currentPage, pageSize);
      movieCount = movies.length;
    } else {
      movies = paginate(allMovies, currentPage, pageSize);
      console.log(movies);
      movieCount = allMovies.length;
    }

    if (this.state.movies.length === 0)
      return <p>There are no movies in the databse.</p>;

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-6">
            <ListGroup
              genres={genres}
              id={currentGenre._id}
              currentGenre={currentGenre}
              onItemSelect={this.handleGenreSelect}
            />
          </div>
          <div className="col-6">
            <p>There are {movieCount} movies in the database.</p>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Name</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Rate</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {movies.map((movie) => (
                  <Movie
                    key={movie._id}
                    movie={movie}
                    onDelete={this.handleDelete}
                  />
                ))}
              </tbody>
            </table>
            <Pagination
              itemsCount={movieCount}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MovieList;

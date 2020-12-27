import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import MoviesTable from "./moviesTable";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import { getGenres } from "../services/fakeGenreService";
import { filterByGenre } from "../utils/filterByGenre";
import _ from "lodash";

class MovieList extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4,
    currentPage: 1,
    genres: getGenres(),
    currentGenre: "AllMovies",
    sortColumn: { path: "title", order: "asc" },
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

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  render() {
    // let { length: count } = this.state.movies;
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      genres,
      currentGenre,
      sortColumn,
    } = this.state;

    let movies;
    let movieCount;

    if (currentGenre !== "AllMovies") {
      let filtered = filterByGenre(currentGenre, allMovies);
      let ordered = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
      movies = paginate(ordered, currentPage, pageSize);
      movieCount = movies.length;
    } else {
      let ordered = _.orderBy(allMovies, [sortColumn.path], [sortColumn.order]);
      movies = paginate(ordered, currentPage, pageSize);
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
            <MoviesTable
              movies={movies}
              sortColumn={sortColumn}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
            />
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

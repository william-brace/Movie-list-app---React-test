import React, { Component } from "react";
import Table from "./common/table";

class MoviesTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "delete",
      content: (movie) => (
        <button
          onClick={() => this.props.onDelete(movie)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      ),
    },
  ];

  //delete button occupies a column so it must be present in array,
  // key value is set so a key can be given to each child element to prevent error

  render() {
    const { movies, onDelete, sortColumn, onSort } = this.props;

    return (
      <Table
        columns={this.columns}
        onSort={onSort}
        sortColumn={sortColumn}
        data={movies}
        onDelete={onDelete}
      />
    );
  }
}

export default MoviesTable;

import React, { Component } from "react";

class Movie extends Component {
  render() {
    const { movie } = this.props;

    return (
      <React.Fragment>
        <tr>
          <td>{movie.title}</td>
          <td>{movie.genre.name}</td>
          <td>{movie.numberInStock}</td>
          <td>{movie.dailyRentalRate}</td>
          <td>
            <button
              onClick={() => this.props.onDelete(this.props.movie)}
              className="btn btn-danger btn-sm m-2"
            >
              Delete
            </button>
          </td>
        </tr>

        {/* <div className="col-4">{movie.title}</div>
        <div className="col-2">{movie.genre.name}</div>
        <div className="col-1">{movie.numberInStock}</div>
        <div className="col-2">{movie.dailyRentalRate}</div>
        <div className="col-2">
          <button
            onClick={() => this.props.onDelete(this.props.movie)}
            className="btn btn-danger btn-sm m-2"
          >
            Delete
          </button>
        </div> */}
      </React.Fragment>
    );
  }
}

export default Movie;

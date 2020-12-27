import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  renderCell = (item, column) => {
    return column.content ? column.content(item) : _.get(item, column.path);
  };

  createKey = (item, column) => {
    return item._key + column.path || column.key;
  };

  render() {
    const { data, columns } = this.props;

    return (
      <tbody>
        {/* {data.map((item) =>  (
          //<tr> {columns.map(column => <td>{columns.path}</td>
        ))} */}

        {data.map((item) => (
          <tr key={item._id}>
            {columns.map((column) => (
              <td key={this.createKey(item, column)}>
                {this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;

// class Movie extends Component {
//   render() {
//     const { movie } = this.props;

//     return (
//       <React.Fragment>
//         <tr>
//           <td>{movie.title}</td>
//           <td>{movie.genre.name}</td>
//           <td>{movie.numberInStock}</td>
//           <td>{movie.dailyRentalRate}</td>
//           <td>
//             <button
//               onClick={() => this.props.onDelete(this.props.movie)}
//               className="btn btn-danger btn-sm m-2"
//             >
//               Delete
//             </button>
//           </td>
//         </tr>
//       </React.Fragment>
//     );
//   }
// }

// export default Movie;

import React from "react";

const TableItem = ({ match, history }) => {
  return (
    <React.Fragment>
      <h1>MovieForm</h1>
      <h1>{match.params.id}</h1>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => history.push("/movies")}
      >
        Save
      </button>
    </React.Fragment>
  );
};

export default TableItem;

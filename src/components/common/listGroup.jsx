import React from "react";

const ListGroup = (props) => {
  const {
    genres,
    textProperty,
    valueProperty,
    currentGenre,
    onItemSelect,
  } = props;
  return (
    <ul className="list-group">
      <li
        key={currentGenre[valueProperty]}
        className={
          currentGenre === "AllMovies"
            ? "list-group-item active"
            : "list-group-item"
        }
        onClick={() => onItemSelect("AllMovies")}
      >
        All Genres
      </li>
      {genres.map((genre) => (
        <li
          key={genre[valueProperty]}
          className={
            currentGenre === genre[textProperty]
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => onItemSelect(genre[textProperty])}
        >
          {genre[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;

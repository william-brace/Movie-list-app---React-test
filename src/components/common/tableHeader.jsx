import React, { Component } from "react";

class TableHeader extends Component {
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };

    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }

    this.props.onSort(sortColumn);
  };

  renderIcon = (column) => {
    const { sortColumn } = this.props;

    if (column.path === sortColumn.path) {
      if (sortColumn.order === "asc") return <i className="fa fa-sort-asc"></i>;
      return <i className="fa fa-sort-desc"></i>;
    }
  };

  render() {
    const { columns } = this.props;

    return (
      <thead className="clickable">
        <tr>
          {columns.map((column) => (
            <th
              key={column.path || column.key}
              onClick={() => this.raiseSort(column.path)}
              scope="col"
            >
              {column.label} {this.renderIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;

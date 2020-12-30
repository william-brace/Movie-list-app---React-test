import React from "react";

const Input = ({ name, value, label, onChange, error }) => {
  return (
    <div className="form-group">
      <label className="form-label" htmlFor={name}>
        {label}
      </label>
      <input
        className="form-control"
        type="text"
        id={name}
        value={value}
        onChange={onChange}
        name={name}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;

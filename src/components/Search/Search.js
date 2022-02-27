import React from 'react';
import './Search.css';
const Search =({value, handleChange, onSubmit}) => {
  return (
    <div className="form-group has-search">
    <form onSubmit={onSubmit}>
      <span className="fa fa-search form-control-feedback"></span>
      <input
        type="text"
        className="form-control"
        placeholder=" Search for an artist..."
        value={value}
        onChange={handleChange}
      />
    </form>
</div>
  )
}

export default Search
import React, { useState } from "react";

function Search({ onSearch }) {
  const [searchString, setSearchString] = useState("");

  const handleChange = (evt) => {
    setSearchString(evt.target.value);
  };
  return (
    <div className="w-25 d-flex">
      <input
        value={searchString}
        onChange={handleChange}
        className="form-control"
        placeholder="Search by email"
      />
      <button
        onClick={() => {
          onSearch(searchString);
        }}
        className="btn btn-success ms-1"
      >
        Search
      </button>
    </div>
  );
}

export default Search;

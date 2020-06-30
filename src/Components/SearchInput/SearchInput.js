import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  redux_FetchRestaurantsRequest,
  redux_SetFilterTerm,
} from "../../Redux/Ducks/ducksAppRoot";

function SearchInput({ redux_FetchRestaurantsRequest, redux_SetFilterTerm }) {
  const [location, setLocation] = useState(null);
  const [filterTerm, setFilterTerm] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!location) return;
    redux_FetchRestaurantsRequest(location);
  };

  useEffect(() => {
    redux_SetFilterTerm(filterTerm);
  }, [filterTerm, redux_SetFilterTerm]);

  return (
    <form action="#" onSubmit={handleOnSubmit}>
      <input
        type="text"
        onChange={(e) => {
          setLocation(e.target.value);
        }}
      />
      <button type="submit">Submit location</button>
      <input
        type="text"
        placeholder="filter"
        onChange={(e) => {
          setFilterTerm(e.target.value);
        }}
      />
    </form>
  );
}

const mapDispatchToProps = {
  redux_FetchRestaurantsRequest,
  redux_SetFilterTerm,
};

export default connect(null, mapDispatchToProps)(SearchInput);

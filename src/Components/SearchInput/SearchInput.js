import React, { useState } from "react";
import { connect } from "react-redux";
import { redux_FetchRestaurantsRequest } from "../../Redux/Ducks/ducksAppRoot";

function SearchInput({ redux_FetchRestaurantsRequest }) {
  const [location, setLocation] = useState(null);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!location) return;
    redux_FetchRestaurantsRequest(location);
  };

  return (
    <form action="#" onSubmit={handleOnSubmit}>
      <input
        type="text"
        onChange={(e) => {
          setLocation(e.target.value);
        }}
      />
      <button type="submit">Submit location</button>
    </form>
  );
}

const mapDispatchToProps = {
  redux_FetchRestaurantsRequest,
};

export default connect(null, mapDispatchToProps)(SearchInput);

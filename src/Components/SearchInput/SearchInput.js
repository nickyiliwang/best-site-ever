import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  redux_FetchRestaurantsRequest,
  redux_SetFilterTerm,
} from "../../Redux/Ducks/ducksAppRoot";

import background from "../../assets/restaurant.jpg";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 20vh 0;

  h1 {
    position: absolute;
    color: white;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    font-weight: 700;
    font-size: 32px;
    top: 100px;
  }

  .button {
    display: none;
  }

  h1 {
    margin-bottom: 20px;
    font-weight: 600;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -1;
  }
`;

const StyledInput = styled.input`
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  padding: 10px 40px 10px 20px;
  border-radius: 10px;
  font-size: 18px;
  border: none;
  margin: 0 10px;
`;

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
    <StyledForm action="#" onSubmit={handleOnSubmit}>
      <h1>Find your perfect restaurant</h1>
      <label htmlFor="city" className="visuallyHidden">
        Please enter a city name
      </label>
      <StyledInput
        type="text"
        name="city"
        id="city"
        aria-label="Please enter a city name"
        placeholder="Please enter a city name"
        onChange={(e) => {
          setLocation(e.target.value);
        }}
      />
      <button type="submit" className="button"></button>
      <label htmlFor="filter" className="visuallyHidden">
        Filter names within results
      </label>
      <StyledInput
        type="text"
        name="filter"
        id="filter"
        placeholder="Filter names within results"
        onChange={(e) => {
          setFilterTerm(e.target.value);
        }}
      />
    </StyledForm>
  );
}

const mapDispatchToProps = {
  redux_FetchRestaurantsRequest,
  redux_SetFilterTerm,
};

export default connect(null, mapDispatchToProps)(SearchInput);

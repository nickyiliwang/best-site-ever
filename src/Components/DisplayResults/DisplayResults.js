import React from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import LoadingSkeleton from "../../util/LoadingSkeleton";
import { connect } from "react-redux";
import styled from "styled-components";

const StyledDisplayResults = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function DisplayResults({ isFetching, restaurants, filterTerm }) {
  const displayRestaurants = () => {
    if (isFetching) {
      return <LoadingSkeleton />;
    } else if (!isFetching && restaurants !== null && !filterTerm) {
      return restaurants.map((restaurant) => {
        return <RestaurantCard key={restaurant.id} restaurant={restaurant} />;
      });
    } else if (!isFetching && restaurants !== null && filterTerm) {
      const filteredRestaurants = restaurants.filter((restaurant) => {
        const { name, address, city, area } = restaurant;
        if (
          name.includes(filterTerm) ||
          address.includes(filterTerm) ||
          city.includes(filterTerm) ||
          area.includes(filterTerm)
        ) {
          return restaurant;
        }
        return null;
      });
      if (filteredRestaurants && filteredRestaurants.length) {
        return filteredRestaurants.map((restaurant) => {
          return <RestaurantCard key={restaurant.id} restaurant={restaurant} />;
        });
      } else {
        return <p>No filter result.</p>;
      }
    } else {
      return <p>Please enter location</p>;
    }
  };

  return <StyledDisplayResults>{displayRestaurants()}</StyledDisplayResults>;
}

const mapStateToProps = ({ appReducer }) => ({
  isFetching: appReducer.apiStatus.apiProcessing,
  restaurants: appReducer.restaurants,
  filterTerm: appReducer.filterTerm,
});

export default connect(mapStateToProps, null)(DisplayResults);

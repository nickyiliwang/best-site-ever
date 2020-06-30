import React from "react";
import styled from "styled-components";

const StyledRestaurantCard = styled.div`
  width: 33.33%;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
`;

const StyledCardImage = styled.div``;
const StyledCardInfo = styled.div`
  padding: 20px;
`;

export default function RestaurantCard({ restaurant }) {
  const { name, address, area, image_url } = restaurant;
  return (
    <StyledRestaurantCard>
      <StyledCardImage>
        <img src={image_url} alt={name} />
      </StyledCardImage>
      <StyledCardInfo>
        <h3>{`Name: ${name}`}</h3>
        <p>{`Address: ${address}`}</p>
        <p>{`Area: ${area}`}</p>
      </StyledCardInfo>
    </StyledRestaurantCard>
  );
}

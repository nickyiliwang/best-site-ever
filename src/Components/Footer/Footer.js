import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  background: #faf1ed;
  padding: 5px;
  font-size: 12px;
`;

export default function Footer() {
  return (
    <StyledFooter>Made by Nick Wang © 2020 BMO FED Assessment</StyledFooter>
  );
}

import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);

  a {
    color: black;
    text-align: center;
    padding: 12px;
    text-decoration: none;
    font-size: 18px;
    line-height: 25px;
    border-radius: 4px;
  }

  a.logo {
    font-size: 25px;
    font-weight: bold;
  }

  a:hover {
    background-color: #ddd;
    color: black;
  }

  ul {
    display: flex;
    align-items: center;
  }

  @media screen and (max-width: 500px) {
    .header a {
      float: none;
      display: block;
      text-align: left;
    }

    .header-right {
      float: none;
    }
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <a className="logo" href="/">
        Best Site Ever !
      </a>
      <ul>
        <li>
          <a href="#signin">signin</a>
        </li>
        <li>
          <a href="#signun">signup</a>
        </li>
      </ul>
    </StyledHeader>
  );
}

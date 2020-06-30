import React from "react";
import SearchInput from "./Components/SearchInput/SearchInput";
import DisplayResults from "./Components/DisplayResults/DisplayResults";
import { GlobalStyle } from "./util/GlobalStyles";

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <div className="wrapper">
        <SearchInput />
        <DisplayResults />
      </div>
    </div>
  );
}

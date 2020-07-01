import React from "react";
import Header from "./Components/Header/Header";
import SearchInput from "./Components/SearchInput/SearchInput";
import DisplayResults from "./Components/DisplayResults/DisplayResults";
import { GlobalStyle } from "./util/GlobalStyles";
import Footer from "./Components/Footer/Footer";

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <main>
        <Header />
        <header className="wrapper">
          <SearchInput />
          <DisplayResults />
        </header>
      </main>
      <Footer />
    </div>
  );
}
